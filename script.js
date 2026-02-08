// MUSIC
const music = document.getElementById("bgMusic");
music.volume = 0;

function fadeInMusic() {
  if (music.paused) {
    music.play();
    let vol = 0;
    let fade = setInterval(() => {
      if (vol < 0.6) {
        vol += 0.02;
        music.volume = vol;
      } else {
        clearInterval(fade);
      }
    }, 100);
  }
}

function toggleMusic() {
  if (music.paused) {
    fadeInMusic();
  } else {
    music.pause();
  }
}

// SHOW CONTENT
function showText() {
  fadeInMusic();
  document.getElementById("textBox").style.display = "block";
  document.getElementById("photoBox").style.display = "none";
}

function showPhoto() {
  fadeInMusic();
  document.getElementById("photoBox").style.display = "block";
  document.getElementById("textBox").style.display = "none";
}

// PHOTO SWIPE
let photos = [
  "photos/foto1.jpg",
  "photos/foto2.jpg",
  "photos/foto3.jpg",
    "photos/foto4.jpg",
    "photos/foto5.jpg",
    "photos/foto6.jpg",
];
let index = 0;

function nextPhoto() {
  index = (index + 1) % photos.length;
  document.getElementById("photo").src = photos[index];
}

function prevPhoto() {
  index = (index - 1 + photos.length) % photos.length;
  document.getElementById("photo").src = photos[index];
}

// HEART RAIN (LIGHT FOR MOBILE)
const heartContainer = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";
  heartContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 400);
