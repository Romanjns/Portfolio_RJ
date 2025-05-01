// Mobile menu functionality
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

mobileMenuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
    if (!mobileMenu.contains(event.target) && !mobileMenuToggle.contains(event.target) && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
    }
});

// Initialize everything once DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Preloader functionality
    const preloader = document.querySelector('.preloader');

    window.addEventListener('load', function() {
        preloader.classList.add('hidden');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });

    // Scroll Reveal
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.reveal');
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        }
    }
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // Scroll Progress Bar
    window.addEventListener('scroll', function() {
        const scrollProgress = document.querySelector('.scroll-progress');
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        scrollProgress.style.width = scrollPercentage + '%';
    });

    // Tilt Effect
    const tiltElements = document.querySelectorAll('.tilt-effect');
    tiltElements.forEach(el => {
        el.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const xPercent = x / rect.width;
            const yPercent = y / rect.height;

            const maxTilt = 15;
            const tiltX = maxTilt * (0.5 - yPercent);
            const tiltY = maxTilt * (xPercent - 0.5);

            this.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        });

        el.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });

    // Testimonials Slider
    const dots = document.querySelectorAll('.testimonial-dots .dot');
    const testimonials = document.querySelectorAll('.testimonial-item');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            dots.forEach(d => d.classList.remove('active'));
            testimonials.forEach(t => t.classList.remove('active'));
            dot.classList.add('active');
            testimonials[index].classList.add('active');
        });
    });

    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Typing Animation
    function typeWriter(element, text, i = 0, speed = 100) {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(() => typeWriter(element, text, i, speed), speed);
        } else {
            setTimeout(() => {
                element.textContent = '';
                typeWriter(element, text);
            }, 3000);
        }
    }

    const typingElements = document.querySelectorAll('.typing-text');
    typingElements.forEach(el => {
        const text = el.textContent;
        el.textContent = '';
        typeWriter(el, text);
    });

    // Floating Shapes
    const floatingShapes = document.querySelector('.floating-shapes');
    const shapeCount = 10;
    const shapes = ['circle', 'square', 'triangle'];

    for (let i = 0; i < shapeCount; i++) {
        const shape = document.createElement('div');
        const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
        shape.classList.add('floating-shape', randomShape);

        const size = Math.random() * 30 + 10;
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;

        shape.style.left = `${Math.random() * 100}%`;
        shape.style.top = `${Math.random() * 100}%`;

        const duration = Math.random() * 20 + 10;
        shape.style.animationDuration = `${duration}s`;
        shape.style.animationDelay = `${Math.random() * 5}s`;

        floatingShapes.appendChild(shape);
    }

    // Initialize particles.js
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#6c63ff'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#6c63ff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
});



// clickable project cards
document.querySelectorAll(".clickable-card").forEach(card=>{
    card.addEventListener("click",()=>{
        let dst=card.getAttribute("data-dst")
        window.location.href = dst;
    })
})


// Time zone calculator contact form
function convertUtcToUserTimezone(utcTime) {
    const utcDate = new Date(`1970-01-01T${utcTime}:00.000Z`);
    const userDate = new Date(utcDate.toLocaleString("en-US", { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }));
    return userDate.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit' });
  }
  document.querySelector("#Time").innerText=`${convertUtcToUserTimezone("08:00")} - ${convertUtcToUserTimezone("17:00")}`
