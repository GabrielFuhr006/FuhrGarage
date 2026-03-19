gsap.registerPlugin(ScrollTrigger, SplitText);

/* =========================
   HEADER SCROLL EFFECT
========================= */
gsap.to(".header", {
    scrollTrigger: {
        trigger: "body",
        start: "top -50",
        onEnter: () => document.querySelector(".header").classList.add("is-scrolled"),
        onLeaveBack: () => document.querySelector(".header").classList.remove("is-scrolled")
    }
});

/* =========================
   CONFIG PADRÃO
========================= */
const defaultEase = "power1.out";
const titleEase = "expo.out";

/* =========================
   HERO
========================= */
/* =========================
   HERO
========================= */
gsap.fromTo(".home-h1",
  { opacity: 0, y: 24 },
  {
    opacity: 1,
    y: 0,
    duration: 2.2,
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
    duration: 2.6,
    stagger: 0.45,
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
    duration: 2.2,
    delay: 0.6,
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
    duration: 2.0,
    delay: 0.9,
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

/* =========================
   MODAL DA GALERIA
========================= */
const modal = document.getElementById("gallery-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close-modal");

if (modal && modalImg && closeBtn) {
  document.querySelectorAll(".card-photo img").forEach(img => {
    // Altera o cursor no CSS para mostrar que é clicável
    img.style.cursor = "pointer";
    
    img.addEventListener("click", function() {
      modal.style.display = "flex";
      modalImg.src = this.src;
      document.body.style.overflow = "hidden"; // Previne o scroll da página atrás do modal
    });
  });

  // Fechar no X
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  // Fechar ao clicar fora da imagem
  modal.addEventListener("click", (e) => {
    if (e.target !== modalImg) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
}

/* =========================
   BOOKING CALENDAR LOGIC
========================= */
const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const serviceDatabase = {
    "Lavagem de Manutenção": { "QUADRICICLO / MOTO": 60, "HATCH / SEDANS": 120, "SUVS": 130, "CAMINHONETE": 150 },
    "Lavagem Premium": { "QUADRICICLO / MOTO": 90, "HATCH / SEDANS": 150, "SUVS": 160, "CAMINHONETE": 180 },
    "Lavagem Detalhada": { "QUADRICICLO / MOTO": 110, "HATCH / SEDANS": 180, "SUVS": 210, "CAMINHONETE": 240 },
    "Cera de Proteção - Zacs": { "QUADRICICLO / MOTO": 30, "HATCH / SEDANS": 60, "SUVS": 80, "CAMINHONETE": 100 },
    "Cera de Manutenção - Blend": { "QUADRICICLO / MOTO": 30, "HATCH / SEDANS": 60, "SUVS": 80, "CAMINHONETE": 100 },
    "Cera de Resistência - Blend": { "QUADRICICLO / MOTO": 50, "HATCH / SEDANS": 80, "SUVS": 100, "CAMINHONETE": 120 },
    "Revitalizador de Plásticos Externo": { "QUADRICICLO / MOTO": 20, "HATCH / SEDANS": 45, "SUVS": 45, "CAMINHONETE": 45 },
    "Revitalizador de Plásticos Interno": { "QUADRICICLO / MOTO": 30, "HATCH / SEDANS": 30, "SUVS": 30, "CAMINHONETE": 30 },
    "Removedor de Chuva Ácida": { "QUADRICICLO / MOTO": 45, "HATCH / SEDANS": 45, "SUVS": 45, "CAMINHONETE": 45 },
    "Descontaminação de Pintura": { "QUADRICICLO / MOTO": 30, "HATCH / SEDANS": 90, "SUVS": 120, "CAMINHONETE": 150 },
    "Limpeza e Hidratação de Couro": { "QUADRICICLO / MOTO": 45, "HATCH / SEDANS": 45, "SUVS": 45, "CAMINHONETE": 45 }
};

const priceDatabase = {
    "Lavagem de Manutenção": { "QUADRICICLO / MOTO": 50, "HATCH / SEDANS": 85, "SUVS": 110, "CAMINHONETE": 135 },
    "Lavagem Premium": { "QUADRICICLO / MOTO": 70, "HATCH / SEDANS": 110, "SUVS": 140, "CAMINHONETE": 170 },
    "Lavagem Detalhada": { "QUADRICICLO / MOTO": 90, "HATCH / SEDANS": 150, "SUVS": 190, "CAMINHONETE": 240 },
    "Cera de Proteção - Zacs": { "QUADRICICLO / MOTO": 20, "HATCH / SEDANS": 45, "SUVS": 60, "CAMINHONETE": 70 },
    "Cera de Manutenção - Blend": { "QUADRICICLO / MOTO": 35, "HATCH / SEDANS": 60, "SUVS": 80, "CAMINHONETE": 100 },
    "Cera de Resistência - Blend": { "QUADRICICLO / MOTO": 50, "HATCH / SEDANS": 80, "SUVS": 100, "CAMINHONETE": 120 },
    "Revitalizador de Plásticos Externo": { "QUADRICICLO / MOTO": 20, "HATCH / SEDANS": 45, "SUVS": 45, "CAMINHONETE": 45 },
    "Revitalizador de Plásticos Interno": { "QUADRICICLO / MOTO": 30, "HATCH / SEDANS": 30, "SUVS": 30, "CAMINHONETE": 30 },
    "Removedor de Chuva Ácida": { "QUADRICICLO / MOTO": 45, "HATCH / SEDANS": 45, "SUVS": 45, "CAMINHONETE": 45 },
    "Descontaminação de Pintura": { "QUADRICICLO / MOTO": 30, "HATCH / SEDANS": 90, "SUVS": 120, "CAMINHONETE": 150 },
    "Limpeza e Hidratação de Couro": { "QUADRICICLO / MOTO": 45, "HATCH / SEDANS": 45, "SUVS": 45, "CAMINHONETE": 45 }
};

const GOOGLE_APP_SCRIPT_URL = window.CONFIG ? window.CONFIG.GOOGLE_APP_SCRIPT_URL : "";

let currentCalDate = new Date();
let selectedDate = null;
let selectedTime = null;
let currentBusySlots = []; // Armazena {start: timestamp, end: timestamp} retornados pelo Google

const calendarDaysMap = document.getElementById("calendar-days");
const monthYearDisplay = document.getElementById("month-year");
const prevMonthBtn = document.getElementById("prev-month");
const nextMonthBtn = document.getElementById("next-month");
const timeSlotsContainer = document.getElementById("time-slots");
const selectedDateDisplay = document.getElementById("selected-date-display");
const confirmBtn = document.getElementById("confirm-booking-btn");
const bookingName = document.getElementById("booking-name");
const bookingPhone = document.getElementById("booking-phone");
const bookingVehicle = document.getElementById("booking-vehicle");
const bookingService = document.getElementById("booking-service");
const serviceDurationInfo = document.getElementById("service-duration-info");

function updateDurationInfo() {
    if (!serviceDurationInfo || !bookingService || !bookingVehicle) return;
    const serviceVal = bookingService.value;
    const vehicleVal = bookingVehicle.value;
    
    if (serviceVal && vehicleVal && serviceDatabase[serviceVal] && serviceDatabase[serviceVal][vehicleVal]) {
        const mins = serviceDatabase[serviceVal][vehicleVal];
        const h = Math.floor(mins / 60);
        const m = mins % 60;
        let txt = "⏱️ Tempo estimado: ";
        if (h > 0) txt += `${h}h`;
        if (m > 0) txt += `${String(m).padStart(2, '0')}m`;
        
        let subtext = "";
        if (typeof priceDatabase !== 'undefined' && priceDatabase[serviceVal] && priceDatabase[serviceVal][vehicleVal]) {
            const price = priceDatabase[serviceVal][vehicleVal];
            const pixAmount = (price * 0.30).toFixed(2).replace('.', ',');
            txt += ` | 💰 R$ ${price.toFixed(2).replace('.', ',')}`;
            subtext = `<br><span style="color:#ffc107; font-size:0.75rem;">Para garantir a vaga do calendário, é necessário efetuar um PIX de sinal de 30% (R$ ${pixAmount}). O cancelamento com reembolso integral só é válido com 24h de antecedência.</span>`;
        }
        
        serviceDurationInfo.innerHTML = txt + subtext;
        serviceDurationInfo.classList.add("visible");
    } else {
        serviceDurationInfo.classList.remove("visible");
    }
}

function renderCalendar() {
    if (!calendarDaysMap) return;
    calendarDaysMap.innerHTML = "";
    
    const year = currentCalDate.getFullYear();
    const month = currentCalDate.getMonth();
    
    if (monthYearDisplay) monthYearDisplay.textContent = `${monthNames[month]} ${year}`;
    
    const firstDayIndex = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month + 1, 0).getDate();
    
    const today = new Date();
    today.setHours(0,0,0,0);
    
    // Fill empty past days
    for (let i = 0; i < firstDayIndex; i++) {
        const emptyDiv = document.createElement("div");
        emptyDiv.classList.add("calendar-day", "empty");
        calendarDaysMap.appendChild(emptyDiv);
    }
    
    // Render actual days
    for (let i = 1; i <= lastDay; i++) {
        const dayDiv = document.createElement("div");
        dayDiv.classList.add("calendar-day");
        dayDiv.textContent = i;
        
        const thisDate = new Date(year, month, i);
        const dayOfWeek = thisDate.getDay();
        
        // Bloquear dias no passado OU Segunda(1) a Quinta(4)
        if (thisDate < today || (dayOfWeek >= 1 && dayOfWeek <= 4)) {
            dayDiv.classList.add("disabled");
        } else {
            // Check if selected
            if (selectedDate && 
                selectedDate.getDate() === i && 
                selectedDate.getMonth() === month && 
                selectedDate.getFullYear() === year) {
                dayDiv.classList.add("selected");
            }
            
            dayDiv.addEventListener("click", () => {
                selectedDate = new Date(year, month, i);
                selectedTime = null; 
                renderCalendar();
                
                // Mostrar status de carregamento no time slots
                renderTimeSlots(true);
                
                const dateYMD = `${year}-${String(month+1).padStart(2,'0')}-${String(i).padStart(2,'0')}`;
                
                // Buscar horários ocupados no Google Calendar
                fetch(`${GOOGLE_APP_SCRIPT_URL}?action=list&date=${dateYMD}`)
                    .then(res => res.json())
                    .then(data => {
                        currentBusySlots = data || [];
                        renderTimeSlots(false);
                    })
                    .catch(e => {
                        console.error("Erro ao buscar agenda:", e);
                        currentBusySlots = [];
                        renderTimeSlots(false);
                    });
            });
        }
        
        calendarDaysMap.appendChild(dayDiv);
    }
}

function renderTimeSlots(isLoading = false) {
    if (!timeSlotsContainer) return;
    
    const serviceVal = bookingService.value;
    const vehicleVal = bookingVehicle.value;
    
    if (!selectedDate || !serviceVal || !vehicleVal) {
        timeSlotsContainer.innerHTML = '<p class="select-date-prompt">Selecione o Veículo, o Serviço e também uma data para carregar os horários.</p>';
        if (selectedDateDisplay) selectedDateDisplay.textContent = "...";
        selectedTime = null;
        validateForm();
        return;
    }
    
    const dateStr = selectedDate.toLocaleDateString('pt-BR');
    if (selectedDateDisplay) selectedDateDisplay.textContent = dateStr;
    timeSlotsContainer.innerHTML = "";
    
    if (isLoading) {
        timeSlotsContainer.innerHTML = '<p class="select-date-prompt" style="color: var(--primary-soft); font-weight: bold;">Sincronizando com o Servidor do Google... Aguarde.</p>';
        return;
    }
    
    let duration = 60; // fallback
    if (serviceDatabase[serviceVal] && serviceDatabase[serviceVal][vehicleVal]) {
        duration = serviceDatabase[serviceVal][vehicleVal];
    }
    
    let startMins, endMins;
    const dayOfWeek = selectedDate.getDay();
    
    if (dayOfWeek === 5) {
        // Sexta-feira: 15h as 17h30
        startMins = 15 * 60;
        endMins = 17 * 60 + 30;
    } else if (dayOfWeek === 6 || dayOfWeek === 0) {
        // Sabado/Dom: 08h30 as 12h
        startMins = 8 * 60 + 30;
        endMins = 12 * 60;
    }
    
    let currentSlot = startMins;
    let dailySlots = [];
    
    const selYear = selectedDate.getFullYear();
    const selMonth = selectedDate.getMonth();
    const selDay = selectedDate.getDate();
    
    while (currentSlot + duration <= endMins) {
        const hours = Math.floor(currentSlot / 60);
        const mins = currentSlot % 60;
        
        const slotStart = new Date(selYear, selMonth, selDay, hours, mins, 0).getTime();
        const slotEnd = slotStart + duration * 60000;
        
        // Verifica colisao
        let hasCollision = false;
        if (Array.isArray(currentBusySlots)) {
            for (let busy of currentBusySlots) {
                let bStart, bEnd;
                // Suporta versão V1 (Strings Ex: "15:00") e versão V2 (Objetos de timestamps)
                if (typeof busy === 'string' && busy.includes(':')) {
                    const [bh, bm] = busy.split(':');
                    bStart = new Date(selYear, selMonth, selDay, parseInt(bh, 10), parseInt(bm, 10), 0).getTime();
                    bEnd = bStart + 60 * 60000; // assumir 1h para strings secas da primeira versao
                } else if (busy && busy.start && busy.end) {
                    bStart = busy.start;
                    bEnd = busy.end;
                }
                
                if (bStart && bEnd) {
                    // Ignora eventos de Dia Inteiro ou tarefas multi-dias (>= 15 horas)
                    const durationMs = bEnd - bStart;
                    if (durationMs >= 15 * 60 * 60 * 1000) {
                        continue;
                    }
                    
                    if (slotStart < bEnd && slotEnd > bStart) {
                        hasCollision = true;
                        break;
                    }
                }
            }
        }
        
        if (!hasCollision) {
            dailySlots.push(`${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`);
        }
        currentSlot += 30; 
    }
    
    if (dailySlots.length === 0) {
        timeSlotsContainer.innerHTML = `<p class="select-date-prompt" style="color: #ff5f5f;">Não há mais horários disponíveis suficientes neste dia para as ${(duration/60).toFixed(1)}h exigidas.</p>`;
        selectedTime = null;
        validateForm();
        return;
    }
    
    let foundPreviouslySelected = false;
    
    dailySlots.forEach(time => {
        const slot = document.createElement("div");
        slot.classList.add("time-slot");
        slot.textContent = time;
        
        if (selectedTime === time) {
            slot.classList.add("selected");
            foundPreviouslySelected = true;
        }
        
        slot.addEventListener("click", () => {
            selectedTime = time;
            renderTimeSlots();
            validateForm();
        });
        
        timeSlotsContainer.appendChild(slot);
    });
    
    if (!foundPreviouslySelected) {
        selectedTime = null;
    }
    validateForm();
}

function validateForm() {
    if (!confirmBtn || !bookingName || !bookingPhone || !bookingService || !bookingVehicle) return;
    
    const nameVal = bookingName.value.trim();
    const phoneVal = bookingPhone.value.trim();
    const vehicleVal = bookingVehicle.value.trim();
    const serviceVal = bookingService.value;
    
    // Reset estilo normal
    confirmBtn.style.background = "linear-gradient(180deg, #3b5cff 0%, #2443d8 100%)";
    
    const rawPhone = phoneVal.replace(/\D/g, '');
    if (nameVal && rawPhone.length >= 10 && vehicleVal && selectedDate && selectedTime) {
        confirmBtn.disabled = false;
        confirmBtn.innerHTML = "HORÁRIO BLOQUEADO! <i class='ph ph-check-circle'></i>";
        
        let durationMins = 60;
        if (serviceDatabase[serviceVal] && serviceDatabase[serviceVal][vehicleVal]) {
            durationMins = serviceDatabase[serviceVal][vehicleVal];
        }
        
        const dateYMD = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth()+1).padStart(2,'0')}-${String(selectedDate.getDate()).padStart(2,'0')}`;
        
        confirmBtn.onclick = () => {
            confirmBtn.disabled = true;
            confirmBtn.innerHTML = "SALVANDO NO SISTEMA... <i class='ph ph-spinner ph-spin' style='animation: spin 1s linear infinite;'></i>";
            
            const cleanPhone = phoneVal.replace(/\D/g, '');
            const bookUrl = `${GOOGLE_APP_SCRIPT_URL}?action=book&name=${encodeURIComponent(nameVal)}&phone=${encodeURIComponent(cleanPhone)}&service=${encodeURIComponent(serviceVal)}&vehicle=${encodeURIComponent(vehicleVal)}&date=${dateYMD}&time=${selectedTime}&duration=${durationMins}`;
            
            fetch(bookUrl)
                .then(res => res.json())
                .then(data => {
                    if(data.success) {
                        confirmBtn.innerHTML = "HORÁRIO BLOQUEADO! <i class='ph ph-check-circle'></i>";
                        confirmBtn.style.background = "#20b858";
                        
                        let price = 0;
                        if (typeof priceDatabase !== 'undefined' && priceDatabase[serviceVal] && priceDatabase[serviceVal][vehicleVal]) {
                            price = priceDatabase[serviceVal][vehicleVal];
                        }
                        const pixAmount = (price * 0.30).toFixed(2).replace('.', ',');
                        const dateFormatted = dateYMD.split('-').reverse().join('/');
                        
                        const wppText = `Olá, vim pelo site! Acabei de bloquear o horário no calendário para o dia *${dateFormatted}* às *${selectedTime}*.\n\n🚗 Veículo: ${vehicleVal}\n🧼 Serviço: ${serviceVal}\n🙋‍♂️ Nome: ${nameVal}\n\nO valor total é R$ ${price.toFixed(2).replace('.', ',')}. Aguardo o envio da Chave PIX para transferir o sinal de 30% *(R$ ${pixAmount})* e confirmar permanentemente a reserva. Li e aceito a política de cancelamento da Garagem.`;
                        const encodedText = encodeURIComponent(wppText);
                        
                        // Limpar Formulário
                        bookingName.value = "";
                        bookingPhone.value = "";
                        bookingVehicle.selectedIndex = 0;
                        bookingService.selectedIndex = 0;
                        if (serviceDurationInfo) serviceDurationInfo.classList.remove("visible");
                        updateDurationInfo(); // Isso vai esconder o span de preço/tempo
                        
                        window.open(`https://wa.me/5551997788628?text=${encodedText}`, '_blank');
                        
                        selectedTime = null;
                        // Recarregar calendário para ocupar o slot que acabamos de marcar
                        if(selectedDate) {
                            const d = document.querySelector(".calendar-day.selected");
                            if(d) d.click(); 
                        }
                    } else {
                        throw new Error("Falha ao agendar");
                    }
                })
                .catch(e => {
                    confirmBtn.disabled = false;
                    confirmBtn.innerHTML = "ERRO. TENTAR NOVAMENTE";
                    confirmBtn.style.background = "#ff5f5f";
                });
        };
    } else {
        confirmBtn.disabled = true;
        confirmBtn.innerHTML = "PREENCHA TUDO PARA AGENDAR";
        confirmBtn.onclick = null;
    }
}

