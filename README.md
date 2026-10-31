# Joselito & Hedria · ¡Nos casamos! 🌿

**[jostamht.github.io/Joselito-Hedria](https://jostamht.github.io/Joselito-Hedria/)**

Esta es la invitación a nuestra boda. Queríamos que llegara a todos, estén donde estén, así que la hicimos en forma de página web: un sobre que se abre con un sello de cera, en verde salvia y marfil.

- **Fecha:** domingo 13 de diciembre de 2026
- **Hora en Bolivia:** 2:30 p. m.
- **Hora en Brasil** (Brasilia): 3:30 p. m.
- **Modalidad:** transmisión en vivo por Zoom

> «Así que ya no son dos, sino una sola carne. Por lo tanto, lo que Dios ha unido, que no lo separe ningún hombre». — Mateo 19:6

## Qué hay en la invitación

1. **El sobre.** Al tocar el sello con nuestras iniciales, se abre la invitación y empieza a sonar la música.
2. **Portada.** «¡Nos casamos!» y nuestros nombres.
3. **Reserva la fecha.** El día, escrito en grande.
4. **Cuenta regresiva.** Los días, horas, minutos y segundos que faltan.
5. **Mateo 19:6.** El versículo que nos acompaña.
6. **Nuestra foto.** «Acompáñanos desde donde estés».
7. **Zoom.** Las horas de Bolivia y Brasil, y el aviso de que el enlace llegará días antes.
8. **Un detalle con cariño.** Un código QR para quien quiera hacernos un regalo.
9. **Cierre.** «Gracias por ser parte de nuestra historia».

Arriba a la derecha hay un botón para activar o pausar la música.

## Cómo está hecha

Es una página estática en HTML, CSS y JavaScript, sin frameworks ni compilación. Se puede abrir `index.html` directamente en el navegador.

```
├── index.html    contenido y vista previa al compartir
├── styles.css    diseño
├── config.js     datos de la boda
├── script.js     sobre, cuenta regresiva, música y animaciones
├── assets/       foto, QR, música e ilustración botánica
└── .github/      automatizaciones
```

Las tipografías son Cormorant Garamond, Great Vibes y DM Sans. La cuenta regresiva usa la hora de Bolivia, así que marca lo mismo en cualquier país.

## Configuración

Los datos que pueden cambiar están en `config.js`:

```js
window.WEDDING_CONFIG = {
  nombres: ["Joselito", "Hedria"],
  fecha: "2026-12-13T14:30:00-04:00",
  zoom: { enlace: "" },
  fotos: {
    principal: "assets/hedria-joselito.webp",
    qrRegalos: "assets/qr-banco-union.jpg"
  },
  qrConfirmado: true,
  musica: "assets/musica.mp3"
};
```

**Enlace de Zoom.** Todavía no está publicado. Cuando esté listo, puede ponerse en `zoom.enlace` (debe empezar con `https://`), y aparecerá el botón «Ingresar a la transmisión». También puede dejarse vacío y enviarse por mensaje privado a cada invitado.

**Foto y QR.** Para cambiarlos se sube la imagen nueva a `assets/` y se actualiza la ruta en `config.js`.

## Vista previa al compartir

Al pegar el enlace en WhatsApp o redes aparece «💍 ¡Nos casamos! | Joselito y Hedria», con la fecha y nuestra foto. La imagen (`assets/portada-whatsapp.jpg`, 1200×630) la genera sola el workflow `crear-miniatura.yml` cada vez que cambia la foto de la pareja. Si WhatsApp muestra una vista previa antigua, se agrega un parámetro al enlace, por ejemplo `?v=2`.

El workflow `importar-musica.yml` sirvió para guardar la música dentro del repositorio y ya no hace falta.

## Publicación

La web se publica con GitHub Pages desde la rama `main`. Cada cambio se actualiza solo, normalmente en uno o dos minutos.

El repositorio y la página son públicos, por lo que no se suben contraseñas de Zoom ni datos personales.

---

*13 · diciembre · 2026*
*Con cariño, Joselito y Hedria* 🌿
