// Klangreise durch die Zeit – finale Web-App Logik
// Fokus: Fahrradleidenschaft sichtbar, sanfte Übergänge, klare Schrittanzeige

const stations = [
  {
    key: "welcome",
    title: "🎉 Happy Birthday !! 🎉",
    description:
      "Lieber Norbert, <br> Herzlich willkommen zu deiner ganz persönlichen Klangreise durch die Zeit! Mach es dir gemütlich und lass dich von den Klängen und Bildern inspirieren. Und hier die Reisetipps, die sich besonders lohnen, wenn du sie mit dem Rad erradelst ;-)",
    audio: "assets/audio/final-message.wav",
    clockImage: "assets/img/WhatsApp Bild 2025-07-31.jpg",
    links: [
      { url: "https://www.deutsches-uhrenmuseum.de/", text: "Größtes Deutsches Uhrenmuseum Furtwangen" },
      { url: "https://rockenhausen.de/museum-fuer-zeit/", text: "Museum für Zeit / Pfalz" },
      { url: "https://www.uhrenmuseum-glashuette.com/", text: "Uhrenmuseum Glashütte / Sachsen" },
      { url: "https://uhren-basel-news.com/basler-uhren-museen-sammlungen", text: "Uhrenmuseum Basel (Schweiz)" }
    ],
    extraImages: [
      "assets/img/JA_clock-museum.jpg",
      "assets/img/JA_die-vorfuhrung-hierzu.jpg"
    ]
  },
  {
    key: "renaissance",
    title: "Renaissance - Carillon des Stadtturms (ca. 1500)",
    description:
      "Wir beginnen unsere Reise in der Renaissance. Lausche den majestätischen Klängen eines Carillons, das einst von Stadttürmen erklang und den Menschen die Zeit verkündete.<br>Von Bastianfuchs in der Wikipedia",
    audio: "assets/audio/CARILLION-player-plays-yesterday.mp3",
    clockImage: "assets/img/CARILLON.jpg", 
    links: [
      { url: "https://de.wikipedia.org/wiki/Carillon", text: "Was ist ein CARILLON ??"}       
    ],
  },
  {
    key: "baroque",
    title: "Barock - Westminster-Schlag (ca. 1750)",
    description:
      "Weiter geht es ins Barock, wo prächtige Uhren mit komplexen Mechanismen entstanden. Der Westminster-Schlag, wie du ihn vom Big Ben kennst, hat hier seine Wurzeln.",
    audio: "assets/audio/westminster-chimes.mp3",
    clockImage: "assets/img/Westminster_Abbey.webp",
    links: [
      { url: "https://www.travelbook.de/attraktionen/die-1000-jaehrige-geschichte-der-westminster-abbey-in-london",  text: "1000-jährige Geschichte der Westminster Abbey"}       
    ],
  },
  {
    key: "romantic",
    title: "Romantik - Schwarzwälder Kuckucksuhr (ca. 1850)",
    description:
      "Im Zeitalter der Romantik eroberte die charmante Kuckucksuhr die Herzen. Ihr Ruf ist ein Symbol für Gemütlichkeit und die Schönheit der Natur.",
    audio: "assets/audio/CARILLION_antique-musical-cuckoo-clock.mp3",
    clockImage: "assets/img/clock-Schwarzwalduhr.jpg",
  },
  {
    key: "industrial",
    title: "Industriezeitalter - Bahnhofsuhr (ca. 1900)",
    description:
      "Das Industriezeitalter brachte die Eisenbahn und damit die Notwendigkeit präziser Zeitmessung an Bahnhöfen. Der Klang einer Bahnhofsuhr wurde uninteressant, deshalb zeigte sie nur schweigend ihre schwarzen neutralen Zeiger. Stattdessen hallten Zeitansagen - An- und Abfahrt - durch die Bahnhofshallen, und die Menschen hetzten über die Bahnsteige. In Deutschland wurden auch diese Zeitansagen UNWICHTIG, weil die Deutsche Bahn grundsätzlich ... sagen wir mal ' ZEITLOS ' fährt. ODER STEHT ;-)",
    audio: "assets/audio/train-station-CLOCK_announcment.wav",
    clockImage: "assets/img/train-station-clock-image.jpg",
  },
  {
    key: "modern",
    title: "Die Moderne - (ca. 2020) Big Ben ",
    description:
      "Wir sind in der Moderne angekommen. Der Big Ben in London ist heute eine der bekanntesten Uhren der Welt und sein Klang ist unverkennbar.",
    audio: "assets/audio/big-ben.mp3",
    clockImage: "assets/img/big-ben-image.jpg",
    links: [
      { url: "https://horaczko.co.uk/de/blog/big-ben-answering-questions/", text: "37 Fakten über Big Ben" }       
    ],
  },
  {
    key: "kaleidoscope",
    title: "Kaleidoskop der U(h)rsounds",
    description:
      "Eine besondere Sammlung 25 und mehr einzigartiger Uhrenklänge – <br> Ticken, Schläge, Kuckuck, Pendel und Countdown verbinden sich zu einem kleinen Klanggemälde.",
    audio: "assets/audio/Kaleidoskop-Klangreise.mp3",
    clockImage: "",
    kaleidoImages: [
      "assets/img/Kaleido-0-CARILLON.jpg",
      "assets/img/kaleido1.jpg",
      "assets/img/kaleido2.jpg",
      "assets/img/kaleido3.jpg",
      "assets/img/kaleido4.jpg",
      "assets/img/kaleido5.jpg",
      "assets/img/kaleido6.jpg",
      "assets/img/kaleido7.jpg",
      "assets/img/kaleido8.jpg",
      "assets/img/kaleido9.jpg",
      "assets/img/kal-DU-Eingang.jpg",
      "assets/img/kal-trommler.jpg",
      "assets/img/kal-wecker-normal.jpg",
      "assets/img/kal-taschenuhr.jpg",
      "assets/img/kal-holraederzuhr-vermutlich-schwarzwald-um-1760.jpg",
      "assets/img/kal-holzraederuhr-hb-davos-schweiz-1693.jpg",
      "assets/img/kal-musikuhr-mit-kapuziner-johann-wehrle-neukirch-um-1770.jpg",
      "assets/img/kal-wecker-sheffield-kaiser-villingen-um-1970.jpg",
      "assets/img/kal-taenzer-wecker.png",
      "assets/img/kal-kinderuhr-ag-fuer-uhrenfabrikation-lenzkirch-um-1880.jpg",
      "assets/img/kal-kukuk-fw.png",
      "assets/img/kal-museum-fuer-zeit-ziffernblatt-astronomische-uhr-2.jpg",
      "assets/img/kal-12-Banner-Uhren-Museum-Basel-2019.jpg",
      "assets/img/JA_die-vorfuhrung-hierzu.jpg",
      "assets/img/JA_clock-museum.jpg",
      "assets/img/kaleido10.webp"
    ],
  },
  {
    key: "finale",
    title: "Finale - Persönliche Geburtstagsbotschaft",
    description:
      "Lieber Norbert, <br> herzlichen Glückwunsch zu deinem wohlverdienten Ruhestand! Möge diese Klangreise durch die Zeit dich an all die schönen Momente erinnern und dir viele neue, spannende Abenteuer auf dem Fahrrad und mit deinen Uhren bescheren. <br> ALLES LIEBE & GESUNDHEIT zum GEBURTSTAG !",
    audio: "assets/audio/final-message.wav",
    clockImage: "assets/img/birthday_cake_62_watch_mtb.png",
  },
];

