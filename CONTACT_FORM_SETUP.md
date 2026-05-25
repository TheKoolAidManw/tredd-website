# TREDD Contact Form (Nodemailer)

The contact form sends email through a Node.js server using [Nodemailer](https://nodemailer.com/). FormSubmit is no longer used.

## Setup

1. Copy the example env file:

   ```bash
   cp .env.example .env
   ```

2. Add your SMTP credentials to `.env`.

   **Gmail / Google Workspace example:**

   - Enable 2FA on the Google account
   - Create an [App Password](https://myaccount.google.com/apppasswords)
   - Set `SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=587`, `SMTP_USER`, and `SMTP_PASS`

3. Install dependencies and start the server:

   ```bash
   npm install
   npm start
   ```

4. Open `http://localhost:3000` and test the contact form.

## Environment variables

| Variable     | Description                          |
|-------------|--------------------------------------|
| `SMTP_HOST` | Mail server hostname                 |
| `SMTP_PORT` | Usually `587` (TLS) or `465` (SSL)  |
| `SMTP_USER` | SMTP login username                  |
| `SMTP_PASS` | SMTP password or app password        |
| `SMTP_SECURE` | Set `true` for port 465           |
| `MAIL_FROM` | Sender address (often same as SMTP user) |
| `MAIL_TO`   | Inbox for form messages (default: `contact@treddatdsoa.org`) |
| `PORT`      | Server port (default: `3000`)       |

## Deployment

GitHub Pages only hosts static files and **cannot** run Nodemailer. Deploy the full project to a Node host, for example:

- [Render](https://render.com)
- [Railway](https://railway.app)
- [Fly.io](https://fly.io)

Set the same environment variables in the host dashboard, then point `treddatdsoa.org` to that service (or use the host’s URL).

The server serves the website and handles `POST /api/contact`.

## Troubleshooting

- **503 "Email service is not configured"** — `.env` is missing or SMTP variables are incomplete.
- **500 on submit** — Wrong SMTP password, blocked port, or provider security settings.
- **Form works locally but not on treddatdsoa.org** — The live domain is still on GitHub Pages only; deploy the Node server and update DNS.
