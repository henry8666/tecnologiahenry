/* ---------- 1) CARRUSEL: recomendados del mes ---------- */
const productos = [
  {
    img:"https://m.media-amazon.com/images/I/71+ZseyMaLL._AC_SL1500_.jpg",
    nombre:"Creada para tu rutina, pensada para tus sueños",
    razon:"Tu inspiración para cada día. La Microsoft Surface Pro une la potencia de una laptop y la ligereza de una tablet en tus manos. Diseñada para transformar tu rutina y dar vida a tus grandes ideas en cualquier lugar.",
    enlace:"https://link.amazon/A0cP1C0Jq",
    galeria: [
      "https://m.media-amazon.com/images/I/6117VV5FLfL._AC_SL1284_.jpg",
      "https://m.media-amazon.com/images/I/71wmLWFVGGL._AC_SL1500_.jpg",
       "https://m.media-amazon.com/images/I/71Fx6nO5vhL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71OB1t2FuLL._AC_SL1500_.jpg",
       "https://m.media-amazon.com/images/I/618RaJBLS8L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61IO6wOW1pL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71wmLWFVGGL._AC_SL1500_.jpg",
       "https://m.media-amazon.com/images/I/71+ZseyMaLL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71ucchZzKnL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61-TnIFkZzL._AC_SL1500_.jpg"
    ]
  },
  {
    img:"https://m.media-amazon.com/images/I/71Q+42JxLDL._AC_SL1500_.jpg",
    nombre:"Abriendo las puertas a tu futuro, día a día.",
    razon:"Los recomendamos (Conectando tus ganas de aprender con el mundo).",
    enlace:"https://link.amazon/B0esbOhl0",
    galeria: [
      "https://m.media-amazon.com/images/I/716DMf+QlLL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61+JMQrEw8L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71V3Y2ejzgL._AC_SL1500_.jpg",
       "https://m.media-amazon.com/images/I/71I1GOOYr6L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71zYaevj15L._AC_SL1500_.jpg", 
       "https://m.media-amazon.com/images/I/718724ksElL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71SvhQFvuNL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61KXDxgjyeL._AC_SL1500_.jpg"
    ]
  },
  {
    img:"https://m.media-amazon.com/images/I/71NMFO0iUhL._AC_SL1500_.jpg",
    nombre:"AMD Ryzen 7 9800X3D: El Rey Absoluto del Gaming ya está Aquí 👑🚀",
    razon:"Lleva tus juegos a un nivel nunca antes visto. Equipado con la revolucionaria tecnología AMD 3D V-Cache y arquitectura Zen 5, este procesador destruye cualquier límite de rendimiento, ofreciéndote la máxima tasa de cuadros por segundo y una fluidez brutal en los títulos más exigentes del mercado.",
    enlace:"https://link.amazon/B0dUjBunw",
    galeria: [
      "https://m.media-amazon.com/images/I/71NMFO0iUhL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/5195hGcJ0IL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71KDfkysoeL._AC_SL1500_.jpg"
    
    ]
  },
  {
    img:"https://m.media-amazon.com/images/I/711NjccGktL._AC_SL1500_.jpg",
    nombre:"ASUS TUF A16: Domina tu Destino 🔥",
    razon:"El escenario donde se forjan las leyendas. ⚔️✨No es solo una laptop; es la puerta de entrada a mundos extraordinarios y victorias inolvidables. Con la fuerza bruta del procesador AMD Ryzen 7 y la velocidad de los gráficos RTX 4050, la ASUS TUF A16 está diseñada para superar contigo cada desafío y convertir tus horas de juego en pura pasión.Despierta al guerrero que llevas dentro y conquista tus metas diarias..",
    enlace:"https://link.amazon/B08U1LfRB",
    galeria: [
      "https://m.media-amazon.com/images/I/71Xv-C1vmEL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61EnIKsbMkL._AC_SL1500_.jpg",
       "https://m.media-amazon.com/images/I/71-WDaaZYLL._AC_SL1250_.jpg",
      "https://m.media-amazon.com/images/I/71NhxRk3y3L._AC_SL1500_.jpg",
       "https://m.media-amazon.com/images/I/61zeScRVCSL._AC_SL1200_.jpg",
      "https://m.media-amazon.com/images/I/711Fc0ioNHL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81XYH5JyylL._AC_SL1500_.jpg"
    ]
  }
];