// DOM-Referenzen
const audioPlayer = document.getElementById("audio-player");
const playButton = document.getElementById("play-button");
const nextButton = document.getElementById("next-button");
const stationTitle = document.getElementById("station-title");
const stationSubtitle = document.getElementById("station-subtitle");
const stationDescription = document.getElementById("station-description");
const clockImage = document.getElementById("clock-image");
const progressBar = document.querySelector(".progress-bar");

const notesContainer = document.getElementById("notes-container");
const visualizerCanvas = document.getElementById("visualizer");
const vCtx = visualizerCanvas.getContext("2d");

let currentIndex = 0;
let timeUpdateHandler = null;

// AudioContext für Visualizer
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const source = audioCtx.createMediaElementSource(audioPlayer);
const analyser = audioCtx.createAnalyser();
analyser.fftSize = 512;
source.connect(analyser);
analyser.connect(audioCtx.destination);

let visualizerActive = false;
let lastNoteTime = 0;

// Visualizer + Noten
function drawVisualizer() {
  if (!visualizerActive) return;
  requestAnimationFrame(drawVisualizer);

  const dataArray = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(dataArray);

  // Frequenzband zeichnen
  vCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
  const barWidth = visualizerCanvas.width / dataArray.length;
  dataArray.forEach((value, i) => {
    const barHeight = value / 2;
    vCtx.fillStyle = "#a0522d";
    vCtx.fillRect(i * barWidth, visualizerCanvas.height - barHeight, barWidth - 2, barHeight);
  });

  // 🎵 Noten erzeugen
  const avg = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;
  const now = Date.now();
  if (avg > 50 && Math.random() > 0.6 && now - lastNoteTime > 300) {
    const note = document.createElement("span");
    note.textContent = Math.random() > 0.5 ? "🎵" : "🎶";
    note.className = "note";

    const startX = Math.random() * notesContainer.offsetWidth;
    const startY = 0;
    note.style.left = `${startX}px`;
    note.style.top = `${startY}px`;

    const endX = startX + (Math.random() - 0.5) * window.innerWidth * 0.8;
    const endY = - (200 + Math.random() * window.innerHeight * 0.8);
    const duration = 3000 + Math.random() * 3000;

    note.style.transition = `transform ${duration}ms ease-out, opacity ${duration}ms ease-out`;
    requestAnimationFrame(() => {
      note.style.transform = `translate(${endX - startX}px, ${endY}px)`;
      note.style.opacity = 0;
    });

    notesContainer.appendChild(note);
    setTimeout(() => note.remove(), duration);
    lastNoteTime = now;
  }
}

