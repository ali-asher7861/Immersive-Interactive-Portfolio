// Custom Cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});

document.querySelectorAll('a, button, .project-card').forEach((element) => {
  element.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(2)';
    cursor.style.backgroundColor = '#00ffcc';
  });
  element.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    cursor.style.backgroundColor = '#00ffcc';
  });
});

// Three.js 3D Hero Section
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('3d-container').appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({ color: 0x00ffcc, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// Dynamic Theme Switcher
const body = document.body;
const lightThemeBtn = document.getElementById('light-theme');
const darkThemeBtn = document.getElementById('dark-theme');
const cyberpunkThemeBtn = document.getElementById('cyberpunk-theme');

lightThemeBtn.addEventListener('click', () => {
  body.className = 'light-theme';
});

darkThemeBtn.addEventListener('click', () => {
  body.className = 'dark-theme';
});

cyberpunkThemeBtn.addEventListener('click', () => {
  body.className = 'cyberpunk-theme';
});

// Parallax Scrolling with Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
});

// Text Animations with GSAP
gsap.from('.hero-title', {
  duration: 1.5,
  opacity: 0,
  y: 50,
  ease: 'power3.out',
});

gsap.from('.hero-subtitle', {
  duration: 2,
  opacity: 0,
  y: 50,
  ease: 'power3.out',
  delay: 0.5,
});

// Hover-Activated Glassmorphism Cards
document.querySelectorAll('.project-card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.transform = `perspective(1000px) rotateX(${(y - rect.height / 2) / 10}deg) rotateY(${(x - rect.width / 2) / 10}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  });
});

// Interactive Contact Form
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Message sent!');
});

// Fullscreen Navigation
const nav = document.getElementById('fullscreen-nav');
const navLinks = document.querySelectorAll('.fullscreen-nav ul li a');

document.querySelector('.menu-btn').addEventListener('click', () => {
  nav.style.transform = 'translateY(0)';
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.style.transform = 'translateY(-100%)';
  });
});

// Scroll-Triggered Sound Effects (Optional)
const soundEffect = new Audio('sound-effect.mp3'); // Replace with your sound file
let isPlaying = false;

window.addEventListener('scroll', () => {
  if (!isPlaying) {
    soundEffect.play();
    isPlaying = true;
  }
});

soundEffect.addEventListener('ended', () => {
  isPlaying = false;
});

// Responsive Adjustments for Three.js
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// GSAP Animations for Sections
gsap.utils.toArray('.section-title').forEach((title) => {
  gsap.from(title, {
    scrollTrigger: {
      trigger: title,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none none',
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
  });
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

// Theme Persistence (Optional)
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.className = savedTheme;
}

lightThemeBtn.addEventListener('click', () => {
  localStorage.setItem('theme', 'light-theme');
});

darkThemeBtn.addEventListener('click', () => {
  localStorage.setItem('theme', 'dark-theme');
});

cyberpunkThemeBtn.addEventListener('click', () => {
  localStorage.setItem('theme', 'cyberpunk-theme');
});