/* ---------- 2) Productos solicitados por la comunidad ---------- */
const solicitados = [
  {
    img:"https://m.media-amazon.com/images/I/71QT0JmWP8L._AC_SL1500_.jpg",
    nombre:"RedThunder K10: Rompe las Reglas, Domina el Juego ⚡",
    desc:"Nos lo pidió María. Despídete de los cables molestos. Siente la máxima precisión táctil y total libertad inalámbrica en cada una de tus partidas.",
    enlace:"https://link.amazon/A01i1ArKi"
  },
  {
    img:"https://m.media-amazon.com/images/I/61ci5Xwyk1L._AC_SL1500_.jpg",
    nombre:"• Energy Sistem SoundReel TV: Cine en tus Oídos 🎧",
    desc:"Solicitado por Carlos. Lleva el cine a tus oídos sin molestar a nadie. Disfruta tus películas favoritas con sonido de alta claridad, almohadillas ultra cómodas y cero retrasos de audio..",
    enlace:"https://link.amazon/B09x7XQYf"
  },
  
  {
    img:"https://m.media-amazon.com/images/I/61qtPxAj0FL._AC_SL1000_.jpg",
    nombre:"PC STGaubron Gaming: Potencia Pura para Forjar tus Victorias ⚔️💻",
    desc:"Entra al juego con un rendimiento brutal. Con los gráficos de la RTX 2060, un procesador Ryzen 5 y 16GB de RAM, esta PC está lista para correr tus juegos competitivos favoritos a máxima velocidad y con una iluminación RGB espectacular que transformará tu habitación.",
    enlace:"https://link.amazon/B077EVJQE"
  }
];

/* =======================================================================
   
   ======================================================================= */
const TEXTO_BOTON = "Ver precio actual y opiniones en Amazon";

/* ---------- Pintar el carrusel ---------- */
const track   = document.getElementById("carTrack");
const puntosEl = document.getElementById("carPuntos");
let carActual = 0;
let carTimer  = null;

if(track){
  track.innerHTML = productos.map((p, index) => `
    <div class="car-item">
      <div class="car-card">
        <img src="${p.img}" alt="${p.nombre}" data-index="${index}" class="img-carrusel-disparador" loading="lazy">
        <div class="car-cuerpo">
          <h3 class="car-nombre">${p.nombre}</h3>
          <p class="car-razon">${p.razon}</p>
          <a class="btn btn-primary" href="${p.enlace}" target="_blank" rel="nofollow sponsored noopener">${TEXTO_BOTON}</a>
        </div>
      </div>
    </div>`).join("");

  if(puntosEl){
    puntosEl.innerHTML = productos.map((_, i) =>
      `<button class="car-punto ${i===0?"activo":""}" data-i="${i}"></button>`).join("");
    puntosEl.addEventListener("click", e => {
      if(e.target.classList.contains("car-punto")) irA(+e.target.dataset.i);
    });
  }

  document.getElementById("carPrev")?.addEventListener("click", () => { irA(carActual - 1); reiniciarAuto(); });
  document.getElementById("carNext")?.addEventListener("click", () => { irA(carActual + 1); reiniciarAuto(); });

  mostrar();
  iniciarAuto();
}

function irA(i){
  const total = productos.length;
  carActual = (i + total) % total;
  mostrar();
}
function mostrar(){
  if(track) track.style.transform = `translateX(-${carActual * 100}%)`;
  document.querySelectorAll(".car-punto").forEach((b, i) =>
    b.classList.toggle("activo", i === carActual));
}
function iniciarAuto(){ 
  clearInterval(carTimer);
  carTimer = setInterval(() => irA(carActual + 1), 5000); 
}
function reiniciarAuto(){ 
  clearInterval(carTimer); 
  iniciarAuto(); 
}

/* ----------  ---------- */
const solGrid = document.getElementById("solicitados-grid");
if(solGrid){
  solGrid.innerHTML = solicitados.map(s => `
    <div class="sol-card">
      <img src="${s.img}" alt="${s.nombre}" loading="lazy">
      <div class="sol-cuerpo">
        <span class="sol-badge">Solicitado</span>
        <h3 class="sol-nombre">${s.nombre}</h3>
        <p class="sol-desc">${s.desc}</p>
        <a class="btn btn-primary" href="${s.enlace}" target="_blank" rel="nofollow sponsored noopener">${TEXTO_BOTON}</a>
      </div>
    </div>`).join("");
}

/* ---------- Menú móvil ---------- */
const nav = document.getElementById("nav");
document.getElementById("navToggle")?.addEventListener("click", () => nav?.classList.toggle("abierto"));
nav?.querySelectorAll(".nav-link").forEach(a => a.addEventListener("click", () => nav.classList.remove("abierto")));

/* ---------- Encabezado al hacer scroll ---------- */
const header = document.getElementById("header");
window.addEventListener("scroll", () => header?.classList.toggle("scrolled", window.scrollY > 60));