// Add simple spinner CSS dynamically
const style = document.createElement('style');
style.innerHTML = `@keyframes spin { 100% { transform: rotate(360deg); } }`;
document.head.appendChild(style);

if (prevMonthBtn) {
    prevMonthBtn.addEventListener("click", () => {
        currentCalDate.setMonth(currentCalDate.getMonth() - 1);
        renderCalendar();
    });
}

if (nextMonthBtn) {
    nextMonthBtn.addEventListener("click", () => {
        currentCalDate.setMonth(currentCalDate.getMonth() + 1);
        renderCalendar();
    });
}

if (bookingName) {
    bookingName.addEventListener("input", validateForm);
}
if (bookingVehicle) {
    bookingVehicle.addEventListener("change", () => {
        updateDurationInfo();
        renderTimeSlots();
    });
}
if (bookingService) {
    bookingService.addEventListener("change", () => {
        updateDurationInfo();
        renderTimeSlots(); 
    });
}

// Phone Mask Logic
function applyPhoneMask(input) {
    if (!input) return;
    input.addEventListener("input", (e) => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 11) value = value.slice(0, 11);
        
        let formatted = "";
        if (value.length > 0) {
            formatted = "(" + value.slice(0, 2);
            if (value.length > 2) {
                formatted += ") " + value.slice(2, 7);
                if (value.length > 7) {
                    formatted += "-" + value.slice(7);
                }
            }
        }
        e.target.value = formatted;
        
        // Trigger validation if applicable
        if (input.id === "booking-phone") validateForm();
        if (input.id === "eval-phone") validateEvalForm();
    });
}

