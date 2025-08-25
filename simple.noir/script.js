// Hero Carousel
class HeroCarousel {
    constructor() {
        this.slides = document.querySelectorAll('.hero-slide');
        this.dots = document.querySelectorAll('.carousel-dots .dot');
        this.prevBtn = document.querySelector('.carousel-arrow.prev');
        this.nextBtn = document.querySelector('.carousel-arrow.next');
        this.currentIndex = 0;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 6000; // 6 seconds
        
        this.init();
    }
    
    init() {
        // Show first slide
        this.showSlide(this.currentIndex);
        
        // Event listeners
        if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prevSlide());
        if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Dot navigation
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });
        
        // Touch events for mobile
        this.addTouchEvents();
        
        // Auto-play
        this.startAutoPlay();
        
        // Pause auto-play on hover
        const carousel = document.querySelector('.hero-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', () => this.pauseAutoPlay());
            carousel.addEventListener('mouseleave', () => this.startAutoPlay());
            // For touch devices
            carousel.addEventListener('touchstart', () => this.pauseAutoPlay());
            carousel.addEventListener('touchend', () => this.startAutoPlay());
        }
    }
    
    showSlide(index) {
        // Hide all slides
        this.slides.forEach(slide => slide.classList.remove('active'));
        
        // Show current slide
        if (this.slides[index]) {
            this.slides[index].classList.add('active');
        }
        
        // Update dots
        this.dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        this.currentIndex = index;
    }
    
    nextSlide() {
        const newIndex = (this.currentIndex + 1) % this.slides.length;
        this.showSlide(newIndex);
    }
    
    prevSlide() {
        const newIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.showSlide(newIndex);
    }
    
    goToSlide(index) {
        if (index >= 0 && index < this.slides.length) {
            this.showSlide(index);
        }
    }
    
    startAutoPlay() {
        this.pauseAutoPlay();
        this.autoPlayInterval = setInterval(() => this.nextSlide(), this.autoPlayDelay);
    }
    
    pauseAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
    
    addTouchEvents() {
        const carousel = document.querySelector('.hero-carousel');
        if (!carousel) return;
        
        let touchStartX = 0;
        let touchEndX = 0;
        
        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        }, { passive: true });
        
        // Prevent scrolling when swiping the carousel
        carousel.addEventListener('touchmove', (e) => {
            // Only prevent default if swiping horizontally
            if (Math.abs(e.touches[0].clientX - touchStartX) > 10) {
                e.preventDefault();
            }
        }, { passive: false });
    }
    
    handleSwipe() {
        const swipeThreshold = 50; // Minimum distance to trigger slide change
        const swipeDistance = touchEndX - touchStartX;
        
        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                this.prevSlide();
            } else {
                this.nextSlide();
            }
        }
    }
}

// Load testimonials from JSON file
async function loadTestimonials() {
    try {
        const response = await fetch('testimonials.json');
        if (!response.ok) {
            throw new Error('Failed to load testimonials');
        }
        const data = await response.json();
        displayTestimonials(data.testimonials);
    } catch (error) {
        console.error('Error loading testimonials:', error);
        // Fallback to default testimonials if JSON fails to load
        const defaultTestimonials = [
            {
                quote: "NOIR Cinema Catering has been our go-to for every production in Atlanta. Their reliability and quality are unmatched.",
                author: "Production Manager",
                company: "Major Studio",
                rating: 5
            },
            {
                quote: "The crew loves the variety and quality of food. NOIR always delivers, no matter how challenging the location or schedule.",
                author: "Line Producer",
                company: "Independent Film",
                rating: 5
            }
        ];
        displayTestimonials(defaultTestimonials);
    }
}