function toggleVisualizer(enable) {
  visualizerActive = enable;
  notesContainer.innerHTML = "";
  visualizerCanvas.style.display = enable ? "block" : "none";
  notesContainer.style.display = enable ? "block" : "none";

  if (enable) {
    visualizerCanvas.width = visualizerCanvas.offsetWidth;
    visualizerCanvas.height = visualizerCanvas.offsetHeight;
    drawVisualizer();
  } else {
    vCtx.clearRect(0, 0, visualizerCanvas.width, visualizerCanvas.height);
  }
}

// Fahrrad-Progress
function updateSubtitle() {
  const total = stations.length + 1;
  const current = currentIndex + 1;
  const bike = "🚴‍♂️";
  stationSubtitle.textContent = `${bike} ${current} / ${total}`;
}

function attachTimeUpdate() {
  if (timeUpdateHandler) audioPlayer.removeEventListener("timeupdate", timeUpdateHandler);
  timeUpdateHandler = () => {
    if (!audioPlayer.duration || isNaN(audioPlayer.duration)) return;
    const p = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = `${p}%`;
  };
  audioPlayer.addEventListener("timeupdate", timeUpdateHandler);
}

// Station laden
function loadStation(i) {
  const s = stations[i];
  stationTitle.textContent = s.title;

  let html = s.description;

  if (s.links && Array.isArray(s.links) && s.links.length > 0) {
    let linksHtml = s.links
      .map(
        (l) =>
          `<a href="${l.url}" target="_blank" rel="noopener noreferrer">➡️ ${l.text}</a>`
      )
      .join("<br>");
    html += `<br><br>${linksHtml}`;
  }

  if (s.clockImage) {
    clockImage.style.display = "block";
    clockImage.src = s.clockImage;
  } else {
    clockImage.style.display = "none";
    clockImage.removeAttribute("src");
  }

  if (s.extraImages && Array.isArray(s.extraImages) && s.extraImages.length > 0) {
    let imagesHtml = s.extraImages
      .map((img) => `<img src="${img}" alt="Zusatzbild" class="extra-img">`)
      .join("");
    html += `<div class="extra-images">${imagesHtml}</div>`;
  }

  stationDescription.innerHTML = html;

  audioPlayer.src = s.audio;
  audioPlayer.load();
  progressBar.style.width = "0%";
  

// script.js (innerhalb der loadStation Funktion)

// Kaleidoskop-Special
const kaleidoContainerId = "kaleido-container";
const dynamicStyleId = 'kaleidoscope-style'; // ID für unser Style-Tag

// Entferne alte Elemente, falls vorhanden
document.getElementById(kaleidoContainerId)?.remove();
document.getElementById(dynamicStyleId)?.remove();

if (s.kaleidoImages && s.kaleidoImages.length > 0) {
  // 1. Den Container für die Bilder erstellen
  const kaleido = document.createElement("div");
  kaleido.id = kaleidoContainerId;
  document.querySelector(".content").appendChild(kaleido);

  const imageVisibleTime = 3; // Dauer, die ein Bild sichtbar ist (in s)
  const totalDuration = s.kaleidoImages.length * imageVisibleTime;

  // 2. Die Keyframe-Prozente berechnen
  const blendTimeInPercent = (0.4 / totalDuration) * 100;
  const visibleTimeInPercent = (imageVisibleTime / totalDuration) * 100;

  // 3. Die @keyframes-Regel als Text erstellen
  const keyframesRule = `
    @keyframes kaleidoscope-flow {
      0% { opacity: 0; transform: scale(0.5); }
      ${blendTimeInPercent.toFixed(2)}% { opacity: 1; transform: scale(1); }
      ${(visibleTimeInPercent - blendTimeInPercent).toFixed(2)}% { opacity: 1; transform: scale(1); }
      ${visibleTimeInPercent.toFixed(2)}% { opacity: 0; transform: scale(0.5); }
      100% { opacity: 0; transform: scale(0.5); }
    }`;

  // 4. Ein <style>-Element erstellen und die Regel einfügen
  const styleSheet = document.createElement("style");
  styleSheet.id = dynamicStyleId;
  styleSheet.innerText = keyframesRule;
  document.head.appendChild(styleSheet); // Zum <head> der Seite hinzufügen

  // 5. Die Bilder wie bisher erstellen und die Animation zuweisen
  s.kaleidoImages.forEach((src, i) => {
    const img = document.createElement("img");
    img.src = src;
    img.className = "kaleido-img";
    img.style.animationName = 'kaleidoscope-flow';
    img.style.animationDuration = `${totalDuration}s`;
    img.style.animationIterationCount = 'infinite';
    img.style.animationDelay = `${i * imageVisibleTime}s`;
    kaleido.appendChild(img);
  });
}

  attachTimeUpdate();

  updateSubtitle();

  // 🎶 Nur bei Renaissance-Carillon
  if (s.key === "renaissance") {
    toggleVisualizer(true);
  } else {
    toggleVisualizer(false);
  }
}