// Global initialization
document.addEventListener("DOMContentLoaded", () => {
    applyPhoneMask(document.getElementById("booking-phone"));
    applyPhoneMask(document.getElementById("eval-phone"));
    applyPhoneMask(document.getElementById("panel-phone"));
});

// Client Panel Logic
const openClientPanelBtn = document.getElementById("open-client-panel");
const clientPanelModal = document.getElementById("client-panel-modal");
const closePanelModal = document.getElementById("close-panel-modal");
const panelPhone = document.getElementById("panel-phone");
const searchBookingsBtn = document.getElementById("search-bookings-btn");
const bookingsList = document.getElementById("bookings-list");

if (openClientPanelBtn && clientPanelModal) {
    openClientPanelBtn.addEventListener("click", (e) => {
        e.preventDefault();
        clientPanelModal.style.display = "flex";
        document.body.style.overflow = "hidden";
    });
}
if (closePanelModal) {
    closePanelModal.addEventListener("click", () => {
        clientPanelModal.style.display = "none";
        document.body.style.overflow = "";
    });
}

if (searchBookingsBtn) {
    searchBookingsBtn.addEventListener("click", () => {
        const phoneObj = panelPhone.value.replace(/\D/g, '');
        if (phoneObj.length < 8) {
            alert("Insira os números de telefone corretamente.");
            return;
        }
        searchBookingsBtn.disabled = true;
        searchBookingsBtn.innerHTML = "Buscando... <i class='ph ph-spinner ph-spin'></i>";
        bookingsList.innerHTML = "";
        
        fetch(`${GOOGLE_APP_SCRIPT_URL}?action=history&phone=${phoneObj}`)
            .then(res => res.json())
            .then(events => {
                searchBookingsBtn.disabled = false;
                searchBookingsBtn.innerHTML = "Buscar Histórico";
                
                if (!events || events.length === 0) {
                    bookingsList.innerHTML = "<p style='color: rgba(255,255,255,0.6);text-align:center;'>Nenhuma reserva futura ativa vinculada a este número.</p>";
                    return;
                }
                
                events.forEach(ev => {
                    const card = document.createElement("div");
                    card.className = "booking-card";
                    
                    // Se o título vier no formato "Serviço | Nome (Veículo)", vamos tentar separar pra ficar bonito
                    const [serviceLabel, clientInfo] = ev.title.split(" | ");
                    
                    card.innerHTML = `
                        <div style="margin-bottom: 5px;">
                            <span style="color: #8c95a7; font-size: 0.75rem; text-transform: uppercase; font-weight: 800;">Serviço</span>
                            <div style="color: #fff; font-size: 1.1rem; font-weight: 700;">${serviceLabel || ev.title}</div>
                        </div>
                        <div style="margin-bottom: 15px;">
                            <span style="color: #8c95a7; font-size: 0.75rem; text-transform: uppercase;">Agendado para:</span>
                            <div style="color: var(--primary-soft); font-weight: 600;">📅 ${ev.dateStr || "Data Pendente"}</div>
                        </div>
                        <button class="cancel-btn" data-id="${ev.id}">Desmarcar Horário</button>
                    `;
                    bookingsList.appendChild(card);
                    
                    const cancelBtn = card.querySelector('.cancel-btn');
                    cancelBtn.addEventListener("click", () => {
                        if (confirm("Tem certeza que deseja cancelar essa reserva da garagem?")) {
                            cancelBtn.disabled = true;
                            cancelBtn.textContent = "Cancelando...";
                            
                            fetch(`${GOOGLE_APP_SCRIPT_URL}?action=cancel&eventId=${ev.id}`)
                                .then(r => r.json())
                                .then(d => {
                                    if(d.success) {
                                        card.style.opacity = "0.5";
                                        cancelBtn.textContent = "Cancelado com sucesso";
                                        if (document.getElementById("calendar-days")) renderCalendar();
                                    } else { throw new Error(); }
                                })
                                .catch(() => {
                                    cancelBtn.disabled = false;
                                    cancelBtn.textContent = "Erro de conexão";
                                });
                        }
                    });
                });
            })
            .catch(() => {
                searchBookingsBtn.disabled = false;
                searchBookingsBtn.innerHTML = "Buscar Histórico";
                bookingsList.innerHTML = "<p style='color: #ff5f5f;text-align:center;'>Servidor indisponível no momento.</p>";
            });
    });
}

