document.addEventListener('DOMContentLoaded', () => {
    // Loader
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.pointerEvents = 'none';
    }, 1500);

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-bgDark/90', 'backdrop-blur-md', 'border-white/10', 'shadow-lg');
            navbar.classList.remove('border-transparent', 'py-4');
            navbar.classList.add('py-2');
        } else {
            navbar.classList.remove('bg-bgDark/90', 'backdrop-blur-md', 'border-white/10', 'shadow-lg', 'py-2');
            navbar.classList.add('border-transparent', 'py-4');
        }
    });

    // Countdown Logic
    const targetDate = new Date("Feb 1, 2026 00:00:00").getTime();
    const countdownEl = document.getElementById('countdown');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const timeUnits = [
            { value: days, label: 'Days' },
            { value: hours, label: 'Hours' },
            { value: minutes, label: 'Mins' },
            { value: seconds, label: 'Secs' }
        ];

        countdownEl.innerHTML = timeUnits.map(unit => `
            <div class="flex flex-col items-center mx-2 md:mx-4">
                <div class="bg-white/5 backdrop-blur border border-white/10 p-4 rounded-lg min-w-[80px] md:min-w-[100px] mb-2 shadow-lg relative overflow-hidden group">
                    <div class="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span class="font-heading text-3xl md:text-5xl text-white leading-none block text-center">
                        ${unit.value < 10 ? '0' + unit.value : unit.value}
                    </span>
                </div>
                <span class="text-primary text-xs font-bold tracking-widest uppercase">${unit.label}</span>
            </div>
        `).join('');
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Gallery Accordion Logic
    const galleryData = [
        {
            id: 1,
            title: "Coming Soon",
            category: "To Be Announced",
            img: "https://placehold.co/800x600/121212/1e1e1e.png?text=+",
            desc: "Details regarding this feature will be announced shortly."
        },
        {
            id: 2,
            title: "Coming Soon",
            category: "To Be Announced",
            img: "https://placehold.co/800x600/121212/1e1e1e.png?text=+",
            desc: "Details regarding this feature will be announced shortly."
        },
        {
            id: 3,
            title: "Coming Soon",
            category: "To Be Announced",
            img: "https://placehold.co/800x600/121212/1e1e1e.png?text=+",
            desc: "Details regarding this feature will be announced shortly."
        },
        {
            id: 4,
            title: "Coming Soon",
            category: "To Be Announced",
            img: "https://placehold.co/800x600/121212/1e1e1e.png?text=+",
            desc: "Details regarding this feature will be announced shortly."
        }
    ];

    const galleryContainer = document.getElementById('gallery-container');
    let activeIndex = 0;

    function renderGallery() {
        galleryContainer.innerHTML = galleryData.map((item, index) => {
            const isActive = index === activeIndex;
            return `
                <div 
                    class="gallery-item relative h-[300px] md:h-auto group overflow-hidden cursor-pointer border-b md:border-b-0 md:border-r border-white/10 last:border-0 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                    style="flex: ${isActive ? '3' : '1'}; filter: ${isActive ? 'grayscale(0%)' : 'grayscale(100%) brightness(50%)'}"
                    onclick="setActiveGallery(${index})"
                    onmouseenter="setActiveGallery(${index})"
                >
                    <!-- Image -->
                    <img 
                        src="${item.img}" 
                        alt="${item.title} - ${item.category}" 
                        class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    
                    <!-- Overlay -->
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-bgDark/50 to-bgDark/90"></div>

                    <!-- Content -->
                    <div class="absolute bottom-0 left-0 w-full p-6 md:p-10 z-10">
                        <div class="flex flex-col items-start transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-70'}">
                            <span class="text-primary font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-2 md:mb-4 inline-block bg-black/50 backdrop-blur px-2 py-1 rounded">
                                0${item.id} // ${item.category}
                            </span>
                            
                            <h3 class="font-heading text-2xl md:text-5xl text-white uppercase tracking-tighter mb-2 md:mb-4 truncate max-w-full">
                                ${item.title}
                            </h3>

                            <div class="overflow-hidden transition-all duration-500" style="max-height: ${isActive ? '200px' : '0px'}; opacity: ${isActive ? '1' : '0'}">
                                <p class="text-gray-300 max-w-md text-xs md:text-sm leading-relaxed mb-4 md:mb-6 hidden md:block">
                                    ${item.desc}
                                </p>
                                <button class="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[10px] md:text-xs hover:text-primary transition-colors">
                                    View Details <i class="fas fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Expose to window for inline onclick handlers
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
        const triggerBottom = window.innerHeight * 0.8;

        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;

            if (revealTop < triggerBottom) {
                reveal.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Check on load
});
