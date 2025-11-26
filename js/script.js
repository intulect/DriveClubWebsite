document.addEventListener('DOMContentLoaded', () => {
    console.log('Script Loaded');

    // Mobile Menu Logic
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            // Simple icon toggle animation
            const icon = menuBtn.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when a link is clicked
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                const icon = menuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // Loader
    const loader = document.getElementById('loader');
    if (loader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500);
            }, 1000);
        });
    }

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        let lastScrollY = window.scrollY;
        
        function updateNavbar() {
            if (window.scrollY > 20) {
                navbar.classList.add('bg-bgDark/95', 'backdrop-blur-xl', 'border-white/5', 'shadow-2xl');
                navbar.classList.remove('border-transparent', 'py-6');
                navbar.classList.add('py-3');
            } else {
                navbar.classList.remove('bg-bgDark/95', 'backdrop-blur-xl', 'border-white/5', 'shadow-2xl', 'py-3');
                navbar.classList.add('border-transparent', 'py-6');
            }
            lastScrollY = window.scrollY;
        }

        window.addEventListener('scroll', () => {
            requestAnimationFrame(updateNavbar);
        });
    }

    // Play Button Logic
    window.handlePlayClick = (e) => {
        e.preventDefault();
        
        const toast = document.createElement('div');
        toast.className = 'fixed bottom-10 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-primary/30 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 z-[100] animate-fade-in-up whitespace-nowrap';
        toast.innerHTML = `
            <i class="fas fa-info-circle text-primary"></i>
            <span class="text-sm font-bold tracking-wide uppercase">Server Launching Soon</span>
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translate(-50%, 20px)';
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    };

    // Particle System for Hero
    const hero = document.getElementById('home');
    if (hero && window.innerWidth > 768) { // Only enable particles on desktop for performance
        const canvas = document.createElement('canvas');
        canvas.className = 'absolute inset-0 z-0 pointer-events-none opacity-40';
        hero.insertBefore(canvas, hero.firstChild);
        
        const ctx = canvas.getContext('2d');
        let particles = [];
        
        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        class Particle {
            constructor() {
                this.reset();
            }
            
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5;
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                    this.reset();
                }
            }
            
            draw() {
                ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < 50; i++) {
            particles.push(new Particle());
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        }
        animate();
    }

    // Countdown Logic
    const countdownEl = document.getElementById('countdown');
    const targetDate = new Date("Feb 1, 2026 00:00:00").getTime();

    if (countdownEl) {
        let previousValues = {};
        let isFirstLoad = true;

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                countdownEl.innerHTML = '<div class="text-xl md:text-2xl font-bold text-primary uppercase tracking-widest animate-fade-in-up">Launch Initiated</div>';
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const timeUnits = [
                { value: days, label: 'Days', key: 'days' },
                { value: hours, label: 'Hrs', key: 'hours' },
                { value: minutes, label: 'Min', key: 'minutes' },
                { value: seconds, label: 'Sec', key: 'seconds' }
            ];

            countdownEl.innerHTML = timeUnits.map((unit, index) => {
                const displayValue = unit.value < 10 ? '0' + unit.value : unit.value;
                const changed = previousValues[unit.key] !== undefined && previousValues[unit.key] !== unit.value;
                const delay = isFirstLoad ? index * 0.1 : 0;
                
                previousValues[unit.key] = unit.value;
                
                return `
                    <div class="countdown-item flex flex-col items-center mx-1 md:mx-2 group cursor-default" style="animation-delay: ${delay}s">
                        <div class="countdown-box relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 p-3 md:p-6 rounded-xl md:rounded-2xl min-w-[60px] md:min-w-[110px] mb-2 md:mb-3 relative overflow-hidden transition-all duration-300 hover:border-primary/30 hover:scale-105">
                            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div class="countdown-number-wrapper relative z-10">
                                <span class="countdown-number font-heading text-2xl md:text-5xl text-white leading-none block text-center font-bold ${changed && !isFirstLoad ? 'countdown-flip' : ''}">
                                    ${displayValue}
                                </span>
                            </div>
                            <div class="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                        <span class="text-gray-400 text-[8px] md:text-[10px] font-bold tracking-[0.2em] uppercase transition-colors group-hover:text-primary/70">${unit.label}</span>
                    </div>
                `;
            }).join('');

            isFirstLoad = false;
        }

        // Initial render with animation
        updateCountdown();
        
        // Update every second
        setInterval(updateCountdown, 1000);
    }

    // New Gallery Logic (Class Toggling)
    const galleryCards = document.querySelectorAll('.gallery-card');
    if (galleryCards.length > 0) {
        galleryCards.forEach(card => {
            card.addEventListener('click', () => {
                // Remove active class from all
                galleryCards.forEach(c => c.classList.remove('active'));
                // Add active class to clicked
                card.classList.add('active');
            });
        });
    }

    // Scroll Reveal
    const reveals = document.querySelectorAll('.reveal');
    function checkReveal() {
        const triggerBottom = window.innerHeight * 0.9;
        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            if (revealTop < triggerBottom) {
                reveal.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', checkReveal);
    checkReveal();
});
