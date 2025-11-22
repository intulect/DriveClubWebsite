// Countdown Logic
const countDownDate = new Date("Feb 1, 2026 00:00:00").getTime();

const timer = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days < 10 ? "0" + days : days;
  document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "<h1>SERVER IS LIVE</h1>";
  }
}, 1000);

// Clock HUD
function updateClock() {
    const now = new Date();
    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    document.getElementById('hud-clock').innerText = `${h}:${m}`;
}
setInterval(updateClock, 1000);
updateClock();


// Gallery Logic - Matches the 10 Thumbnails in HTML
const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1200&auto=format&fit=crop', caption: 'CLEAN & MINIMAL HUD' },      // HUD
    { url: 'https://images.unsplash.com/photo-1605218457336-92748b9d00d8?q=80&w=1200&auto=format&fit=crop', caption: 'REAL GANG TERRITORIES' },  // GANGS
    { url: 'https://images.unsplash.com/photo-1564050806478-7b1700597b51?q=80&w=1200&auto=format&fit=crop', caption: 'HIGH STAKES HEISTS' },     // HEISTS
    { url: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop', caption: 'IMPORT VEHICLES' },        // CARS
    { url: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop', caption: 'EXCLUSIVE DESIGNER DRIP' },// DRIP
    { url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop', caption: 'ACTIVE POLICE FORCE' },      // COPS
    { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop', caption: 'LOS SANTOS TAKEOVER' },    // CITY
    { url: 'https://images.unsplash.com/photo-1603909223429-69bb7101f420?q=80&w=1200&auto=format&fit=crop', caption: 'DRUG MANUFACTURING' },     // WEED
    { url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop', caption: 'ADVANCED TECH & SCRIPTS' }, // TECH
    { url: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1200&auto=format&fit=crop', caption: 'NIGHTLIFE & CLUBS' }       // CLUB
];

let currentIndex = 0;
const displayImg = document.getElementById('current-display');
const displayCap = document.getElementById('caption-display');
const thumbs = document.querySelectorAll('.thumb-item');

function selectImage(index) {
    currentIndex = index;
    
    // Update Active Thumb
    thumbs.forEach(t => t.classList.remove('active'));
    thumbs[index].classList.add('active');

    // Animate Change
    displayImg.style.opacity = '0';
    setTimeout(() => {
        displayImg.src = galleryImages[index].url; 
        displayCap.innerText = galleryImages[index].caption;
        displayImg.style.opacity = '1';
    }, 200);
}

// Initialize
selectImage(0);

// Auto Rotate every 5 seconds
setInterval(() => {
    let next = (currentIndex + 1) % galleryImages.length;
    selectImage(next);
}, 5000);
