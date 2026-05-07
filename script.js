// ── Hamburger menu ───────────────────────────────────────────────────────────
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navMenu.classList.toggle("open");
});

// Close menu when a nav link is clicked
navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        navMenu.classList.remove("open");
    });
});

// ── Scroll reveal animation ──────────────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".hidden").forEach(el => {
    revealObserver.observe(el);
});

// ── Skill bar fill animation ─────────────────────────────────────────────────
const skillObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fills = entry.target.querySelectorAll(".skill-fill");
            fills.forEach(fill => {
                fill.style.width = fill.getAttribute("data-width") + "%";
            });
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const skillsSection = document.getElementById("skills");
if (skillsSection) skillObserver.observe(skillsSection);

// ── Active nav link highlight ────────────────────────────────────────────────
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove("active"));
            const activeLink = document.querySelector(`nav a[href="#${entry.target.id}"]`);
            if (activeLink) activeLink.classList.add("active");
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => navObserver.observe(section));
