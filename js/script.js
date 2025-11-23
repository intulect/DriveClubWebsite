document.addEventListener('DOMContentLoaded', () => {
    // Loader
    const loader = document.getElementById('loader');
    
    // Simulate loading progress or wait for resources
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 1000);
    });

    // Navbar Scroll Effect with Throttle
    const navbar = document.getElementById('navbar');
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

    // Countdown Logic
    const targetDate = new Date("Feb 1, 2026 00:00:00").getTime();
    const countdownEl = document.getElementById('countdown');

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

    // Gallery Accordion Logic
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

    const galleryContainer = document.getElementById('gallery-container');
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
                    <!-- Image -->
                    <img 
                        src="${item.img}" 
                        alt="${item.title}" 
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 ${isActive ? 'scale-100 grayscale-0' : 'grayscale brightness-[0.4]'}"
                    />
                    
                    <!-- Overlay Gradient -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 transition-opacity duration-500 ${isActive ? 'opacity-60' : 'opacity-80'}"></div>

                    <!-- Active Content -->
                    <div class="absolute bottom-0 left-0 w-full p-6 md:p-12 z-10 flex flex-col justify-end h-full pointer-events-none">
                        
                        <div class="transition-all duration-500 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-70'}">
                            <div class="flex items-center gap-3 mb-2">
                                <span class="text-primary font-bold tracking-[0.2em] uppercase text-[10px] bg-black/50 backdrop-blur border border-primary/20 px-3 py-1 rounded-full">
                                    0${item.id}
                                </span>
                                <span class="text-gray-400 text-[10px] tracking-[0.2em] uppercase border-l border-white/20 pl-3">
                                    ${item.category}
                                </span>
                            </div>
                            
                            <h3 class="font-heading text-3xl md:text-5xl text-white uppercase tracking-tighter mb-4 truncate leading-none drop-shadow-lg">
                                ${item.title}
                            </h3>

                            <div class="overflow-hidden transition-all duration-700" style="max-height: ${isActive ? '150px' : '0px'}; opacity: ${isActive ? '1' : '0'}">
                                <p class="text-gray-300 max-w-lg text-sm leading-relaxed mb-6 border-l-2 border-primary/50 pl-4 hidden md:block">
                                    ${item.desc}
                                </p>
                            </div>
                        </div>
                        
                        <!-- Inactive Label (Vertical on Desktop if needed, but here we keep it simple) -->
                    </div>
                </div>
            `;
        }).join('');
    }

    // Expose to window
    window.setActiveGallery = (index) => {
        if (activeIndex !== index) {
            activeIndex = index;
            renderGallery();
        }
    };

    renderGallery();

    // Scroll Reveal Animation
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

    // Parallax Effect for Hero (Subtle)
    const hero = document.getElementById('home');
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
