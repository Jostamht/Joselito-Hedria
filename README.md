# 💍 Joselito & Hedria · ¡Nos casamos! 🌿

*«El cariño no conoce distancias.»*

**👉 [jostamht.github.io/Joselito-Hedria](https://jostamht.github.io/Joselito-Hedria/)**

La invitación digital de nuestra boda: una web botánica en verde salvia y marfil que se abre como un sobre con sello de cera, para que nuestra gente nos acompañe **desde donde esté**.

| | |
|---|---|
| 📅 **Fecha** | Domingo **13 de diciembre de 2026** |
| 🇧🇴 **Hora en Bolivia** | 2:30 p. m. |
| 🇧🇷 **Hora en Brasil** (Brasilia) | 3:30 p. m. |
| 💻 **Modalidad** | Transmisión en vivo por Zoom |

---

## ✉️ Qué se encuentra el invitado

La invitación se recorre de arriba abajo:

1. **El sobre.** Antes de ver nada, aparece un sobre con monograma **J & H** y un sello de cera. Se toca el sello y se abre. Si hay música configurada, empieza a sonar en ese momento.
2. **Portada.** «¡Nos casamos!», los nombres, y una frase para quien quiera acompañarnos.
3. **Reserva la fecha.** Diciembre, 13, domingo, con una invitación a compartir el día «sin importar la distancia».
4. **Cuenta regresiva.** Días, horas, minutos y segundos hasta el gran momento. Cuando llega el día, cambia a «¡Hoy es nuestro gran día!».
5. **Mateo 19:6.** El versículo que nos acompaña.
6. **Nuestra foto.** «Acompáñanos desde donde estés».
7. **Zoom.** Las horas de Bolivia y Brasil lado a lado, y el aviso de que el enlace se enviará días antes.
8. **Un detalle con cariño.** Un código QR de depósito para quien quiera hacernos un regalo; se toca para ampliarlo.
9. **Cierre.** «Gracias por ser parte de nuestra historia».

Además, un botón de **música** siempre visible arriba a la derecha, para activarla o pausarla cuando se quiera.

---

## 🎨 Cómo está hecha

HTML, CSS y JavaScript puros, sin frameworks ni compilación. Para verla en una computadora, abre `index.html` en el navegador.

```
Joselito-Hedria/
├── index.html     → el contenido y la vista previa al compartir
├── styles.css     → paleta salvia y marfil
├── config.js      → los datos de la boda (lo único que se edita)
├── script.js      → sobre, cuenta regresiva, música y animaciones
├── assets/        → foto, QR, música, ilustración botánica
└── .github/       → automatizaciones (ver abajo)
```

- **Tipografías:** Cormorant Garamond (títulos), Great Vibes (caligrafía) y DM Sans (texto).
- **Cuenta regresiva:** funciona con la hora de Bolivia (`2026-12-13T14:30:00-04:00`), así que marca lo mismo para todos sin importar dónde estén.
- **Accesibilidad:** el sobre se anuncia como diálogo, las decoraciones se ocultan a los lectores de pantalla y el temporizador está etiquetado.

---

## ⚙️ Personalización (`config.js`)

Todo lo que cambia está en este archivo, y no hace falta tocar nada más:

```js
window.WEDDING_CONFIG = {
  nombres: ["Joselito", "Hedria"],
  fecha: "2026-12-13T14:30:00-04:00",
  zoom: { enlace: "" },                          // ← pendiente
  fotos: {
    principal: "assets/hedria-joselito.webp",    // foto de la pareja
    qrRegalos: "assets/qr-banco-union.jpg"       // QR de regalos
  },
  qrConfirmado: true,
  musica: "assets/musica.mp3"
};
```

### Estado actual

| Elemento | Estado |
|---|---|
| Nombres y fecha | ✅ Listos |
| Foto de la pareja | ✅ Incorporada |
| Música | ✅ `assets/musica.mp3` incluida en el repo |
| QR de regalos | ✅ Incorporado |
| **Enlace de Zoom** | ⏳ **Pendiente** |

### Cuando tengamos el enlace de Zoom

Hay dos opciones:

- **Mostrarlo en la web:** pega la URL en `zoom.enlace` (tiene que empezar con `https://`). Aparecerá un botón **«Ingresar a la transmisión»** y desaparecerá el aviso de «enlace disponible próximamente».
- **Enviarlo en privado:** deja `enlace` vacío y mándalo por WhatsApp a los invitados. Es la opción más segura, porque esta web es pública.

### Cambiar la foto o el QR
Sube la imagen nueva a `assets/` y cambia la ruta en `config.js`. Si se reemplaza `assets/hedria-joselito.webp`, la vista previa para WhatsApp se regenera sola (ver abajo).

---

## 🤖 Automatizaciones

- **`crear-miniatura.yml`** genera `assets/portada-whatsapp.jpg` (1200×630) a partir de la foto de la pareja, cada vez que esa foto cambia. Es la imagen que sale al compartir el enlace.
- **`importar-musica.yml`** descargó el MP3 desde un enlace externo para guardarlo dentro del repo. Ya cumplió su trabajo, porque `assets/musica.mp3` existe; solo vuelve a correr si se ejecuta a mano.

### Al compartir por WhatsApp
Al pegar el enlace aparece el título «💍 ¡Nos casamos! | Joselito y Hedria», la fecha y la foto de portada. Si WhatsApp sigue mostrando una vista previa vieja, agrega un parámetro inocuo al enlace (por ejemplo `?v=2`) para que lo vuelva a leer.

---

## 🌐 Publicación

La web se sirve con **GitHub Pages** desde `main` (carpeta raíz). Para revisar o cambiar esa configuración: [Settings → Pages](https://github.com/Jostamht/Joselito-Hedria/settings/pages).

Cada cambio que se sube a `main` se publica solo, normalmente en uno o dos minutos.

---

## ⚠️ Importante

- **El repositorio y la web son públicos.** Cualquiera con el enlace puede ver todo lo que hay aquí, incluido el QR de regalos.
- No subas IDs ni contraseñas de Zoom, ni datos personales sensibles, al código.
- Si el QR cambia o se prefiere no exponerlo, se puede retirar de `index.html` (sección «Un detalle con cariño») y de `assets/` en cualquier momento.

---

*Una invitación hecha con amor.* 🌿
*13 · diciembre · 2026*
