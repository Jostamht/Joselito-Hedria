# Invitación de boda — Joselito y Hedria 🌿

Sitio estático para la boda del **1 de diciembre de 2026**. Inspiración botánica verde salvia, marfil y verde bosque, con sobre animado, cuenta regresiva, eventos, Zoom, QR de regalos, galería, música opcional y confirmación por WhatsApp.

## Publicar con GitHub Pages
1. En el repositorio, abre **Settings → Pages**.
2. En **Build and deployment**, selecciona **Deploy from a branch**.
3. Elige **main** y **/(root)**, y pulsa **Save**.
4. Abre la dirección que GitHub muestre. Habitualmente será https://jostamht.github.io/Boda-Prueba/ .

> La web NO está publicada automáticamente por subir el código: verifica que GitHub Pages esté activado.

## Editar datos
Abre **config.js** en GitHub y pulsa el lápiz para editar. Ahí puedes cambiar nombres, fecha/hora, ubicación general, lugares y enlaces de Maps, ID/enlace/contraseña de Zoom, vestimenta, número de WhatsApp, fotos, QR de regalos y música.

## Añadir fotos y QR
1. Sube archivos JPG, PNG o WebP a la carpeta **assets/**.
2. En **config.js**, reemplaza el nombre de muestra por la ruta, por ejemplo `"assets/nuestra-foto.jpg"`.
3. Para los regalos, reemplaza `qrRegalos: "assets/qr-pendiente.svg"` por `qrRegalos: "assets/qr-banco.png"`.

Los SVG incluidos son imágenes de relleno; puedes mantenerlos durante las pruebas.

## Música
Sube el audio a `assets/` y configura `musica: "assets/nuestra-cancion.mp3"`. El botón se activa automáticamente. La música solo se inicia al tocar el control, ya que los navegadores suelen bloquear la reproducción automática.

## Notas
- El contador finaliza el **1 de diciembre de 2026, 10:00 a. m. (UTC-04:00)**.
- El año **2026** es provisional hasta confirmar la fecha definitiva.
- Se dejan «Insertar ubicación» y los datos de Zoom vacíos deliberadamente; no se publican enlaces ficticios.
- El RSVP abre WhatsApp y prellena un mensaje; **no almacena datos personales** en el sitio.
- Para conservar la privacidad del Zoom, añade los datos cuando quieras compartirlos con los invitados. GitHub Pages y este repositorio son públicos.
