document.addEventListener('DOMContentLoaded', () => {
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
                navbar.classList.add('bg-bgDark/80', 'backdrop-blur-xl', 'border-white/5', 'shadow-2xl');
                navbar.classList.remove('border-transparent', 'py-6');
                navbar.classList.add('py-3');
            } else {
                navbar.classList.remove('bg-bgDark/80', 'backdrop-blur-xl', 'border-white/5', 'shadow-2xl', 'py-3');
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
        
        // Create Toast
        const toast = document.createElement('div');
        toast.className = 'fixed bottom-10 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-primary/30 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 z-[100] animate-fade-in-up';
        toast.innerHTML = `
            <i class="fas fa-info-circle text-primary"></i>
            <span class="text-sm font-bold tracking-wide uppercase">Server Launching Soon</span>
        `;
        
        document.body.appendChild(toast);
        
        // Remove Toast
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translate(-50%, 20px)';
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    };

    // Particle System for Hero
    const hero = document.getElementById('home');
    if (hero) {
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

        // Init Particles
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
                countdownEl.innerHTML = '<div class="text-2xl font-bold text-primary uppercase tracking-widest">Launch Initiated</div>';
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
                <div class="flex flex-col items-center mx-2 group cursor-default">
                    <div class="bg-white/5 backdrop-blur-sm border border-white/10 p-4 md:p-6 rounded-2xl min-w-[80px] md:min-w-[110px] mb-3 shadow-2xl relative overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                        <div class="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <span class="font-heading text-3xl md:text-5xl text-white leading-none block text-center relative z-10 font-bold">
                            ${unit.value < 10 ? '0' + unit.value : unit.value}
                        </span>
                    </div>
                    <span class="text-gray-500 text-[10px] font-bold tracking-[0.2em] uppercase group-hover:text-primary transition-colors">${unit.label}</span>
                </div>
            `).join('');
        }

        setInterval(updateCountdown, 1000);
        updateCountdown();
    }

    // Gallery Logic
    const galleryContainer = document.getElementById('gallery-container');
    if (galleryContainer) {
        const galleryData = [
            {
                id: 1,
                title: "Criminal Underworld",
                category: "Gameplay",
                img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop",
                desc: "Establish your empire. From street-level hustling to organized crime syndicates, the city is yours to conquer."
            },
            {
                id: 2,
                title: "Law Enforcement",
                category: "Jobs",
                img: "https://images.unsplash.com/photo-1605218427306-6354db696fea?q=80&w=2836&auto=format&fit=crop",
                desc: "Serve and protect. Advanced evidence systems, custom fleets, and a ranking structure that rewards dedication."
            },
            {
                id: 3,
                title: "Custom Housing",
                category: "Lifestyle",
                img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
                desc: "Make your mark. Buy properties, decorate them with our custom furniture system, and invite friends over."
            },
            {
                id: 4,
                title: "Street Racing",
                category: "Activities",
                img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop",
                desc: "High stakes, high speed. Tune your car with our advanced mechanic system and dominate the underground scene."
            }
        ];

        let activeIndex = 0;

        function renderGallery() {
            galleryContainer.innerHTML = galleryData.map((item, index) => {
                const isActive = index === activeIndex;
                return `
                    <div 
                        class="gallery-item relative h-[200px] md:h-auto group overflow-hidden cursor-pointer border-b md:border-b-0 md:border-r border-white/10 last:border-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                        style="flex: ${isActive ? '3.5' : '1'};"
                        onclick="setActiveGallery(${index})"
                        onmouseenter="setActiveGallery(${index})"
                    >
                        <img 
                            src="${item.img}" 
                            alt="${item.title}" 
                            class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 ${isActive ? 'scale-100 grayscale-0' : 'grayscale brightness-[0.4]'}"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 transition-opacity duration-500 ${isActive ? 'opacity-60' : 'opacity-80'}"></div>
                        <div class="absolute bottom-0 left-0 w-full p-6 md:p-12 z-10 flex flex-col justify-end h-full pointer-events-none">
                            <div class="transition-all duration-500 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-70'}">
                                <div class="flex items-center gap-3 mb-2">
                                    <span class="text-primary font-bold tracking-[0.2em] uppercase text-[10px] bg-black/50 backdrop-blur border border-primary/20 px-3 py-1 rounded-full">0${item.id}</span>
                                    <span class="text-gray-400 text-[10px] tracking-[0.2em] uppercase border-l border-white/20 pl-3">${item.category}</span>
                                </div>
                                <h3 class="font-heading text-3xl md:text-5xl text-white uppercase tracking-tighter mb-4 truncate leading-none drop-shadow-lg">${item.title}</h3>
                                <div class="overflow-hidden transition-all duration-700" style="max-height: ${isActive ? '150px' : '0px'}; opacity: ${isActive ? '1' : '0'}">
                                    <p class="text-gray-300 max-w-lg text-sm leading-relaxed mb-6 border-l-2 border-primary/50 pl-4 hidden md:block">${item.desc}</p>
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
        renderGallery();
    }

    // Scroll Reveal
    const reveals = document.querySelectorAll('.reveal');
    function checkReveal() {
        const triggerBottom = window.innerHeight * 0.85;
        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            if (revealTop < triggerBottom) {
                reveal.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', checkReveal);
    checkReveal();

    // Parallax Effect
    if (hero) {
        hero.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;
            const title = hero.querySelector('h1');
            if (title) {
                title.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
            }
        });
    }
});
