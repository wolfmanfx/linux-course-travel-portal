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

function openWalkthrough(video) {
  const media = video.ready
    ? `<video controls preload="metadata"><source src="${video.video}" type="video/mp4"><track kind="captions" src="${video.captions}" srclang="en" label="English" default></video>`
    : `<p><strong>The real browser-terminal recording is waiting for a running Incus course seat.</strong> The complete generated English narration is available now.</p><audio controls preload="metadata" src="${video.audio}"></audio>`;
  dialogBody.innerHTML = `<article class="dialog-content"><p class="eyebrow">Lab ${video.number}</p><h2>${video.title}</h2>${media}<h3>English transcript</h3><pre>${video.transcript}</pre></article>`;
  dialog.showModal();
}

const videoGrid = document.querySelector("#videoGrid");
content.videos.forEach(video => {
  const article = document.createElement("article");
  article.className = "video-card";
  article.innerHTML = `
    <div class="video-cover" data-lab="LAB ${video.number}"><strong>${video.shortTitle}</strong><button class="play-button" type="button" aria-label="Open ${video.title}">${video.ready ? "▶" : "♫"}</button></div>
    <div class="video-body"><h3>${video.title}</h3><p>${video.description}</p>${video.ready ? "" : `<audio controls preload="none" src="${video.audio}"></audio>`}<span class="status ${video.ready ? "ready" : ""}">${video.ready ? "Video ready" : "Narration ready"}</span></div>`;
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
  navigator.serviceWorker.register("service-worker.js");
}
