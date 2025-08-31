// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Contact form handling with FormSubmit
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    // Add FormSubmit configuration
    contactForm.setAttribute('action', 'https://formsubmit.co/contact@treddatdsoa.org');
    contactForm.setAttribute('method', 'POST');
    
    // Add hidden fields for FormSubmit configuration
    const hiddenFields = [
        { name: '_subject', value: 'New Contact Form Submission from TREDD Website' },
        { name: '_template', value: 'table' },
        { name: '_captcha', value: 'false' },
        { name: '_next', value: window.location.href + '?success=true' }
    ];
    
    hiddenFields.forEach(field => {
        const hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = field.name;
        hiddenInput.value = field.value;
        contactForm.appendChild(hiddenInput);
    });
    
    contactForm.addEventListener('submit', function(e) {
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Enhanced validation with visual feedback
        let isValid = true;
        
        // Name validation
        if (!name.trim()) {
            document.getElementById('name').classList.add('error');
            showNotification('Please enter your name', 'error');
            isValid = false;
        } else {
            document.getElementById('name').classList.add('success');
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim() || !emailRegex.test(email)) {
            document.getElementById('email').classList.add('error');
            showNotification('Please enter a valid email address', 'error');
            isValid = false;
        } else {
            document.getElementById('email').classList.add('success');
        }
        
        // Message validation
        if (!message.trim()) {
            document.getElementById('message').classList.add('error');
            showNotification('Please enter your message', 'error');
            isValid = false;
        } else if (message.trim().length < 10) {
            document.getElementById('message').classList.add('error');
            showNotification('Message must be at least 10 characters long', 'error');
            isValid = false;
        } else {
            document.getElementById('message').classList.add('success');
        }
        
        if (!isValid) {
            e.preventDefault();
            return;
        }
        
        // Show loading state
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        submitButton.classList.add('loading');
        
        // Clear any previous validation states
        this.querySelectorAll('input, textarea').forEach(field => {
            field.classList.remove('error', 'success');
        });
        
        // Show success notification
        showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
        
        // Reset button state after a short delay
        setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            submitButton.classList.remove('loading');
        }, 2000);
    });
    
    // Add real-time validation
    const formFields = contactForm.querySelectorAll('input, textarea');
    formFields.forEach(field => {
        field.addEventListener('blur', function() {
            validateField(this);
        });
        
        field.addEventListener('input', function() {
            // Remove error state when user starts typing
            if (this.classList.contains('error')) {
                this.classList.remove('error');
            }
        });
    });
}

// Real-time field validation
function validateField(field) {
    const value = field.value.trim();
    const fieldType = field.type;
    const fieldName = field.name;
    
    // Remove previous validation states
    field.classList.remove('error', 'success');
    
    // Validate based on field type
    if (fieldType === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value && emailRegex.test(value)) {
            field.classList.add('success');
        } else if (value) {
            field.classList.add('error');
        }
    } else if (fieldName === 'name') {
        if (value && value.length >= 2) {
            field.classList.add('success');
        } else if (value) {
            field.classList.add('error');
        }
    } else if (fieldName === 'message') {
        if (value && value.length >= 10) {
            field.classList.add('success');
        } else if (value) {
            field.classList.add('error');
        }
    }
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        .notification-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
        }
        .notification-close {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            font-size: 16px;
            padding: 0;
            opacity: 0.8;
            transition: opacity 0.2s;
        }
        .notification-close:hover {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.mission-card, .stat-item, .contact-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add loading animation for images (excluding carousel images)
function preloadImages() {
    const images = document.querySelectorAll('img:not(.carousel-img)');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    preloadImages();
    
    // Check for success parameter in URL (FormSubmit redirect)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
        // Remove the success parameter from URL
        window.history.replaceState({}, document.title, window.location.pathname);
    }
    
    // Add some interactive effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effect to mission cards
    const missionCards = document.querySelectorAll('.mission-card');
    missionCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add typing effect to hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 150);
    }
});

// Add scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #2563eb, #667eea);
        z-index: 1001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress
document.addEventListener('DOMContentLoaded', createScrollProgress);

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Ensure first slide is visible
    if (slides.length > 0) {
        showSlide(0);
    }
});

// Carousel functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Show current slide
    if (slides[index]) {
        slides[index].classList.add('active');
        indicators[index].classList.add('active');
    }
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    
    // Loop back to first slide if at end
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    }
    // Loop to last slide if at beginning
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
}

// Auto-advance carousel
function autoAdvance() {
    changeSlide(1);
}

// Start auto-advance every 5 seconds
let carouselInterval = setInterval(autoAdvance, 5000);

// Pause auto-advance on hover
const carousel = document.querySelector('.mission-carousel');
if (carousel) {
    carousel.addEventListener('mouseenter', () => {
        clearInterval(carouselInterval);
    });
    
    carousel.addEventListener('mouseleave', () => {
        carouselInterval = setInterval(autoAdvance, 5000);
    });
}
