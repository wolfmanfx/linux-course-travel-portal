const content = window.COURSE_CONTENT;
const slideImage = document.querySelector("#currentSlide");
const slidePosition = document.querySelector("#slidePosition");
const notes = document.querySelector("#speakerNotes");
const thumbnailStrip = document.querySelector("#thumbnailStrip");
let currentSlide = 1;

function showSlide(number, updateHash = true) {
  currentSlide = Math.min(content.slides.length, Math.max(1, number));
  const slide = content.slides[currentSlide - 1];
  slideImage.src = slide.image;
  slideImage.alt = `Course slide ${currentSlide}: ${slide.title || "Linux Foundations"}`;
  slidePosition.textContent = `Slide ${currentSlide} of ${content.slides.length}`;
  notes.textContent = slide.notes || "No speaker notes for this slide.";
  document.querySelectorAll(".thumbnail").forEach((button, index) => {
    const active = index + 1 === currentSlide;
    button.classList.toggle("active", active);
    button.setAttribute("aria-current", active ? "true" : "false");
    if (active) button.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  });
  if (updateHash) history.replaceState(null, "", `#slide-${currentSlide}`);
}

content.slides.forEach((slide, index) => {
  const button = document.createElement("button");
  button.className = "thumbnail";
  button.type = "button";
  button.setAttribute("aria-label", `Show slide ${index + 1}`);
  button.innerHTML = `<img src="${slide.image}" alt="" loading="lazy" width="160" height="90">`;
  button.addEventListener("click", () => showSlide(index + 1));
  thumbnailStrip.append(button);
});

document.querySelector("#previousSlide").addEventListener("click", () => showSlide(currentSlide - 1));
document.querySelector("#nextSlide").addEventListener("click", () => showSlide(currentSlide + 1));
document.querySelector("#fullscreenSlide").addEventListener("click", () => slideImage.requestFullscreen?.());
document.addEventListener("keydown", event => {
  if (event.key === "ArrowLeft") showSlide(currentSlide - 1);
  if (event.key === "ArrowRight") showSlide(currentSlide + 1);
});

let touchStart = 0;
slideImage.addEventListener("touchstart", event => { touchStart = event.changedTouches[0].clientX; }, { passive: true });
slideImage.addEventListener("touchend", event => {
  const distance = event.changedTouches[0].clientX - touchStart;
  if (Math.abs(distance) > 45) showSlide(currentSlide + (distance < 0 ? 1 : -1));
}, { passive: true });

const dialog = document.querySelector("#videoDialog");
const dialogBody = document.querySelector("#videoDialogBody");
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function renderWalkthrough(video, language, resumeAt = 0, resumePlayback = false) {
  const variant = video.languages[language];
  const media = variant.ready
    ? `<video controls preload="metadata"><source src="${variant.video}" type="video/mp4"><track kind="captions" src="${variant.captions}" srclang="${language}" label="${variant.label}" default></video>`
    : `<p><strong>The browser-terminal recording is not packaged yet.</strong> The complete generated narration is available.</p><audio controls preload="metadata" src="${variant.audio}"></audio>`;
  dialogBody.innerHTML = `<article class="dialog-content">
    <p class="eyebrow">Lab ${video.number}</p>
    <h2>${video.title}</h2>
    <div class="language-switch" role="group" aria-label="Narration language">
      <button type="button" data-language="en" aria-pressed="${language === "en"}">English</button>
      <button type="button" data-language="de" aria-pressed="${language === "de"}">Deutsch</button>
    </div>
    ${media}
    <div class="walkthrough-links"><a href="${variant.captionsSrt}" download>Download ${variant.label} SRT</a>${video.masterReady ? `<a href="${video.master}" download>Download bilingual master MP4</a>` : ""}</div>
    <h3>${variant.label} transcript</h3>
    <pre>${escapeHtml(variant.transcript)}</pre>
  </article>`;

  const mediaElement = dialogBody.querySelector("video, audio");
  if (resumeAt > 0) mediaElement.addEventListener("loadedmetadata", () => {
    mediaElement.currentTime = Math.min(resumeAt, mediaElement.duration || resumeAt);
    if (resumePlayback) mediaElement.play().catch(() => {});
  }, { once: true });
  dialogBody.querySelectorAll("[data-language]").forEach(button => button.addEventListener("click", () => {
    const current = dialogBody.querySelector("video, audio");
    renderWalkthrough(video, button.dataset.language, current?.currentTime || 0, current ? !current.paused : false);
  }));
}

function openWalkthrough(video) {
  renderWalkthrough(video, "en");
  dialog.showModal();
}

const videoGrid = document.querySelector("#videoGrid");
content.videos.forEach(video => {
  const article = document.createElement("article");
  article.className = "video-card";
  article.innerHTML = `
    <div class="video-cover" data-lab="LAB ${video.number}"><strong>${video.shortTitle}</strong><button class="play-button" type="button" aria-label="Open ${video.title}">${video.ready ? "▶" : "♫"}</button></div>
    <div class="video-body"><h3>${video.title}</h3><p>${video.description}</p>${video.ready ? "" : `<audio controls preload="none" src="${video.languages.en.audio}"></audio>`}<span class="status ${video.ready ? "ready" : ""}">${video.ready ? "EN/DE video ready" : "EN/DE narration ready"}</span></div>`;
  article.querySelector(".play-button").addEventListener("click", () => openWalkthrough(video));
  videoGrid.append(article);
});

document.querySelector("#slideCount").textContent = content.slides.length;
const requestedSlide = Number(location.hash.match(/^#slide-(\d+)$/)?.[1] || 1);
showSlide(requestedSlide, false);

let deferredInstall;
const installButton = document.querySelector("#installPortal");
window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  deferredInstall = event;
  installButton.hidden = false;
});
installButton.addEventListener("click", async () => {
  await deferredInstall?.prompt();
  deferredInstall = null;
  installButton.hidden = true;
});

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  const replacingCachedPortal = Boolean(navigator.serviceWorker.controller);
  let reloadingForUpdate = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (!replacingCachedPortal || reloadingForUpdate) return;
    reloadingForUpdate = true;
    location.reload();
  });
  navigator.serviceWorker.register("service-worker.js", { updateViaCache: "none" })
    .then(registration => registration.update());
}