// Display testimonials in the grid
function displayTestimonials(testimonials) {
    const testimonialGrid = document.getElementById('testimonialGrid');
    const dotsContainer = document.getElementById('testimonialDots');
    
    if (!testimonialGrid) return;
    
    // Clear existing content
    testimonialGrid.innerHTML = '';
    
    // Create testimonial cards
    testimonials.forEach((testimonial, index) => {
        const testimonialElement = document.createElement('div');
        testimonialElement.className = 'testimonial';
        testimonialElement.setAttribute('data-index', index);
        
        // Create rating stars
        const ratingStars = '★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating);
        
        testimonialElement.innerHTML = `
            <p>${testimonial.quote}</p>
            <div class="rating" title="${testimonial.rating} out of 5 stars">${ratingStars}</div>
            <cite>${testimonial.author} <span class="company">${testimonial.company ? ', ' + testimonial.company : ''}</span></cite>
        `;
        
        testimonialGrid.appendChild(testimonialElement);
        
        // Create dot navigation
        if (dotsContainer) {
            const dot = document.createElement('span');
            dot.className = 'dot';
            dot.setAttribute('data-index', index);
            if (index === 0) dot.classList.add('active');
            
            dot.addEventListener('click', () => {
                scrollToTestimonial(index);
            });
            
            dotsContainer.appendChild(dot);
        }
    });
    
    // Initialize carousel if there are multiple testimonials
    if (testimonials.length > 1) {
        setupCarousel();
    }
}

// Setup carousel functionality
function setupCarousel() {
    const grid = document.querySelector('.testimonial-grid');
    const dots = document.querySelectorAll('.dot');
    let isDown = false;
    let startX;
    let scrollLeft;
    let currentIndex = 0;
    
    // Touch and mouse drag events
    grid.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - grid.offsetLeft;
        scrollLeft = grid.scrollLeft;
        grid.style.cursor = 'grabbing';
        grid.style.scrollBehavior = 'auto';
    });
    
    grid.addEventListener('mouseleave', () => {
        isDown = false;
        grid.style.cursor = 'grab';
    });
    
    grid.addEventListener('mouseup', () => {
        isDown = false;
        grid.style.cursor = 'grab';
        updateActiveDot();
    });
    
    grid.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - grid.offsetLeft;
        const walk = (x - startX) * 2; // Scroll faster
        grid.scrollLeft = scrollLeft - walk;
    });
    
    // Touch events for mobile
    grid.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - grid.offsetLeft;
        scrollLeft = grid.scrollLeft;
        grid.style.scrollBehavior = 'auto';
    }, false);
    
    grid.addEventListener('touchend', () => {
        isDown = false;
        updateActiveDot();
    }, false);
    
    grid.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - grid.offsetLeft;
        const walk = (x - startX) * 2;
        grid.scrollLeft = scrollLeft - walk;
    }, false);
    
    // Update active dot based on scroll position
    function updateActiveDot() {
        const scrollPosition = grid.scrollLeft;
        const testimonialWidth = document.querySelector('.testimonial').offsetWidth + 20; // 20px gap
        currentIndex = Math.round(scrollPosition / testimonialWidth);
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
        
        // Smooth scroll to align with testimonial
        grid.style.scrollBehavior = 'smooth';
        grid.scrollLeft = currentIndex * testimonialWidth;
    }
    
    // Auto-advance carousel
    let autoScroll = setInterval(() => {
        if (!isDown) {
            currentIndex = (currentIndex + 1) % dots.length;
            scrollToTestimonial(currentIndex);
        }
    }, 5000);
    
    // Pause auto-scroll on hover
    grid.addEventListener('mouseenter', () => {
        clearInterval(autoScroll);
    });
    
    grid.addEventListener('mouseleave', () => {
        autoScroll = setInterval(() => {
            if (!isDown) {
                currentIndex = (currentIndex + 1) % dots.length;
                scrollToTestimonial(currentIndex);
            }
        }, 5000);
    });
}

// Scroll to specific testimonial
function scrollToTestimonial(index) {
    const grid = document.querySelector('.testimonial-grid');
    const testimonial = document.querySelector(`.testimonial[data-index="${index}"]`);
    const dots = document.querySelectorAll('.dot');
    
    if (!testimonial) return;
    
    // Update active dot
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    
    // Scroll to testimonial
    grid.style.scrollBehavior = 'smooth';
    testimonial.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
    });
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Hero Carousel
    if (document.querySelector('.hero-carousel')) {
        new HeroCarousel();
    }
    
    // Load testimonials when the page loads
    loadTestimonials();
    
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        const spans = hamburger.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission (basic - just for demo)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your inquiry! We will contact you within 24 hours.');
            contactForm.reset();
        });
    }
    
    // Add scroll effect to navbar
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.backgroundColor = 'rgba(17, 17, 17, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.backgroundColor = '#111111';
            navbar.style.backdropFilter = 'none';
        }
        
        lastScroll = currentScroll;
    });
});