// Player
function playPause() {
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  if (audioPlayer.paused) {
    audioPlayer
      .play()
      .then(() => (playButton.textContent = "Pause"))
      .catch(() => {
        playButton.textContent = "Play";
      });
  } else {
    audioPlayer.pause();
    playButton.textContent = "Play";
  }
}

function nextStation() {
  // NEU: Prüft, ob der Button "Von vorne" gedrückt wurde, um neuzustarten
  if (nextButton.textContent === "Von vorne") {
    stationDescription.innerHTML = ""; // Leert den finalen Text & die Bilder
    currentIndex = 0;
    nextButton.textContent = "Weiter";
    playButton.textContent = "Play";
    loadStation(currentIndex);
    return; // Stoppt die Funktion hier, um nicht zur nächsten Station zu springen
  }

  currentIndex++;
  if (currentIndex < stations.length) {
    loadStation(currentIndex);
    audioPlayer.play().catch(() => {});
    playButton.textContent = "Pause";
  } else {
    updateSubtitle();
    // Das ist der Code für den finalen Bildschirm (jetzt OHNE Timeout)
    stationTitle.textContent = "🎉 Klangreise beendet! 🎉";
    
    stationDescription.innerHTML = `
      Das war die letzte Station. <br> Herzlichen Glückwunsch zum Geburtstag, lieber Norbert! 
      Möge dein Ruhestand voller schöner Momente, Radausfahrten und Uhrenträume sein.
      Grüße aus dem Tal, von Jürgen ❤️
      
      <div class="final-images">
        <img src="assets/img/Durchstarten.png" alt="Durchstarten !!" class="final-img">
        <img src="assets/img/Perspektiven.webp" alt="Rückblicke & Perspektiven" class="final-img">
      </div>
    `;
    
    clockImage.style.display = "none";
    audioPlayer.src = "assets/audio/Mit-66-Jahren.mp3"; 
    audioPlayer.load();
    audioPlayer.play().catch(() => {});
    playButton.textContent = "Pause";

    // Ändert nur noch den Button-Text. Der Neustart wartet auf den Klick.
    nextButton.textContent = "Von vorne";
  }
}

// Events
playButton.addEventListener("click", playPause);
nextButton.addEventListener("click", nextStation);

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "Space":
      e.preventDefault();
      playPause();
      break;
    case "ArrowRight":
    case "Enter":
      e.preventDefault();
      nextStation();
      break;
    case "ArrowLeft":
      e.preventDefault();
      if (currentIndex > 0) {
        currentIndex--;
        loadStation(currentIndex);
      }
      break;
  }
});

audioPlayer.addEventListener("ended", () => {
  playButton.textContent = "Play";
});

// Initialisierung
loadStation(currentIndex);

// Intro-Overlay statt alert
window.addEventListener("load", () => {
  if (currentIndex === 0) {
    const overlay = document.createElement("div");
    overlay.id = "intro-overlay";
    overlay.innerHTML = `
      <div class="intro-box">
        <h2>🎉 Willkommen zur Klangreise 🎉</h2>
        <p>Steuerung:<br>
        • <b>Leertaste</b>: Play/Pause<br>
        • <b>Enter</b> oder <b>Pfeil rechts</b>: Weiter<br>
        • <b>Pfeil links</b>: Zurück<br><br>
        👉 Bitte Lautstärke am Gerät anpassen.</p>
        <button id="close-intro">Los geht's!</button>
      </div>
    `;
    document.body.appendChild(overlay);

    document.getElementById("close-intro").addEventListener("click", () => {
      overlay.remove();
    });
  }
});
