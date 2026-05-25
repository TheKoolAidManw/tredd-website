import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

const MAIL_TO = process.env.MAIL_TO || 'contact@treddatdsoa.org';
const MAIL_FROM = process.env.MAIL_FROM || process.env.SMTP_USER;

app.use(express.json({ limit: '32kb' }));
app.use(express.static(__dirname));

function createTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return null;
  }
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

function isValidEmail(value) {
  return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message, website } = req.body || {};

  if (website) {
    return res.status(200).json({ ok: true });
  }

  if (!name?.trim() || !isValidEmail(email) || !message?.trim()) {
    return res.status(400).json({ error: 'Name, valid email, and message are required.' });
  }

  if (message.trim().length < 10) {
    return res.status(400).json({ error: 'Message must be at least 10 characters.' });
  }

  const transport = createTransport();
  if (!transport || !MAIL_FROM) {
    console.error('SMTP not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASS, and MAIL_FROM in .env');
    return res.status(503).json({ error: 'Email service is not configured yet.' });
  }

  const subjectLine = subject?.trim()
    ? `[TREDD] ${subject.trim()}`
    : '[TREDD] New website message';

  const text = [
    `Name: ${name.trim()}`,
    `Email: ${email.trim()}`,
    subject?.trim() ? `Subject: ${subject.trim()}` : null,
    '',
    message.trim(),
  ]
    .filter(Boolean)
    .join('\n');

  try {
    await transport.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: email.trim(),
      subject: subjectLine,
      text,
    });
    res.json({ ok: true });
  } catch (err) {
    console.error('Failed to send email:', err.message);
    res.status(500).json({ error: 'Failed to send message. Please try again or email us directly.' });
  }
});

app.listen(PORT, () => {
  console.log(`TREDD site running at http://localhost:${PORT}`);
});
