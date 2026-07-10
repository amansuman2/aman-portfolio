// ============================
// MOBILE MENU
// ============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close mobile menu when link clicked

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// ============================
// TYPING ANIMATION
// ============================

new Typed("#typing", {

    strings: [
        "Software Engineer",
        "Full Stack Developer",
        "Java Developer",
        "Node.js Developer",
        "Problem Solver"
    ],

    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true

});

// ============================
// PARTICLES BACKGROUND
// ============================

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
            value: "#a855f7"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: 3,
            random: true
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#a855f7",
            opacity: 0.3,
            width: 1
        },

        move: {
            enable: true,
            speed: 2
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
            }

        },

        modes: {

            grab: {
                distance: 150,
                line_linked: {
                    opacity: 1
                }
            },

            push: {
                particles_nb: 4
            }

        }

    },

    retina_detect: true

});

// ============================
// ANIMATED COUNTERS
// ============================

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        const updateCounter = () => {

            const current = +counter.innerText;

            const increment = target / 100;

            if (current < target) {

                counter.innerText =
                    Math.ceil(current + increment);

                setTimeout(updateCounter, 20);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });

};

// ============================
// INTERSECTION OBSERVER
// ============================

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.2
    }

);

// Observe all cards

document.querySelectorAll(
    ".glass-card,.skill-card,.project-card,.timeline-item,.stat-box"
).forEach(el => {

    observer.observe(el);

});

// ============================
// SCROLL REVEAL
// ============================

window.addEventListener("scroll", () => {

    const reveals =
        document.querySelectorAll(
            ".glass-card,.skill-card,.project-card,.timeline-item,.stat-box"
        );

    reveals.forEach(el => {

        const windowHeight =
            window.innerHeight;

        const revealTop =
            el.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

});

// Initial hidden state

document.querySelectorAll(
    ".glass-card,.skill-card,.project-card,.timeline-item,.stat-box"
).forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(60px)";
    el.style.transition = "all 0.8s ease";

});

// ============================
// ACTIVE NAVBAR LINK
// ============================

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active-link");

        }

    });

});

// ============================
// COUNTER TRIGGER
// ============================

const statsSection =
    document.querySelector(".stats");

let counterStarted = false;

window.addEventListener("scroll", () => {

    if (!statsSection) return;

    const position =
        statsSection.getBoundingClientRect().top;

    if (
        position < window.innerHeight &&
        !counterStarted
    ) {

        startCounter();
        counterStarted = true;

    }

});

// ============================
// PROJECT FILTER
// ============================

const filterButtons =
    document.querySelectorAll(
        ".filter-buttons button"
    );

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter =
            button.innerText.toLowerCase();

        projectCards.forEach(card => {

            if (
                filter === "all"
            ) {

                card.style.display = "block";

            }
            else {

                const text =
                    card.innerText.toLowerCase();

                if (
                    text.includes(filter)
                ) {

                    card.style.display = "block";

                }
                else {

                    card.style.display = "none";

                }

            }

        });

    });

});

// ============================
// CONTACT FORM
// ============================

const contactForm =
    document.getElementById("contact-form");

contactForm.addEventListener(
    "submit",
    async (e) => {

        e.preventDefault();

        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const message =
            document.getElementById("message").value;

        try {

            const response =
                await fetch(
                    "https://portfolio-backend-0jp8.onrender.com/contact",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body: JSON.stringify({
                            name,
                            email,
                            message
                        })

                    }
                );

            const data =
                await response.json();

            Swal.fire({
                icon: "success",
                title: "Message Sent",
                text: "Thank you for contacting me."
            });

            contactForm.reset();

        }
        catch (error) {

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!"
            });

        }

    });

// ============================
// PARALLAX EFFECT
// ============================

window.addEventListener("mousemove", (e) => {

    const avatar =
        document.querySelector(".avatar");

    if (!avatar) return;

    const x =
        (window.innerWidth / 2 - e.pageX) / 40;

    const y =
        (window.innerHeight / 2 - e.pageY) / 40;

    avatar.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});

// ============================
// SMOOTH PAGE LOAD
// ============================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

// ============================
// CONSOLE SIGNATURE
// ============================

console.log(
    "%c Aman Suman Portfolio Loaded",
    "color:#a855f7;font-size:18px;font-weight:bold;"
);

//================ FOOTER ================

// Scroll To Top Button

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        scrollBtn.style.display = "flex";

    }

    else{

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// Current Year

document.querySelector(".footer-bottom p").innerHTML =
`© ${new Date().getFullYear()} Aman Suman | All Rights Reserved`;