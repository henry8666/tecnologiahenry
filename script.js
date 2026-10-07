/* =======================================================================
   TECH DEL MES — script.js
   -----------------------------------------------------------------------
   ======================================================================= */

/* ---------- 1) CARRUSEL: recomendados del mes ---------- */
const productos = [
  {
    img:"https://picsum.photos/id/0/700/500",
    nombre:"Laptop para estudiantes",
    razon:"Elegimos este modelo este mes porque tiene la mejor batería del mercado para estudiantes.",
    enlace:"https://www.amazon.com/"
  },
  {
    img:"https://picsum.photos/id/3/700/500",
    nombre:"Audifonos inalámbricos",
    razon:"Los recomendamos por su cancelación de ruido y su precio justo para concentrarse al estudiar.",
    enlace:"https://www.amazon.com/"
  },
  {
    img:"https://picsum.photos/id/48/700/500",
    nombre:"Teclado mecánico",
    razon:"Nuestra elección del mes por su durabilidad y comodidad para escribir muchas horas.",
    enlace:"https://www.amazon.com/"
  }
];

/* ---------- 2) Productos solicitados por la comunidad ---------- */
const solicitados = [
  {
    img:"https://picsum.photos/id/60/600/400",
    nombre:"Monitor 24 pulgadas",
    desc:"Nos lo pidió María. Ideal para estudiar y trabajar sin cansar la vista.",
    enlace:"https://www.amazon.com/"
  },
  {
    img:"https://picsum.photos/id/180/600/400",
    nombre:"Mouse ergonómico",
    desc:"Solicitado por Carlos. Cómodo para jornadas largas frente al computador.",
    enlace:"https://www.amazon.com/"
  },
  {
    img:"https://picsum.photos/id/201/600/400",
    nombre:"Disco SSD externo",
    desc:"Pedido por Lucía. Rápido y portátil para guardar tus archivos.",
    enlace:"https://www.amazon.com/"
  }
];

/* =======================================================================
   DE AQUÍ EN ADELANTE ES LA LÓGICA. No necesitas cambiar nada.
   ======================================================================= */
const TEXTO_BOTON = "Ver precio actual y opiniones en Amazon";

/* ---------- Pintar el carrusel ---------- */
const track   = document.getElementById("carTrack");
const puntosEl = document.getElementById("carPuntos");
let carActual = 0;
let carTimer  = null;

if(track){
  track.innerHTML = productos.map(p => `
    <div class="car-item">
      <div class="car-card">
        <img src="${p.img}" alt="${p.nombre}" loading="lazy">
        <div class="car-cuerpo">
          <h3 class="car-nombre">${p.nombre}</h3>
          <p class="car-razon">${p.razon}</p>
          <a class="btn btn-primary" href="${p.enlace}" target="_blank" rel="nofollow sponsored noopener">${TEXTO_BOTON}</a>
        </div>
      </div>
    </div>`).join("");

  // Puntos de navegación
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
function iniciarAuto(){ carTimer = setInterval(() => irA(carActual + 1), 5000); }
function reiniciarAuto(){ clearInterval(carTimer); iniciarAuto(); }

/* ---------- Pintar los solicitados ---------- */
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
    if(form._gotcha && form._gotcha.value){ return; }     // anti-spam

    const datos = new FormData(form);                      // guardar antes de limpiar
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

if (!document.getElementById('lightbox-infalible')) {
    const lightboxModal = document.createElement('div');
    lightboxModal.id = 'lightbox-infalible';
    
    
    Object.assign(lightboxModal.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        zIndex: '9999999',
        display: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'zoom-out'
    });

    // Creamos la etiqueta de imagen interna del modal
    const lightboxImg = document.createElement('img');
    lightboxImg.id = 'lightbox-img-render';
    Object.assign(lightboxImg.style, {
        maxWidth: '90vw',
        maxHeight: '85vh',
        objectFit: 'contain',
        borderRadius: '8px',
        boxShadow: '0 0 30px rgba(0,0,0,0.5)',
        transition: 'transform 0.2s ease'
    });

    lightboxModal.appendChild(lightboxImg);
    document.body.appendChild(lightboxModal);

    // Al hacer clic en cualquier parte del fondo negro o la imagen grande, se cierra
    lightboxModal.addEventListener('click', () => {
        lightboxModal.style.display = 'none';
    });
}


document.addEventListener('click', (e) => {
 
    if (e.target.tagName === 'IMG' && (e.target.closest('.car-card') || e.target.className.includes('car'))) {
        
        const modalFlotante = document.getElementById('lightbox-infalible');
        const imagenFlotante = document.getElementById('lightbox-img-render');
        
        if (modalFlotante && imagenFlotante) {
           
            imagenFlotante.src = e.target.src;
          
            modalFlotante.style.display = 'flex';
            
           
            e.preventDefault();
            e.stopPropagation();
        }
    }
}, true);   

