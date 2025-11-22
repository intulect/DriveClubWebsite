// Set the date we're counting down to
// YEAR-MONTH-DAY
const countDownDate = new Date("Feb 1, 2026 00:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(function() {

  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the elements
  document.getElementById("days").innerText = days < 10 ? "0" + days : days;
  document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-container").innerHTML = "<h1>WE ARE LIVE!</h1>";
  }
}, 1000);


// Gallery Logic
// REPLACE THESE URLS WITH YOUR ACTUAL SERVER SCREENSHOTS LOCATED IN images/ FOLDER
const images = {
    'preview1': 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=1000&auto=format&fit=crop', // HUD/Action
    'preview2': 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop', // Cars
    'preview3': 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop', // Jobs/Tech
    'preview4': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop'  // Map/City
};

// Initialize first image
const mainDisplay = document.getElementById('main-display');
mainDisplay.style.backgroundImage = `url('${images['preview1']}')`;
mainDisplay.querySelector('span').style.display = 'none';

function changeImage(element, key) {
    // Remove active class from all thumbs
    const thumbs = document.querySelectorAll('.thumb');
    thumbs.forEach(t => t.classList.remove('active'));

    // Add active class to clicked thumb
    element.classList.add('active');

    // Change background image
    // Add fade effect
    mainDisplay.style.opacity = '0';
    
    setTimeout(() => {
        mainDisplay.style.backgroundImage = `url('${images[key]}')`;
        mainDisplay.style.opacity = '1';
    }, 200);
}

// Glitch Text Effect Randomizer (Optional extra polish)
const glitchText = document.querySelector('.glitch');
setInterval(() => {
    const skew = Math.random() * 20 - 10;
    glitchText.style.transform = `skew(${skew}deg)`;
    setTimeout(() => {
        glitchText.style.transform = `skew(0deg)`;
    }, 100);
}, 3000);

