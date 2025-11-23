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
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                countdownEl.innerHTML = '<div class="text-xl md:text-2xl font-bold text-primary uppercase tracking-widest">Launch Initiated</div>';
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const timeUnits = [
                { value: days, label: 'Days' },
                { value: hours, label: 'Hrs' },
                { value: minutes, label: 'Min' },
                { value: seconds, label: 'Sec' }
            ];

            countdownEl.innerHTML = timeUnits.map(unit => `
                <div class="flex flex-col items-center mx-1 md:mx-2 group cursor-default">
                    <div class="bg-white/5 backdrop-blur-sm border border-white/10 p-3 md:p-6 rounded-xl md:rounded-2xl min-w-[60px] md:min-w-[110px] mb-2 md:mb-3 shadow-xl relative overflow-hidden transition-all duration-300">
                        <span class="font-heading text-2xl md:text-5xl text-white leading-none block text-center font-bold">
                            ${unit.value < 10 ? '0' + unit.value : unit.value}
                        </span>
                    </div>
                    <span class="text-gray-500 text-[8px] md:text-[10px] font-bold tracking-[0.2em] uppercase">${unit.label}</span>
                </div>
            `).join('');
        }

        setInterval(updateCountdown, 1000);
        updateCountdown();
    }

    // Gallery Logic
    const galleryContainer = document.getElementById('gallery-container');
    if (galleryContainer) {
        console.log('Gallery Container Found');
        const galleryData = [
            {
                id: 1,
                title: "Enhanced MLOs",
                category: "Environment",
                img: "images/preview1.png",
                desc: "Experience a completely reimagined city with highly detailed, custom interiors. From exclusive hideouts to public spaces, every door opens to a new world."
            },
            {
                id: 2,
                title: "Custom UI",
                category: "Interface",
                img: "images/preview2.png",
                desc: "Interact with the city like never before. Our team has completely overhauled every menu and interface for a seamless, modern, and intuitive experience."
            },
            {
                id: 3,
                title: "Self-Serve",
                category: "Business",
                img: "images/preview3.png",
                desc: "Your time matters. We've implemented advanced self-serve systems for businesses, so you never have to wait for an employee to get what you need."
            },
            {
                id: 4,
                title: "Ghost Fleet",
                category: "Enforcement",
                img: "images/preview4.png",
                desc: "Law enforcement that blends in. Our police fleet features unmarked, street-legal vehicles that match the traffic, keeping the streets safe from the shadows."
            },
            {
                id: 5,
                title: "Import Garage",
                category: "Vehicles",
                img: "images/preview5.png",
                desc: "Drive your dream. Choose from a massive collection of custom import vehicles, tuned for performance and styled to turn heads on every corner."
            }
        ];

        let activeIndex = 0;

        function renderGallery() {
            galleryContainer.innerHTML = galleryData.map((item, index) => {
                const isActive = index === activeIndex;
                // Mobile: Stacked height. Desktop: Flex grow.
                const mobileHeight = isActive ? 'h-[250px]' : 'h-[80px]';
                
                // Force height on desktop to prevent collapse if content is absolute
                // We use h-full so it fills the parent container which has min-h-[800px]
                const desktopHeight = 'md:h-auto'; 

                return `
                    <div 
                        class="gallery-item relative ${mobileHeight} ${desktopHeight} group overflow-hidden cursor-pointer border-b md:border-b-0 md:border-r border-white/10 last:border-0 transition-all duration-500 ease-out"
                        style="flex: ${isActive && window.innerWidth >= 768 ? '3.5' : '1'};"
                        onclick="setActiveGallery(${index})"
                    >
                        <img 
                            src="${item.img}" 
                            alt="${item.title}" 
                            class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ${isActive ? 'scale-100 grayscale-0' : 'grayscale brightness-[0.4]'}"
                            onerror="this.src='https://placehold.co/600x400/000000/FFFFFF/png?text=Image+Not+Found'"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 transition-opacity duration-500 ${isActive ? 'opacity-60' : 'opacity-80'}"></div>
                        
                        <div class="absolute bottom-0 left-0 w-full p-6 md:p-12 z-10 flex flex-col justify-end h-full pointer-events-none">
                            <div class="transition-all duration-500 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-80'}">
                                <div class="flex items-center gap-3 mb-1 md:mb-2">
                                    <span class="text-primary font-bold tracking-[0.2em] uppercase text-[8px] md:text-[10px] bg-black/50 backdrop-blur border border-primary/20 px-2 py-1 rounded-full">0${item.id}</span>
                                    <span class="text-gray-400 text-[8px] md:text-[10px] tracking-[0.2em] uppercase border-l border-white/20 pl-3">${item.category}</span>
                                </div>
                                <h3 class="font-heading text-2xl md:text-5xl text-white uppercase tracking-tighter mb-2 md:mb-4 truncate leading-none drop-shadow-lg">${item.title}</h3>
                                
                                <div class="overflow-hidden transition-all duration-700" style="max-height: ${isActive ? '100px' : '0px'}; opacity: ${isActive ? '1' : '0'}">
                                    <p class="text-gray-300 max-w-lg text-xs md:text-sm leading-relaxed mb-0 border-l-2 border-primary/50 pl-4 hidden md:block">${item.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        window.setActiveGallery = (index) => {
            if (activeIndex !== index) {
                activeIndex = index;
                renderGallery();
            }
        };
        
        // Re-render on resize to fix layout shifts
        window.addEventListener('resize', renderGallery);
        renderGallery();
    } else {
        console.error('Gallery Container NOT Found');
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