// Iniciar calendário ao carregar
if (document.getElementById("calendar-days")) {
    renderCalendar();
}

/* =========================
   MODAL DE AVALIAÇÃO
========================= */
const evaluationModal    = document.getElementById("evaluation-modal");
const openEvalModalBtn   = document.getElementById("open-evaluation-modal");
const closeEvalModalBtn  = document.getElementById("close-evaluation-modal");
const evalModalOverlay   = document.getElementById("eval-modal-overlay");
const evalNameInput      = document.getElementById("eval-name");
const evalPhoneInput     = document.getElementById("eval-phone");
const evalVehicleSelect  = document.getElementById("eval-vehicle");
const evalDescTextarea   = document.getElementById("eval-description");
const sendEvalBtn        = document.getElementById("send-evaluation-btn");

function openEvalModal() {
    if (!evaluationModal) return;
    evaluationModal.classList.add("is-open");
    document.body.style.overflow = "hidden";
    // Foca no primeiro campo após a animação
    setTimeout(() => { if (evalNameInput) evalNameInput.focus(); }, 350);
}

function closeEvalModal() {
    if (!evaluationModal) return;
    evaluationModal.classList.remove("is-open");
    document.body.style.overflow = "";
}

function validateEvalForm() {
    if (!sendEvalBtn || !evalNameInput || !evalPhoneInput || !evalVehicleSelect) return;
    const nameOk    = evalNameInput.value.trim().length > 1;
    const phoneOk   = evalPhoneInput.value.replace(/\D/g, '').length >= 10;
    const vehicleOk = evalVehicleSelect.value !== "";
    sendEvalBtn.disabled = !(nameOk && phoneOk && vehicleOk);
}

