/* ─────────────────────────────────────────────────────────────────────────────
   EDIT THIS FILE. Todo el sitio sale de acá.

   Buscá "COMPLETAR" para encontrar lo que todavía falta (sobre todo las fotos
   de trabajos realizados dentro de cada servicio).
   ───────────────────────────────────────────────────────────────────────────── */

export const profile = {
  brand: 'Edgar Cristales',
  tagline: 'Espacios con más luz, hechos a tu medida.',
  subtitle:
    'Fabricamos e instalamos mamparas, espejos, cerramientos de vidrio y balcones para tu casa — de principio a fin.',

  // COMPLETAR: URL final una vez deployado en Vercel.
  siteUrl: 'https://edgar-cristales.vercel.app',
  title: 'Edgar Cristales — Mamparas, espejos y cerramientos de vidrio',
  description:
    'Mamparas de baño, espejos, cortinas y cerramientos de cristal, y balcones a medida. Medición, fabricación e instalación en Mar del Plata, CABA y alrededores.',
}

export const contact = {
  phone: { display: '+54 9 2235 03-2672', href: 'tel:+5492235032672' },
  whatsapp: { display: '+54 9 2236 85-9250', href: 'https://wa.me/5492236859250' },
  email: 'Edgaraluminio@gmail.com',
  instagram: { display: '@grupolumio', href: 'https://www.instagram.com/grupolumio/' },
  zona: 'Mar del Plata, CABA y alrededores',
}

/* ── Qué hacemos ──────────────────────────────────────────────────────────
   Cada servicio se muestra como un desplegable: al hacer click se abre y
   muestra el detalle + una galería de fotos.

   COMPLETAR: cuando tengan las fotos de trabajos realizados, agregarlas acá
   como { src: '/nombre-de-archivo.jpg', alt: 'descripción corta' } dentro
   del array "imagenes" de cada servicio (subiendo las imágenes a /public). */
export const servicios = [
  {
    slug: 'mamparas',
    nombre: 'Mamparas de baño',
    teaser: 'Mamparas a medida en vidrio templado, para baños más luminosos y con terminaciones premium.',
    detalle:
      'Fabricamos e instalamos mamparas de baño a medida en vidrio templado de seguridad, con herrajes en distintos acabados. Diseños frontales, en L, o con paño fijo y corredizo, pensados para sumar luz y orden sin resignar estética. Incluye medición en el lugar, fabricación e instalación cuidada.',
    imagenes: [
      { src: '/mampara-1.jpg', alt: 'Mampara de baño con paño fijo, terminación en vidrio transparente' },
      { src: '/mampara-2.jpg', alt: 'Mampara de ducha con herrajes en negro' },
    ] as { src: string; alt: string }[],
  },
  {
    slug: 'espejos',
    nombre: 'Espejos',
    teaser: 'Espejos a medida para baños, vestidores y living, con cortes especiales y biselados.',
    detalle:
      'Cortamos y colocamos espejos a medida para cualquier ambiente: baños, vestidores, gimnasios en casa o locales comerciales. Trabajamos distintos espesores, bordes pulidos o biselados, y la posibilidad de sumar marco o luz LED perimetral. Cada pieza se corta a la medida exacta del espacio.',
    imagenes: [
      { src: '/espejo-1.jpg', alt: 'Espejo con luz LED perimetral en baño' },
      { src: '/espejo-2.jpg', alt: 'Espejo con luz LED perimetral sobre bacha de baño' },
    ] as { src: string; alt: string }[],
  },
  {
    slug: 'cerramientos',
    nombre: 'Cortinas / Cerramientos de cristal',
    teaser: 'Cerramientos de vidrio para balcones, patios y galerías: más espacio útil todo el año.',
    detalle:
      'Cerramos balcones, patios y galerías con sistemas de vidrio corredizo o plegable, sin perfiles que interrumpan la vista. Ganás un ambiente extra protegido del viento, la lluvia y el frío, manteniendo la luminosidad natural. Asesoramos sobre el sistema más conveniente según el espacio y el uso que le quieras dar.',
    imagenes: [] as { src: string; alt: string }[], // COMPLETAR
  },
  {
    slug: 'balcones',
    nombre: 'Balcones',
    teaser: 'Barandas y cerramientos de vidrio para balcones, con estructuras de aluminio de bajo mantenimiento.',
    detalle:
      'Diseñamos e instalamos barandas de vidrio y estructuras de aluminio para balcones, sumando seguridad sin resignar vista ni luz. Trabajamos tanto en obra nueva como en reformas, con terminaciones en aluminio anodizado o pintado según el estilo del edificio.',
    imagenes: [
      { src: '/balcon-1.jpg', alt: 'Baranda de vidrio en balcón con vista a jardín y pileta' },
      { src: '/balcon-2.jpg', alt: 'Baranda de vidrio en entrepiso interior con estructura de aluminio negro' },
      { src: '/balcon-3.jpg', alt: 'Panel de vidrio como baranda junto a escalera, herrajes en negro' },
    ] as { src: string; alt: string }[],
  },
]

/* ── De principio a fin ────────────────────────────────────────────────── */
export const proceso = [
  { t: 'Medición a domicilio', d: 'Vamos a tu casa o local para tomar las medidas exactas antes de fabricar.' },
  { t: 'Fabricación a medida', d: 'Cada pieza se fabrica a medida, en vidrio templado y aluminio de calidad.' },
  { t: 'Instalación cuidada', d: 'Coordinamos la instalación cuidando cada detalle, de principio a fin.' },
]

export const footerNote = 'Edgar Cristales — Vidrio y aluminio a medida.'
