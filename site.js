/* Hotel Vendimia Boutique — sitio de prueba. Sin motor de reservas hasta validar Little Hotelier. */
(function(){
  "use strict";
  var base = "https://www.hotelvendimia.cl/images/";
  var contact = "contacto@hotelvendimia.cl";
  var phone = "+56 72 282 2464";
  var whatsapp = "56994492225";
  var address = "Ismael Valdés 92, Santa Cruz, Región de O’Higgins, Chile";
  var assets = function(name){ return base + name; };
  var inquiry = function(subject){ return "https://wa.me/" + whatsapp + "?text=" + encodeURIComponent("Hola, quisiera consultar disponibilidad en Hotel Vendimia Boutique Premium" + (subject ? " para " + subject : "") + ". Gracias."); };
  var img = function(file, alt, cls, loading){return '<img src="' + assets(file) + '" alt="' + alt + '" class="' + (cls || "") + '" loading="' + (loading || "lazy") + '">';};
  var linkBtn = function(label, subject, kind){return '<a class="btn ' + (kind || "") + '" href="' + inquiry(subject) + '" target="_blank" rel="noopener noreferrer">' + label + '</a>';};
  var rooms = [
    {slug:"habitacion-doble.html", name:"Habitación Doble", photo:"img-habitacion-doble01.jpg", photos:["img-habitacion-doble01.jpg","img-habitacion-doble02.jpg","img-galeria020.jpg"], summary:"Habitaciones Carmenere y País, ambientadas con objetos de antiguas casonas chilenas.", full:"Habitación 1 Carmenere, ubicada en el primer piso junto a la entrada del hotel, y habitación 4 País, ubicada en el segundo piso. Sus detalles de época crean ambientes íntimos y acogedores.", capacity:"Hasta 3 personas, con costo adicional por persona y cama extra.", beds:"Cama adicional con costo"},
    {slug:"habitacion-doble-superior.html", name:"Habitación Doble Superior", photo:"img-habitacion-doble-superior01.jpg", photos:["img-habitacion-doble-superior01.jpg","img-habitacion-doble-superior02.jpg","img-galeria016.jpg"], summary:"Merlot y Pinot: habitaciones con baños equipados con tina y decoración de época.", full:"La habitación 3 Merlot, en el primer piso, tiene una tina antigua de fierro fundido. La habitación 5 Pinot, en el segundo piso, cuenta con baño amplio y tina tradicional. Ambas evocan el encanto de las antiguas casonas.", capacity:"Hasta 4 personas, con costo adicional por persona.", beds:"Hasta 2 camas adicionales con costo"},
    {slug:"habitacion-junior-suite.html", name:"Habitación Junior Suite", photo:"img-habitacion-junior-suite01.jpg", photos:["img-habitacion-junior-suite01.jpg","img-habitacion-junior-suite02.jpg","img-galeria015.jpg"], summary:"Malbec, Syrah, Semillón y Moscatel, con el carácter clásico de Hotel Vendimia.", full:"Habitación 2 Malbec, amplia y sin ventanas, en el primer piso. Las habitaciones 6 Syrah, 7 Semillón y 8 Moscatel se ubican en el segundo piso. Su mobiliario y objetos patrimoniales conservan el estilo colonial.", capacity:"Hasta 3 personas, con costo adicional por persona.", beds:"Cama adicional con costo"}
  ];
  var facilities = [
    {name:"Piscina", file:"img-instalaciones05.jpg"},
    {name:"Terraza", file:"img-instalaciones02.jpg"},
    {name:"Salones", file:"img-instalaciones03.jpg"},
    {name:"Estacionamiento", file:"img-instalaciones01.jpg"}
  ];
  function roomCard(room){
    return '<article class="card">' + img(room.photo, room.name + ' — Hotel Vendimia Boutique', 'card-photo') + '<div class="card-body"><h3>' + room.name + '</h3><p>' + room.summary + '</p><a class="text-link" href="' + room.slug + '">Más detalles →</a></div></article>';
  }
  function banner(title, crumb){
    return '<section class="page-hero"><div><p class="eyebrow">Hotel Vendimia Boutique Premium</p><h1>' + title + '</h1><div class="crumb"><a href="index.html">Inicio</a> / ' + (crumb || title) + '</div></div></section>';
  }
  function sectionHeader(kicker,title,desc){
    return '<div class="section-head"><span class="kicker">' + kicker + '</span><h2>' + title + '</h2><div class="separator"></div>' + (desc ? '<p>' + desc + '</p>' : '') + '</div>';
  }
  function benefits(){
    var list = [["☕","Desayuno buffet","Incluido con el alojamiento"],["◷","Check-in","Desde las 16:00 horas"],["⌂","Check-out","Hasta las 12:00 horas"],["✓","Confirmación de reserva","Abono mínimo del 50% según condiciones vigentes"]];
    return '<div class="benefits">' + list.map(function(x){return '<div class="benefit"><div class="benefit-icon" aria-hidden="true">' + x[0] + '</div><h4>' + x[1] + '</h4><p>' + x[2] + '</p></div>';}).join('') + '</div>';
  }
  function renderHome(){
    return '<section class="hero">' + img("slider-2.jpg", "Patio colonial de Hotel Vendimia Boutique Premium", "hero-bg", "eager") + '<div class="wrap hero-content"><span class="eyebrow">Santa Cruz · Valle de Colchagua</span><h1>Hotel Vendimia<br><span>Boutique Premium</span></h1><p>Tradición, patrimonio y hospitalidad en el corazón de Santa Cruz. Una experiencia cálida con la elegancia de nuestras raíces.</p><div class="hero-actions"><a class="btn btn-light" href="habitaciones.html">Conocer habitaciones</a>' + linkBtn("Consultar disponibilidad", "") + '</div></div></section>' +
      '<section class="section"><div class="wrap intro-split"><div class="intro-images">' + img("img-galeria015.jpg","Salón de Hotel Vendimia Boutique") + '</div><div class="intro-copy"><span class="kicker">Nuestra historia</span><h2>Un hotel con encanto colonial</h2><p>Hotel Vendimia Boutique es un acogedor espacio inspirado en la época colonial, con muebles y detalles que evocan el patrimonio cultural chileno.</p><p>Estamos a solo cinco cuadras de la Plaza de Armas de Santa Cruz, en el corazón del Valle de Colchagua.</p><a class="text-link" href="instalaciones.html">Conoce nuestros espacios →</a></div></div></section>' +
      '<section class="section alt"><div class="wrap">' + sectionHeader("Hospedarse con nosotros","Beneficios de reservar directamente","Te esperamos para disfrutar una estadía acogedora en Santa Cruz.") + benefits() + '<div class="center">' + linkBtn("Consultar una reserva", "") + '</div></div></section>' +
      '<section class="section"><div class="wrap">' + sectionHeader("Nuestros espacios","Instalaciones","Ambientes de inspiración colonial para relajarse y compartir.") + '<div class="facilities">' + facilities.slice(0,2).map(function(f){return '<a href="instalaciones.html" class="facility">' + img(f.file,f.name + ' en el hotel') + '<h3>' + f.name + '</h3></a>';}).join('') + '</div></div></section>' +
      '<section class="section alt"><div class="wrap">' + sectionHeader("Descansa en Colchagua","Nuestras habitaciones","Cada espacio ha sido preparado para ofrecer comodidad y una atmósfera campestre de época.") + '<div class="room-grid">' + rooms.map(roomCard).join('') + '</div></div></section>' +
      '<section class="section"><div class="wrap">' + sectionHeader("Descubre Santa Cruz","Sitios de interés","Recorre el entorno, sus museos, su gastronomía y sus viñas.") + '<div class="interest-grid"><div class="interest"><span aria-hidden="true">⌂</span><strong>Museos</strong><p class="muted">Historia y patrimonio local</p></div><div class="interest"><span aria-hidden="true">♨</span><strong>Restaurantes cercanos</strong><p class="muted">Gastronomía de la zona</p></div><div class="interest"><span aria-hidden="true">♧</span><strong>Tours y viñas</strong><p class="muted">Vive el Valle de Colchagua</p></div></div></div></section>' +
      cta();
  }
  function renderRooms(){
    return banner("Habitaciones") + '<section class="section"><div class="wrap">' + sectionHeader("Descanso y tradición","Nuestras habitaciones","Habitaciones inspiradas en las antiguas casonas chilenas y pensadas para una estadía confortable.") + '<div class="room-grid">' + rooms.map(roomCard).join('') + '</div></div></section>' + cta();
  }
  function renderRoom(room){
    var amenities = [room.capacity,room.beds,"Baño privado","Internet Wi-Fi","Televisión por cable","Aire acondicionado","Mini bar"];
    var other = rooms.filter(function(r){return r.slug !== room.slug;});
    return banner(room.name,"<a href='habitaciones.html'>Habitaciones</a> / " + room.name) +
      '<section class="section"><div class="wrap room-detail"><div class="room-images">' + room.photos.map(function(f,i){return img(f,room.name + ' fotografía ' + (i+1),"zoomable");}).join('') + '</div><div><span class="kicker">Hotel Vendimia Boutique</span><h2>' + room.name + '</h2><p class="muted">' + room.full + '</p><h3>Nuestros servicios</h3><ul class="amenities">' + amenities.map(function(a){return '<li>' + a + '</li>';}).join('') + '</ul>' + linkBtn("Consultar esta habitación", room.name) + '<p style="margin-top:18px" class="muted">El motor de reservas en línea se incorporará después de validar la integración con el nuevo channel manager.</p></div></div></section>' +
      '<section class="section alt"><div class="wrap">' + sectionHeader("Descubre más","Otras habitaciones","") + '<div class="room-grid">' + other.map(roomCard).join('') + '</div></div></section>';
  }
  function renderFacilities(){
    return banner("Instalaciones") + '<section class="section"><div class="wrap">' + sectionHeader("Espacios para disfrutar","Nuestras instalaciones","Conoce los distintos rincones de Hotel Vendimia Boutique Premium.") + '<div class="facilities">' + facilities.map(function(f){return '<div class="facility">' + img(f.file,f.name + ' del Hotel Vendimia Boutique') + '<h3>' + f.name + '</h3></div>';}).join('') + '</div></div></section>' + cta();
  }
  function renderGallery(){
    var photos=["slider-1.jpg","slider-2.jpg","img-galeria011.jpg","img-galeria015.jpg","img-galeria016.jpg","img-galeria020.jpg","img-galeria08.jpg","img-instalaciones02.jpg","img-instalaciones05.jpg","img-habitacion-doble01.jpg","img-habitacion-doble-superior01.jpg","img-habitacion-junior-suite01.jpg"];
    return banner("Galería") + '<section class="section"><div class="wrap">' + sectionHeader("Momentos Vendimia","Galería fotográfica","Una mirada a nuestras habitaciones y espacios de estilo colonial.") + '<div class="gallery">' + photos.map(function(f,i){return img(f,"Fotografía " + (i+1) + " de Hotel Vendimia Boutique","zoomable");}).join('') + '</div></div></section>';
  }
  function renderPromos(){
    var promo=["Promoción especial","Disfrute en familia","Último minuto","Escapada romántica","Plan fin de semana","Estadía larga"];
    return banner("Promociones") + '<section class="section"><div class="wrap">' + sectionHeader("Oportunidades para viajar","Nuestras promociones","Consúltanos para conocer las condiciones y disponibilidad de cada promoción.") + '<div class="promos">' + promo.map(function(p){return '<article class="promo"><span class="kicker">Hotel Vendimia Boutique</span><h3>' + p + '</h3><p>Solicita información actualizada sobre esta alternativa de alojamiento.</p><a class="text-link" href="' + inquiry(p) + '" target="_blank" rel="noopener noreferrer">Consultar promoción →</a></article>';}).join('') + '</div><p class="notice" style="margin-top:30px">Las tarifas y vigencias de promociones se confirmarán directamente con el hotel. No se publican valores sin verificación.</p></div></section>';
  }
  function renderContact(){
    return banner("Contacto") + '<section class="section"><div class="wrap">' + sectionHeader("Estamos para ayudarte","Contáctanos","Estaremos encantados de responder tus consultas.") + '<div class="contact-layout"><div><h3>Formulario de contacto</h3><form name="contacto-boutique" method="POST" action="/gracias.html" data-netlify="true" netlify-honeypot="bot-field"><input type="hidden" name="form-name" value="contacto-boutique"><p class="hide"><label>No completar <input name="bot-field"></label></p><label class="field"><span>Nombre</span><input name="nombre" autocomplete="name" required maxlength="100"></label><label class="field"><span>Correo electrónico</span><input name="email" type="email" autocomplete="email" required maxlength="160"></label><label class="field"><span>Asunto</span><input name="asunto" required maxlength="160"></label><label class="field"><span>Mensaje</span><textarea name="mensaje" required maxlength="3000"></textarea></label><button class="btn" type="submit">Enviar consulta</button></form><p class="muted" style="font-size:.82rem">Este formulario requiere habilitar y verificar Netlify Forms antes de recibir consultas reales.</p></div><div><h3>Información de contacto</h3><p>¿Tienes una consulta sobre habitaciones o disponibilidad? Comunícate con nuestro equipo.</p><div class="contact-block"><h4>Dirección</h4><p>' + address + '</p></div><div class="contact-block"><h4>Correo electrónico</h4><p><a href="mailto:' + contact + '">' + contact + '</a></p></div><div class="contact-block"><h4>Teléfono</h4><p><a href="tel:+56722822464">' + phone + '</a></p></div><div class="contact-block"><h4>WhatsApp</h4><p><a href="' + inquiry("") + '" target="_blank" rel="noopener noreferrer">+56 9 9449 2225</a></p></div><h3>Ubicación</h3><a class="text-link" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&query=Ismael+Valdes+92+Santa+Cruz+Chile">Ver ubicación en Google Maps →</a></div></div></div></section>';
  }
  function cta(){return '<section class="cta-band"><div class="wrap"><span class="eyebrow">Hotel Vendimia Boutique Premium</span><h2>Te esperamos en Santa Cruz</h2><p>Vive una estadía con identidad y hospitalidad colchagüina.</p>' + linkBtn("Consultar disponibilidad", "", "btn-light") + '</div></section>';}
  function renderThanks(){return banner("Gracias por escribirnos") + '<section class="section"><div class="wrap center"><h2>Consulta enviada</h2><p>Gracias por contactar a Hotel Vendimia Boutique Premium.</p><p><a class="btn" href="index.html">Volver al inicio</a></p></div></section>';}
  var routes = {"":"home","index.html":"home","habitaciones.html":"rooms","habitacion-doble.html":"double","habitacion-doble-superior.html":"superior","habitacion-junior-suite.html":"suite","instalaciones.html":"facilities","galeria.html":"gallery","promociones.html":"promos","contactos.html":"contact","gracias.html":"thanks"};
  function layoutHeader(page){
    var nav = [["Inicio","index.html"],["Habitaciones","habitaciones.html"],["Instalaciones","instalaciones.html"],["Galería","galeria.html"],["Promociones","promociones.html"],["Contacto","contactos.html"]];
    return '<div class="top-strip"><div class="wrap"><span><a href="tel:+56722822464">' + phone + '</a> &nbsp; · &nbsp; <a href="mailto:' + contact + '">' + contact + '</a></span><span>Santa Cruz · Valle de Colchagua, Chile</span></div></div><header class="main-header"><div class="wrap nav-wrap"><a class="brand" href="index.html" aria-label="Hotel Vendimia Boutique — Inicio"><span class="brand-symbol">V</span><span class="brand-copy"><strong>Vendimia</strong><small>Boutique Premium</small></span></a><button class="menu-toggle" aria-label="Abrir menú" aria-expanded="false" aria-controls="primary-nav">☰</button><nav class="nav" id="primary-nav" aria-label="Navegación principal">' + nav.map(function(n){return '<a href="' + n[1] + '" class="' + (page === n[1] || (page.indexOf("habitacion-") === 0 && n[1] === "habitaciones.html") ? "active" : "") + '">' + n[0] + '</a>';}).join('') + '<a class="btn btn-sm" href="' + inquiry("") + '" target="_blank" rel="noopener noreferrer">Consultar reserva</a></nav></div></header>';
  }
  function layoutFooter(){
    return '<footer class="footer"><div class="wrap"><div class="footer-grid"><div><h3>Hotel Vendimia Boutique Premium</h3><p>Un rincón de inspiración colonial a pasos del centro de Santa Cruz, en el Valle de Colchagua.</p><p>' + address + '</p></div><div><h3>Enlaces</h3><ul><li><a href="habitaciones.html">Habitaciones</a></li><li><a href="instalaciones.html">Instalaciones</a></li><li><a href="galeria.html">Galería</a></li><li><a href="promociones.html">Promociones</a></li></ul></div><div><h3>Contacto</h3><p><a href="tel:+56722822464">' + phone + '</a></p><p><a href="mailto:' + contact + '">' + contact + '</a></p><p><a href="' + inquiry("") + '" target="_blank" rel="noopener noreferrer">WhatsApp +56 9 9449 2225</a></p></div></div><div class="footer-bottom">© ' + new Date().getFullYear() + ' Hotel Vendimia Boutique Premium · Santa Cruz, Chile</div></div></footer><a class="float-wa" href="' + inquiry("") + '" title="Consultar por WhatsApp" aria-label="Consultar por WhatsApp" target="_blank" rel="noopener noreferrer">W</a>';
  }
  function makeLightbox(file,alt){
    var layer=document.createElement("div");layer.className="lightbox";layer.setAttribute("role","dialog");layer.setAttribute("aria-modal","true");layer.setAttribute("aria-label","Fotografía ampliada");
    var photo=document.createElement("img");photo.src=file;photo.alt=alt||"Fotografía del hotel";
    var close=document.createElement("button");close.type="button";close.textContent="×";close.setAttribute("aria-label","Cerrar foto");
    layer.appendChild(photo);layer.appendChild(close);document.body.appendChild(layer);close.focus();
    var remove=function(){layer.remove();document.removeEventListener("keydown",esc);};
    var esc=function(e){if(e.key==="Escape")remove();};
    layer.addEventListener("click",function(e){if(e.target!==photo)remove();});
    document.addEventListener("keydown",esc);
  }
  function main(){
    var path=location.pathname.split("/").pop()||"index.html";
    var type=routes[path]||"home";var content;
    if(type==="home")content=renderHome();
    if(type==="rooms")content=renderRooms();
    if(type==="double")content=renderRoom(rooms[0]);
    if(type==="superior")content=renderRoom(rooms[1]);
    if(type==="suite")content=renderRoom(rooms[2]);
    if(type==="facilities")content=renderFacilities();
    if(type==="gallery")content=renderGallery();
    if(type==="promos")content=renderPromos();
    if(type==="contact")content=renderContact();
    if(type==="thanks")content=renderThanks();
    document.getElementById("site-header").innerHTML=layoutHeader(path);
    document.getElementById("content").innerHTML=content;
    document.getElementById("site-footer").innerHTML=layoutFooter();
    var menu=document.querySelector(".menu-toggle");var nav=document.querySelector(".nav");
    menu.addEventListener("click",function(){var opened=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(opened));menu.textContent=opened?"×":"☰";});
    document.querySelectorAll(".zoomable").forEach(function(im){im.addEventListener("click",function(){makeLightbox(im.src,im.alt);});im.setAttribute("tabindex","0");im.setAttribute("role","button");im.setAttribute("aria-label","Ampliar fotografía");im.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();makeLightbox(im.src,im.alt);}});});
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",main);else main();
})();