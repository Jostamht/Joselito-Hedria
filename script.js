(() => {
  "use strict";
  const c = window.WEDDING_CONFIG || {};
  const el = id => document.getElementById(id);
  const setText = (id, text) => { if (el(id)) el(id).textContent = text; };
  const setImg = (id, src) => { if (el(id) && src) el(id).src = src; };
  const safeLink = url => /^https:\/\/[^\s]+$/i.test(url || "") ? url : "";

  setText("nameOne", c.nombres?.[0] || "Joselito");
  setText("nameTwo", c.nombres?.[1] || "Hedria");
  setText("generalLocation", c.lugarGeneral || "Algún lugar del mundo");
  setText("speechLocation", c.discurso?.lugar || "Insertar ubicación");
  setText("receptionLocation", c.recepcion?.lugar || "Insertar ubicación");
  setText("dressCode", c.vestimenta || "Formal");
  setText("zoomId", c.zoom?.id || "Insertar ID");
  setText("zoomPass", c.zoom?.contrasena || "Insertar contraseña");
  if (c.fechaTexto) {
    document.querySelectorAll(".hero-date").forEach(n => n.textContent = c.fechaTexto);
  }
  const photos = c.fotos || {};
  setImg("mainPhoto", photos.principal);
  setImg("galleryOne", photos.galeria1);
  setImg("galleryTwo", photos.galeria2);
  setImg("galleryThree", photos.galeria3);
  setImg("giftQr", photos.qrRegalos);
  const mapLinks = [
    ["speechMap", "speechMapPending", c.discurso?.maps],
    ["receptionMap", "receptionMapPending", c.recepcion?.maps]
  ];
  mapLinks.forEach(([linkId, placeholderId, url]) => {
    const valid = safeLink(url);
    if (valid) { el(linkId).href = valid; el(linkId).hidden = false; el(placeholderId).hidden = true; }
  });
  const zoom = safeLink(c.zoom?.enlace);
  if (zoom) { el("zoomLink").href = zoom; el("zoomLink").hidden = false; el("zoomPending").hidden = true; }

  const rsvpText = "¡Hola! Quiero confirmar mi asistencia a la boda de " +
    (c.nombres?.[0] || "Joselito") + " y " + (c.nombres?.[1] || "Hedria") + ".%0A" +
    "Mi nombre es: %0AAsistiremos: ";
  const phone = String(c.whatsapp || "59163452176").replace(/\D/g, "");
  el("rsvpLink").href = "https://wa.me/" + phone + "?text=" + encodeURIComponent(decodeURIComponent(rsvpText));
  const target = new Date(c.fecha || "2026-12-01T10:00:00-04:00").getTime();
  const pad = x => String(x).padStart(2, "0");
  function updateCountdown() {
    const ms = target - Date.now();
    if (!Number.isFinite(ms)) return;
    const delta = Math.max(0, Math.floor(ms / 1000));
    setText("days", String(Math.floor(delta / 86400)).padStart(2, "0"));
    setText("hours", pad(Math.floor((delta % 86400) / 3600)));
    setText("minutes", pad(Math.floor((delta % 3600) / 60)));
    setText("seconds", pad(delta % 60));
    el("countdownDone").hidden = ms > 0;
    el("countdown").hidden = ms <= 0;
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);

  const overlay = el("envelopeScreen");
  const open = el("openInvitation");
  function revealSite() {
    if (overlay.classList.contains("is-open")) return;
    overlay.classList.add("is-open");
    document.body.classList.remove("invitation-locked");
    open.disabled = true;
    setTimeout(() => { overlay.hidden = true; el("invitation").removeAttribute("aria-hidden"); }, 1300);
    setTimeout(() => { const first = document.querySelector(".topbar-logo"); first?.focus?.({preventScroll:true}); }, 1350);
  }
  el("invitation").setAttribute("aria-hidden", "true");
  open.addEventListener("click", revealSite);
  const music = el("weddingAudio");
  const musicButton = el("musicToggle");
  const musicSrc = c.musica || "";
  if (musicSrc) {
    music.src = musicSrc;
    musicButton.disabled = false;
    musicButton.setAttribute("aria-label", "Reproducir música");
    setText("musicLabel", "Activar música");
    musicButton.addEventListener("click", async () => {
      if (music.paused) {
        try { await music.play(); musicButton.classList.add("music-playing"); setText("musicLabel", "Pausar música"); musicButton.setAttribute("aria-label", "Pausar música"); }
        catch { setText("musicLabel", "No se pudo reproducir"); }
      } else { music.pause(); musicButton.classList.remove("music-playing"); setText("musicLabel", "Activar música"); musicButton.setAttribute("aria-label", "Reproducir música"); }
    });
  }
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } });
    }, {threshold: .1, rootMargin:"0px 0px -30px 0px"});
    document.querySelectorAll(".reveal").forEach(n => observer.observe(n));
  } else document.querySelectorAll(".reveal").forEach(n => n.classList.add("visible"));
})();