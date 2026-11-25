// ===============================
// Loader
// ===============================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1000);
});

// ===============================
// Typing Effect
// ===============================

const words = [
    "Computer Science Student",
    "Web Developer",
    "Laravel Developer",
    "React Native Developer",
    "Future IT Support Engineer"
];

const typing = document.getElementById("typing");

let word = 0;
let letter = 0;
let deleting = false;

function type() {
    const current = words[word];

    typing.textContent = current.substring(0, letter);

    if (!deleting) {
        letter++;

        if (letter > current.length) {
            deleting = true;
            return setTimeout(type, 1500);
        }
    } else {
        letter--;

        if (letter < 0) {
            deleting = false;
            word = (word + 1) % words.length;
            letter = 0;
        }
    }

    setTimeout(type, deleting ? 50 : 100);
}

type();

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        document
            .querySelector(link.getAttribute("href"))
            ?.scrollIntoView({
                behavior: "smooth"
            });
    });
});

// ===============================
// Navbar
// ===============================

const nav = document.querySelector("nav");
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    // Background
    nav.classList.toggle("scrolled", window.scrollY > 50);

    // Active Link
    let current = "";

    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 120) {
            current = section.id;
        }
    });

    links.forEach(link => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + current
        );
    });

    // Progress Bar
    const height =
        document.documentElement.scrollHeight - window.innerHeight;

    document.getElementById("progress-bar").style.width =
        `${window.scrollY / height * 100}%`;
});

// ===============================
// Floating Profile
// ===============================

const profile = document.querySelector(".profile");

if (profile) {

    let angle = 0;

    function animate() {
        angle += 0.02;

        profile.style.transform =
            `translateY(${Math.sin(angle) * 8}px)`;

        requestAnimationFrame(animate);
    }

    animate();
}

// ===============================
// Scroll Reveal
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

document
    .querySelectorAll(".glass, .card, .project")
    .forEach(item => {
        item.classList.add("hidden");
        observer.observe(item);
    });

// ===============================
// Progress Bar
// ===============================

const progress = document.createElement("div");

progress.id = "progress-bar";

document.body.appendChild(progress);

// ===============================
// Footer
// ===============================

document.getElementById("year").textContent =
    new Date().getFullYear();