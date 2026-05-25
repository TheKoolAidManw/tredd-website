# TREDD Website

A modern, responsive website for **TREDD** (Technology Recycling and Eliminating the Digital Divide), a student-run non-profit organization dedicated to bridging the digital gap through technology recycling.

## 🌟 Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Carousel**: Showcases TREDD activities with auto-advancing image slides
- **Smooth Animations**: Hover effects, scroll animations, and interactive elements
- **Contact Form**: Functional contact form with validation
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Performance Optimized**: Fast loading with optimized CSS and JavaScript

## 🎯 Mission

TREDD is dedicated to eliminating the digital divide by:
- **Collecting and refurbishing** unused computers
- **Distributing technology** to children from under-resourced communities
- **Building stronger communities** through digital access

## 📁 Project Structure

```
tredd-website/
├── index.html          # Main page (styles/scripts inline)
├── server.js           # Express server + Nodemailer contact API
├── package.json        # Node dependencies
├── Images/             # Photos
├── .env.example        # SMTP config template
└── CONTACT_FORM_SETUP.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- SMTP credentials (see `CONTACT_FORM_SETUP.md`)

```bash
cp .env.example .env   # then edit with your SMTP settings
npm install
npm start              # http://localhost:3000
```

### Local development
1. Clone this repository
2. Follow `CONTACT_FORM_SETUP.md` to configure `.env`
3. Run `npm start` and open `http://localhost:3000`

### Deployment
The contact form requires the Node server. Deploy to Render, Railway, or similar with your SMTP env vars. GitHub Pages alone cannot send email.

## 🎨 Design Features

### Color Scheme
- **Primary Blue**: #2563eb
- **Gradient Backgrounds**: Purple to blue gradients
- **Accent Colors**: Cyan and blue tones for the logo

### Typography
- **Font Family**: Inter (Google Fonts)
- **Clean, modern** and highly readable

### Interactive Elements
- **Hover Effects**: Buttons, cards, and navigation items
- **Smooth Transitions**: All animations use CSS transitions
- **Mobile-First**: Responsive design that works on all devices

## 📱 Responsive Design

The website is fully responsive and includes:
- **Mobile Navigation**: Hamburger menu for small screens
- **Flexible Grid Layouts**: Adapts to different screen sizes
- **Optimized Images**: Proper scaling and positioning
- **Touch-Friendly**: Large touch targets for mobile devices

## 🔧 Customization

### Adding New Images to Carousel
1. Place new images in the `images/` folder
2. Update the HTML in the carousel section
3. Add corresponding navigation indicators

### Modifying Colors
- Edit the CSS variables in `styles.css`
- Primary colors are defined at the top of the file

### Updating Content
- Edit text content directly in `index.html`
- Update team stats in the team section
- Modify contact information as needed

## 📞 Contact Information

- **Email**: treddaquisitions@gmail.com
- **Address**: 501 S Sapodilla Ave, West Palm Beach
- **Instagram**: [@tredd_at_dsoa](https://www.instagram.com/tredd_at_dsoa/?hl=en)


## 📄 License

This project is created for TREDD, a student-run non-profit organization.


**TREDD** - Technology Recycling and Eliminating the Digital Divide
*Empowering communities through technology access*
