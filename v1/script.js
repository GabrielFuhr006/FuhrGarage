gsap.registerPlugin(ScrollTrigger, SplitText);

/* =========================
   CONFIG PADRÃO
========================= */
const defaultEase = "power1.out";
const titleEase = "expo.out";

/* =========================
   HERO
========================= */
gsap.fromTo(".home-h1",
  { opacity: 0, y: 24 },
  {
    opacity: 1,
    y: 0,
    duration: 1.4,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".home-h1",
      start: "top 92%",
      toggleActions: "play none none reset"
    }
  }
);

gsap.fromTo(".home-title span",
  { opacity: 0, y: 40 },
  {
    opacity: 1,
    y: 0,
    duration: 1.8,
    stagger: 0.28,
    ease: "expo.out",
    scrollTrigger: {
      trigger: ".home-title",
      start: "top 92%",
      toggleActions: "play none none reset"
    }
  }
);

gsap.fromTo(".home-text",
  { opacity: 0, y: 24 },
  {
    opacity: 1,
    y: 0,
    duration: 1.4,
    delay: 0.15,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".home-text",
      start: "top 92%",
      toggleActions: "play none none reset"
    }
  }
);

gsap.fromTo(".button-home",
  { opacity: 0, y: 20 },
  {
    opacity: 1,
    y: 0,
    duration: 1.3,
    delay: 0.25,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".button-home",
      start: "top 94%",
      toggleActions: "play none none reset"
    }
  }
);

/* =========================
   SPLIT TEXT
========================= */
window.addEventListener("load", () => {
  document.querySelectorAll(
    ".service-text2, .text-beforeAndAfter2, .depoiments-title h3, .contact-title"
  ).forEach((el) => {
    const split = new SplitText(el, { type: "chars, words" });

    gsap.fromTo(
      split.chars,
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.018,
        ease: titleEase,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none reset"
        }
      }
    );
  });

  ScrollTrigger.refresh();
});

/* =========================
   SUBTÍTULOS
========================= */
gsap.utils.toArray(".service-text1, .text-beforeAndAfter1, .depoiments-title h2").forEach((el) => {
  gsap.fromTo(el,
    { opacity: 0, y: 16 },
    {
      opacity: 1,
      y: 0,
      duration: 0.95,
      ease: defaultEase,
      scrollTrigger: {
        trigger: el,
        start: "top 92%",
        toggleActions: "play none none reset"
      }
    }
  );
});

/* =========================
   CARDS DE SERVIÇOS
========================= */
gsap.fromTo(
  ".card1, .card2, .card3, .card4, .card5, .card6, .card7, .card8",
  { opacity: 0, y: 24 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.08,
    ease: defaultEase,
    scrollTrigger: {
      trigger: ".cards-services",
      start: "top 88%",
      toggleActions: "play none none reset"
    }
  }
);

/* =========================
   ANTES E DEPOIS
========================= */
gsap.fromTo(".compare-container",
  { opacity: 0, y: 20, scale: 0.985 },
  {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 1,
    ease: defaultEase,
    scrollTrigger: {
      trigger: ".compare-container",
      start: "top 88%",
      toggleActions: "play none none reset"
    }
  }
);

gsap.fromTo("#beforeAndAfter p",
  { opacity: 0, y: 14 },
  {
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: defaultEase,
    scrollTrigger: {
      trigger: "#beforeAndAfter p",
      start: "top 92%",
      toggleActions: "play none none reset"
    }
  }
);

/* =========================
   GALERIA
========================= */
gsap.fromTo(".card-photo",
  { opacity: 0, y: 22, scale: 0.985 },
  {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 1,
    stagger: 0.08,
    ease: defaultEase,
    scrollTrigger: {
      trigger: ".photos",
      start: "top 88%",
      toggleActions: "play none none reset"
    }
  }
);

gsap.fromTo(".buttonGallery",
  { opacity: 0, y: 14 },
  {
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: defaultEase,
    scrollTrigger: {
      trigger: ".buttonGallery",
      start: "top 92%",
      toggleActions: "play none none reset"
    }
  }
);

/* =========================
   DEPOIMENTOS
========================= */
gsap.fromTo(".client-card",
  { opacity: 0, y: 24 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.1,
    ease: defaultEase,
    scrollTrigger: {
      trigger: ".clients-cards",
      start: "top 88%",
      toggleActions: "play none none reset"
    }
  }
);

/* =========================
   CONTATO
========================= */
gsap.fromTo(".card-contact",
  { opacity: 0, y: 22, scale: 0.985 },
  {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 1,
    ease: defaultEase,
    scrollTrigger: {
      trigger: ".card-contact",
      start: "top 88%",
      toggleActions: "play none none reset"
    }
  }
);

/* =========================
   FOOTER
========================= */
gsap.fromTo(".section1, .section2, .section3",
  { opacity: 0, y: 18 },
  {
    opacity: 1,
    y: 0,
    duration: 0.95,
    stagger: 0.1,
    ease: defaultEase,
    scrollTrigger: {
      trigger: ".footer",
      start: "top 92%",
      toggleActions: "play none none reset"
    }
  }
);

gsap.fromTo(".rights",
  { opacity: 0, y: 12 },
  {
    opacity: 1,
    y: 0,
    duration: 0.85,
    ease: defaultEase,
    scrollTrigger: {
      trigger: ".rights",
      start: "top 96%",
      toggleActions: "play none none reset"
    }
  }
);