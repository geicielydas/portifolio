/* =========================
   MENU MOBILE
========================= */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon =
        menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* Fecha menu ao clicar em um link */

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            const icon =
                menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });


/* =========================
   MODO ESCURO
========================= */

const themeToggle =
    document.getElementById("themeToggle");

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeToggle.innerHTML =
        '<i class="fas fa-sun"></i>';

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const dark =
        document.body.classList.contains("dark");

    localStorage.setItem(
        "theme",
        dark ? "dark" : "light"
    );

    themeToggle.innerHTML = dark
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';

});


/* =========================
   EFEITO DIGITAÇÃO
========================= */

const typingElement =
    document.getElementById("typing");

const phrases = [
    "Jovem Aprendiz",
    "Buscando oportunidades",
    "Sempre pronta para aprender"
];

let phraseIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentPhrase =
        phrases[phraseIndex];

    if (!deleting) {

        typingElement.textContent =
            currentPhrase.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (
            characterIndex ===
            currentPhrase.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1600
            );

            return;
        }

    } else {

        typingElement.textContent =
            currentPhrase.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            phraseIndex =
                (phraseIndex + 1)
                % phrases.length;

        }

    }

    const speed =
        deleting ? 45 : 90;

    setTimeout(
        typeEffect,
        speed
    );
}

typeEffect();


/* =========================
   ANIMAÇÃO AO ROLAR
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("active");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================
   BOTÃO VOLTAR AO TOPO
========================= */

const backTop =
    document.getElementById("backTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   ANO AUTOMÁTICO
========================= */

document.getElementById("year")
    .textContent =
    new Date().getFullYear();


/* =========================
   EFEITO 3D NOS CARDS
========================= */

const cards =
    document.querySelectorAll(
        ".skill-card, .info-item, .course-card"
    );


cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const rotateX =
                ((y / rect.height) - 0.5) * -5;

            const rotateY =
                ((x / rect.width) - 0.5) * 5;

            card.style.transform =
                `
                perspective(700px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-5px)
                `;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform = "";

        }
    );

});