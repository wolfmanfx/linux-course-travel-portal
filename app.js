const content = window.COURSE_CONTENT;
const slideImage = document.querySelector("#currentSlide");
const slidePosition = document.querySelector("#slidePosition");
const notes = document.querySelector("#speakerNotes");
const slideNarration = document.querySelector("#slideNarration");
const slideNarrationMeta = document.querySelector("#slideNarrationMeta");
const thumbnailStrip = document.querySelector("#thumbnailStrip");
let currentSlide = 1;

function showSlide(number, updateHash = true) {
  currentSlide = Math.min(content.slides.length, Math.max(1, number));
  const slide = content.slides[currentSlide - 1];
  slideImage.src = slide.image;
  slideImage.alt = `Course slide ${currentSlide}: ${slide.title || "Linux Foundations"}`;
  slidePosition.textContent = `Slide ${currentSlide} of ${content.slides.length}`;
  notes.textContent = slide.notes || "No speaker notes for this slide.";
  const narration = slide.narration || {};
  const planned = narration.plannedTiming ? ` · planned ${narration.plannedTiming}` : "";
  if (narration.audioUrl) {
    slideNarration.hidden = false;
    slideNarration.src = narration.audioUrl;
    slideNarration.load();
    slideNarrationMeta.textContent = `${formatDuration(narration.measuredDurationSeconds)} audio${planned}`;
  } else {
    slideNarration.pause();
    slideNarration.removeAttribute("src");
    slideNarration.load();
    slideNarration.hidden = true;
    slideNarrationMeta.textContent = `English narration refresh in progress${planned}`;
  }
  document.querySelectorAll(".thumbnail").forEach((button, index) => {
    const active = index + 1 === currentSlide;
    button.classList.toggle("active", active);
    button.setAttribute("aria-current", active ? "true" : "false");
    if (active && updateHash) button.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
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

function formatDuration(seconds) {
  const rounded = Math.round(Number(seconds));
  const minutes = Math.floor(rounded / 60);
  const remaining = rounded % 60;
  return `${minutes}:${String(remaining).padStart(2, "0")}`;
}

function formatMinutes(seconds) {
  return `${(Number(seconds) / 60).toFixed(1)} min`;
}

function renderWalkthrough(video) {
  const media = video.ready
    ? `<video controls preload="metadata"><source src="${video.video}" type="video/mp4"><track kind="captions" src="${video.captions}" srclang="en" label="English" default></video>`
    : `<p><strong>The matching browser-terminal recording is being regenerated.</strong> It will appear only after video, narration, captions, transcript, and checker evidence pass together.</p>${video.audio ? `<audio controls preload="metadata" src="${video.audio}"></audio>` : ""}`;
  dialogBody.innerHTML = `<article class="dialog-content">
    <p class="eyebrow">Lab ${video.number}</p>
    <h2>${video.title}</h2>
    ${media}
    ${video.ready ? `<div class="walkthrough-links"><a href="${video.captionsSrt}" download>Download English SRT</a><a href="${video.master}" download>Download English MP4</a></div>` : ""}
    <h3>English transcript</h3>
    <pre>${escapeHtml(video.transcript || "Transcript pending matched regeneration.")}</pre>
  </article>`;
}

function openWalkthrough(video) {
  renderWalkthrough(video);
  dialog.showModal();
}

const videoGrid = document.querySelector("#videoGrid");
content.videos.forEach(video => {
  const article = document.createElement("article");
  article.className = "video-card";
  article.innerHTML = `
    <div class="video-cover" data-lab="LAB ${video.number}"><strong>${video.shortTitle}</strong><button class="play-button" type="button" aria-label="Open ${video.title}">${video.ready ? "▶" : video.audio ? "♫" : "…"}</button></div>
    <div class="video-body"><h3>${video.title}</h3><p>${video.description}</p>${!video.ready && video.audio ? `<audio controls preload="none" src="${video.audio}"></audio>` : ""}<span class="status ${video.ready ? "ready" : ""}">${video.ready ? "English video ready" : "Matched regeneration pending"}</span></div>`;
  article.querySelector(".play-button").addEventListener("click", () => openWalkthrough(video));
  videoGrid.append(article);
});

document.querySelector("#slideCount").textContent = content.slides.length;
const timing = content.narration.timing;
const fullDeckNarration = document.querySelector("#fullDeckNarration");
if (content.narration.complete && content.narration.fullDeckAudio) {
  fullDeckNarration.src = content.narration.fullDeckAudio;
} else {
  fullDeckNarration.hidden = true;
  document.querySelector("#narrationLinks").hidden = true;
  document.querySelector("#timingGrid").hidden = true;
  document.querySelector("#narrationHeading").textContent = "Slide narration refresh";
}
document.querySelectorAll("[data-requires-narration]").forEach(link => {
  link.hidden = !content.narration.complete;
});
document.querySelector("#guidedTeachingPercent").textContent = `${timing.guidedTeachingPercent ?? 50}%`;
document.querySelector("#handsOnPracticePercent").textContent = `${timing.handsOnPracticePercent ?? 50}%`;
document.querySelector("#spokenNarrationMinutes").textContent = formatMinutes(timing.measuredSpokenAudioSeconds);
document.querySelector("#fullDeckDuration").textContent = formatMinutes(timing.fullDeckDurationSeconds);
document.querySelector("#timingExplanation").textContent = content.narration.complete
  ? timing.explanation
  : `The ${content.slides.length}-slide deck is available now. English narration is being regenerated.`;
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