/* ---------- Formulario (envío + confirmación + limpieza) ---------- */
const form   = document.getElementById("form");
const estado = document.getElementById("formEstado");

if(form){
  form.addEventListener("submit", async e => {
    e.preventDefault();
    if(form._gotcha && form._gotcha.value){ return; }

    const datos = new FormData(form);
    if(estado){ estado.textContent = "Enviando..."; estado.className = "form-estado"; }

    form.reset();
    document.getElementById("inicio")?.scrollIntoView({ behavior:"smooth" });

    try{
      const resp = await fetch(form.action, {
        method:"POST", body:datos, headers:{ "Accept":"application/json" }
      });
      if(estado){
        if(resp.ok){
          estado.textContent = "¡Gracias! Recibimos tu petición. Pronto la publicaremos.";
          estado.className = "form-estado ok";
        }else{
          estado.textContent = "Hubo un problema al enviar. Inténtalo de nuevo.";
          estado.className = "form-estado error";
        }
      }
    }catch(err){
      if(estado){
        estado.textContent = "Sin conexión. Revisa tu internet e inténtalo otra vez.";
        estado.className = "form-estado error";
      }
    }
  });
}

window.addEventListener("pageshow", () => { if(form) form.reset(); });


/* =======================================================================
   LÓGICA DEL LIGHTBOX INTERACTIVO CON GALERÍA Y DESCRIPCIÓN
   ======================================================================= */
let indexProductoGlobal = 0;
let indexGaleriaGlobal = 0;

if (!document.getElementById('lightbox-galeria-interactiva')) {
    const modal = document.createElement('div');
    modal.id = 'lightbox-galeria-interactiva';
    modal.className = 'lightbox-modal-galeria';

    modal.innerHTML = `
        <span class="btn-cerrar-modal" id="cerrarLightbox">&times;</span>
        <button class="flecha-modal-galeria prev" id="prevLightbox">&#10094;</button>
        
        <div class="contenido-modal-galeria" id="modalContenidoContenedor">
            <div class="texto-modal-galeria">
                <h2 id="tituloModal"></h2>
                <p id="descripcionModal"></p>
            </div>
            <div class="imagen-modal-galeria-wrapper">
                <img id="imgModal" src="" alt="Vista expandida">
            </div>
        </div>
        
        <button class="flecha-modal-galeria next" id="nextLightbox">&#10095;</button>
    `;
    document.body.appendChild(modal);
}

const modalEl = document.getElementById('lightbox-galeria-interactiva');
const imgModalEl = document.getElementById('imgModal');
const tituloModalEl = document.getElementById('tituloModal');
const descripcionModalEl = document.getElementById('descripcionModal');

function actualizarModalImagen() {
    const item = productos[indexProductoGlobal];
    if (item && item.galeria && item.galeria.length > 0) {
        if (imgModalEl) imgModalEl.src = item.galeria[indexGaleriaGlobal];
        if (tituloModalEl) tituloModalEl.textContent = item.nombre;
        if (descripcionModalEl) descripcionModalEl.textContent = item.razon;
    }
}

document.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('img-carrusel-disparador')) {
        const idx = parseInt(e.target.getAttribute('data-index'), 10);
        if (!isNaN(idx)) {
            indexProductoGlobal = idx;
            indexGaleriaGlobal = 0;
            actualizarModalImagen();
            if (modalEl) modalEl.style.display = 'flex';
        }
    }
});

document.getElementById('prevLightbox')?.addEventListener('click', (e) => {
    e.stopPropagation();
    const item = productos[indexProductoGlobal];
    if (item && item.galeria) {
        indexGaleriaGlobal--;
        if (indexGaleriaGlobal < 0) {
            indexGaleriaGlobal = item.galeria.length - 1;
        }
        actualizarModalImagen();
    }
});

document.getElementById('nextLightbox')?.addEventListener('click', (e) => {
    e.stopPropagation();
    const item = productos[indexProductoGlobal];
    if (item && item.galeria) {
        indexGaleriaGlobal++;
        if (indexGaleriaGlobal >= item.galeria.length) {
            indexGaleriaGlobal = 0;
        }
        actualizarModalImagen();
    }
});

const cerrarModalFunc = () => { if (modalEl) modalEl.style.display = 'none'; };
document.getElementById('cerrarLightbox')?.addEventListener('click', cerrarModalFunc);

modalEl?.addEventListener('click', (e) => {
    const contenedor = document.getElementById('modalContenidoContenedor');
    if (contenedor && !contenedor.contains(e.target) && e.target.tagName !== 'BUTTON') {
        cerrarModalFunc();
    }
});




