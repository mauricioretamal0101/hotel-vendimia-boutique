# Hotel Vendimia Boutique Premium

Primera reconstrucción funcional del sitio público de [Hotel Vendimia Boutique](https://www.hotelvendimia.cl/) (Santa Cruz, Valle de Colchagua, Chile).

## Estado: prototipo navegable — NO reemplazar aún el sitio oficial

Incluye:
- Página principal `index.html`
- Listado y detalles de las tres categorías de habitaciones
- Instalaciones, galería, promociones y contacto
- Estilos adaptables a celular y escritorio (`styles.css`)
- Navegación y contenido (`site.js`)
- Formulario preparado para Netlify Forms, todavía por probar
- Botones de consulta vía WhatsApp

## Para publicar la versión de prueba en Netlify

1. Importar el repositorio GitHub `mauricioretamal0101/hotel-vendimia-boutique`.
2. Seleccionar rama `main`.
3. En configuración de compilación: **Build command vacío**, directorio de publicación `.` (raíz). También está definido en `netlify.toml`.
4. Desplegar en el subdominio temporal `*.netlify.app`.
5. Revisar móvil y escritorio, imágenes, enlaces y comportamiento del formulario.
6. Compartir la dirección temporal para una revisión visual antes de conectar cualquier dominio.

## Pendientes imprescindibles

- **Fotografías:** por ahora se muestran imágenes enlazadas al alojamiento anterior, `https://www.hotelvendimia.cl/images/...`. Hay que obtener originales y alojarlas en este proyecto **antes de cancelar el proveedor web anterior**. De lo contrario, desaparecerían al migrar.
- **Reservas:** no se utiliza el enlace antiguo de Reservatio. Por ahora la consulta va a WhatsApp. Añadir el motor de reservas del nuevo channel manager solo cuando esté confirmada su URL de cada hotel.
- **Formulario:** confirmar que Netlify Forms lo haya detectado y hacer un envío de prueba. Si no está configurado, se recomienda usar temporalmente solo teléfono, WhatsApp y correo.
- **Promociones y políticas:** revisar condiciones vigentes antes de presentar tarifas u ofertas públicas.
- **Diseño:** esta es una primera reconstrucción basada en el contenido disponible públicamente, no una copia visual exacta. Revisar tipografías, disposición, logos y fotos con el material original.
- **SEO:** está activado `noindex` en HTML y en `netlify.toml`, y `robots.txt` bloquea rastreadores durante la prueba. Eliminar estas restricciones al traspasar el dominio oficial.
- **Dominio/correo:** no cambiar DNS del dominio `hotelvendimia.cl` hasta validar la web, la conexión de reservas y registrar previamente MX, SPF, DKIM y DMARC.

Los dominios y correos oficiales siguen fuera de este repositorio. No guardar contraseñas, datos de huéspedes ni claves API en GitHub público.

## Recordatorio pendiente para próxima revisión (solicitado por el usuario)

- Solicitar el **logo definitivo de Hotel Vendimia Boutique Premium**; el usuario lo enviará en la próxima sesión o más adelante.
- Corregir las fotografías cruzadas: aparece una piscina del Parador en el Boutique y una piscina del Boutique etiquetada como estacionamiento.
- Revisar asignación de cada fotografía e importar originales de ambos hoteles.
