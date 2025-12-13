// Particles.js Configuration
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#3b82f6"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5,
      random: false
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#3b82f6",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 0.5
        }
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});

// Loading Screen Animation
document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const mainContent = document.getElementById("main-content");
  const typingElement = document.querySelector(".typing-text");

  // Typing animation
  const text = "<Hello World/>";
  let index = 0;
  const interval = setInterval(() => {
    typingElement.textContent = text.substring(0, index) + "|";
    index++;
    if (index > text.length) {
      clearInterval(interval);
      setTimeout(() => {
        loadingScreen.style.opacity = "0";
        mainContent.style.opacity = "1";
        setTimeout(() => {
          loadingScreen.style.display = "none";
        }, 300);
      }, 1000);
    }
  }, 100);
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Intersection Observer for section animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1
  }
);

document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// Active nav link update on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});

// Sparkle Animation
function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";

  const size = Math.random() * 10 + 5;
  const duration = Math.random() * 1000 + 1000;

  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;
  sparkle.style.left = `${Math.random() * 100}%`;
  sparkle.style.top = `${Math.random() * 100}%`;
  sparkle.style.animation = `sparkle ${duration}ms linear`;

  document.getElementById("particles-js").appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, duration);
}

function initSparkles() {
  setInterval(createSparkle, 500);
}

// Initialize Sparkles after loading
setTimeout(() => initSparkles(), 2000);

// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const openIcon = document.querySelector(".open-icon");
  const closeIcon = document.querySelector(".close-icon");

  navToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("show");
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll("#mobile-menu .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("show");
      openIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    });
  });

  // Close mobile menu when resizing to desktop view
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("show");
      openIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    }
  });
});