if (openEvalModalBtn)  openEvalModalBtn.addEventListener("click", (e) => { e.preventDefault(); openEvalModal(); });
if (closeEvalModalBtn) closeEvalModalBtn.addEventListener("click", closeEvalModal);

// Fechar ao clicar fora do box (no inner ou no backdrop)
const evalModalInner = document.querySelector(".eval-modal-inner");
if (evaluationModal) {
    evaluationModal.addEventListener("click", (e) => {
        if (e.target === evaluationModal || e.target === evalModalInner) {
            closeEvalModal();
        }
    });
}

// Smooth Scroll for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;
        
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            const headerOffset = 90;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

// Fechar com tecla Esc
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && evaluationModal && evaluationModal.classList.contains("is-open")) {
        closeEvalModal();
    }
});

// Validação em tempo real
[evalNameInput, evalPhoneInput, evalDescTextarea].forEach(el => {
    if (el) el.addEventListener("input", validateEvalForm);
});
if (evalVehicleSelect) evalVehicleSelect.addEventListener("change", validateEvalForm);

// Envio para WhatsApp
if (sendEvalBtn) {
    sendEvalBtn.addEventListener("click", () => {
        const name    = evalNameInput.value.trim();
        const phone   = evalPhoneInput.value.replace(/\D/g, '');
        const vehicle = evalVehicleSelect.value;
        const desc    = evalDescTextarea ? evalDescTextarea.value.trim() : "";

        let msg = `Olá! Vim pelo site e gostaria de agendar uma *avaliação gratuita* do meu veículo.\n\n`;
        msg += `🙋 Nome: *${name}*\n`;
        msg += `🚗 Veículo: *${vehicle}*\n`;
        if (desc) msg += `📝 O que precisa avaliar: ${desc}\n`;
        msg += `\nAguardo o contato para combinarmos a melhor data! 😊`;

        window.open(`https://wa.me/5551997788628?text=${encodeURIComponent(msg)}`, "_blank");

        // Limpar e fechar o modal
        evalNameInput.value    = "";
        evalPhoneInput.value   = "";
        evalVehicleSelect.selectedIndex = 0;
        if (evalDescTextarea) evalDescTextarea.value = "";
        validateEvalForm();
        closeEvalModal();
    });
}