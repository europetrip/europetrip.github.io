const itinerary = [
  {
    city: "Vienna",
    stay: "9-11 Sep",
    nights: "2 nights",
    dates: [
      {
        label: "Wed 9 Sep",
        note: "Arrive in Vienna",
        travel: [{ icon: "✈️", title: "Arrive in Vienna", time: "12:00 PM" }],
        items: [
          { title: "St Stephen's Cathedral" },
          { title: "Figlmuller dinner", type: "booked", time: "8:00 PM" },
        ],
      },
      {
        label: "Thu 10 Sep",
        note: "Full Vienna day",
        items: [
          { title: "Hofburg Palace and gardens" },
          { title: "Kunsthistorisches Museum Wien" },
          { title: "Mozart things" },
        ],
      },
      {
        label: "Fri 11 Sep",
        note: "Travel day",
        items: [{ title: "Checkout and station transfer" }],
        travel: [{ icon: "🚆", title: "Train to Munich", time: "9:13 AM" }],
      },
    ],
  },
  {
    city: "Munich",
    stay: "11-14 Sep",
    nights: "3 nights",
    dates: [
      {
        label: "Fri 11 Sep",
        note: "Arrive in Munich",
        travel: [{ icon: "🚆", title: "Arrive in Munich", time: "1:54 PM" }],
        items: [
          { title: "Marienplatz" },
          { title: "Hofbrauhaus Munchen" },
        ],
      },
      {
        label: "Sat 12 Sep",
        note: "Full Munich day",
        items: [{ title: "Self-directed Third Reich tour" }],
      },
      {
        label: "Sun 13 Sep",
        note: "Full Munich day",
        items: [
          { title: "Englischer Garten" },
          { title: "Flexible Munich day" },
        ],
      },
      {
        label: "Mon 14 Sep",
        note: "Travel day",
        items: [{ title: "Breakfast before checkout" }],
        travel: [{ icon: "🚆", title: "Train to Lucerne", time: "10:31 AM" }],
      },
    ],
  },
  {
    city: "Lucerne",
    stay: "14-17 Sep",
    nights: "3 nights",
    dates: [
      {
        label: "Mon 14 Sep",
        note: "Arrive in Lucerne",
        travel: [{ icon: "🚆", title: "Arrive in Lucerne", time: "2:28 PM" }],
        items: [
          { title: "Lake Lucerne" },
          { title: "Chapel Bridge" },
        ],
      },
      {
        label: "Tue 15 Sep",
        note: "Full Lucerne day",
        items: [
          { title: "Mount Pilatus" },
        ],
      },
      {
        label: "Wed 16 Sep",
        note: "Full Lucerne day",
        items: [
          { title: "Lion Monument" },
          { title: "Glacier Garden of Lucerne" },
          { title: "Hofkirche St. Leodegar" },
          { title: "Swiss Museum of Transport" },
        ],
      },
      {
        label: "Thu 17 Sep",
        note: "Travel day",
        items: [{ title: "Early checkout" }],
        travel: [{ icon: "🚆", title: "Train to Milan", time: "8:18 AM" }],
      },
    ],
  },
  {
    city: "Dolomites",
    stay: "17-20 Sep",
    nights: "3 nights",
    dates: [
      {
        label: "Thu 17 Sep",
        note: "Arrive in Milan",
        travel: [{ icon: "🚆", title: "Arrive in Milan", time: "11:50 AM" }],
        items: [
          { title: "Pick up hire car in Milan" },
          { title: "Drive to Cortina d'Ampezzo or Ortisei" },
        ],
      },
      {
        label: "Fri 18 Sep",
        note: "Full Dolomites day",
        items: [
          { title: "Tre Cime di Lavaredo" },
          { title: "Lago di Sorapis" },
        ],
      },
      {
        label: "Sat 19 Sep",
        note: "Full Dolomites day",
        items: [
          { title: "Seceda ridgeline"},
          { title: "Val di Funes" },
        ],
      },
      {
        label: "Sun 20 Sep",
        note: "Travel day",
        items: [{ title: "​Alpe di Siusi (Seiser Alm)" }],
        travel: [{ icon: "🚆", title: "Train to Florence", time: "7:10 PM" }],
      },
    ],
  },
  {
    city: "Florence",
    stay: "20-24 Sep",
    nights: "4 nights",
    dates: [
      {
        label: "Sun 20 Sep",
        note: "Arrive in Florence",
        travel: [{ icon: "🚆", title: "Arrive in Florence", time: "9:04 PM" }],
        items: [{ title: "Check in" }],
      },
      {
        label: "Mon 21 Sep",
        note: "Full Florence day",
        items: [
          { title: "Gilli Cafe" },
          { title: "Cathedral of Santa Maria del Fiore" },
          { title: "Brunelleschi Dome climb", type: "booked", time: "6:00 PM sharp" },
        ],
      },
      {
        label: "Tue 22 Sep",
        note: "Full Florence day",
        items: [
          { title: "Uffizi Galleries", type: "booked", time: "1:30 PM" },
          { title: "Ponte Vecchio" },
          { title: "Piazzale Michelangelo" },
        ],
      },
      {
        label: "Wed 23 Sep",
        note: "Full Florence day",
        items: [
          { title: "Galleria dell'Accademia", type: "booked", time: "1:00 PM" },
          { title: "Gilli Cafe tiramisu breakfast" },
        ],
      },
      {
        label: "Thu 24 Sep",
        note: "Travel day",
        items: [{ title: "Early checkout" }],
        travel: [{ icon: "🚆", title: "Train to Rome", time: "9:33 AM" }],
      },
    ],
  },
  {
    city: "Rome",
    stay: "24-28 Sep",
    nights: "4 nights",
    dates: [
      {
        label: "Thu 24 Sep",
        note: "Arrive in Rome",
        travel: [{ icon: "🚆", title: "Arrive in Rome", time: "11:14 AM" }],
        items: [
          { title: "Pizza" },
          { title: "Parliament Building" },
          { title: "The Pantheon" },
        ],
      },
      {
        label: "Fri 25 Sep",
        note: "Full Rome day",
        items: [
          {
            title: "Vatican Tour",
            type: "booked",
            time: "3:30 PM",
            // detail: "Booking code: 2L2N0TZF3TTG95HLO1",
          },
          { title: "Pizzarium Bonci" },
        ],
      },
      {
        label: "Sat 26 Sep",
        note: "Full Rome day",
        items: [
          { title: "Roman Forum" },
          { title: "Mouth of Truth" },
        ],
      },
      {
        label: "Sun 27 Sep",
        note: "Full Rome day",
        items: [
          { title: "More pizza" },
          { title: "Flexible Rome day" },
        ],
      },
      {
        label: "Mon 28 Sep",
        note: "Travel day",
        items: [{ title: "Slow morning before the airport" }],
        travel: [{ icon: "✈️", title: "Flight to Paris", time: "3:10 PM" }],
      },
    ],
  },
  {
    city: "Paris",
    stay: "28 Sep - 2 Oct",
    nights: "4 nights",
    dates: [
      {
        label: "Mon 28 Sep",
        note: "Arrive in Paris",
        travel: [{ icon: "✈️", title: "Arrive in Paris", time: "5:20 PM" }],
        items: [{ title: "The Seine" }],
      },
      {
        label: "Tue 29 Sep",
        note: "Full Paris day",
        items: [
          { title: "Paul Bakery" },
          { title: "Notre-Dame" },
          { title: "Musee d'Orsay", type: "booked", time: "1:30 PM" },
          { title: "Napoleon's Tomb and Army Museum" },
        ],
      },
      {
        label: "Wed 30 Sep",
        note: "Full Paris day",
        items: [
          { title: "Place de la Concorde" },
          { title: "The Louvre", type: "booked", time: "1:00 PM" },
          { title: "Champs-Elysees and Arc de Triomphe" },
        ],
      },
      {
        label: "Thu 1 Oct",
        note: "Full Paris day",
        items: [
          { title: "Sacre-Coeur" },
          { title: "Merci Store" },
          { title: "Modern Art Museum" },
        ],
      },
      {
        label: "Fri 2 Oct",
        note: "Travel day",
        items: [{ title: "Early checkout" }],
        travel: [{ icon: "🚆", title: "Train to London", time: "7:02 AM" }],
      },
    ],
  },
  {
    city: "London",
    stay: "2 Oct",
    nights: "Day stop",
    dates: [
      {
        label: "Fri 2 Oct",
        note: "Arrive in London",
        travel: [
          { icon: "🚆", title: "Arrive in London", time: "8:30 AM" },
          { icon: "🚆", title: "Train to Oxford", time: "1:23 PM" },
        ],
        items: [{ title: "London stopover" }],
      },
    ],
  },
];

const cityLinks = document.querySelector("#city-links");
const citiesRoot = document.querySelector("#cities");
const itineraryNav = document.querySelector("#itinerary-nav");
const itineraryPage = document.querySelector("#itinerary");
const showWheelButton = document.querySelector("#show-wheel");
const wheelPage = document.querySelector("#wheel-page");
const wheelDisc = document.querySelector("#wheel-disc");
const wheelLabels = document.querySelector("#wheel-labels");
const wheelOptions = document.querySelector("#wheel-options");
const spinWheelButton = document.querySelector("#spin-wheel");
const wheelResult = document.querySelector("#wheel-result");
const resultModal = document.querySelector("#result-modal");
const resultModalPanel = document.querySelector(".result-modal-panel");
const resultModalName = document.querySelector("#result-modal-name");
const closeResultButton = document.querySelector("#close-result");
const removeResultButton = document.querySelector("#remove-result");
let tripPhotos = {};
let photoResizeTimer;
let wheelRotation = 0;
let wheelSpinning = false;
let wheelSegments = [];
let selectedSegment = null;

loadPhotoManifest().then(() => {
  renderNavigation();
  renderCities();
  initPhotoLayouts();
  syncViewFromHash();
});

window.addEventListener("resize", () => {
  clearTimeout(photoResizeTimer);
  photoResizeTimer = setTimeout(layoutPhotoGalleries, 120);
});

window.addEventListener("hashchange", syncViewFromHash);
window.addEventListener("popstate", syncViewFromHash);
showWheelButton.addEventListener("click", () => {
  showView(window.location.hash === "#wheel" ? "itinerary" : "wheel");
});
spinWheelButton.addEventListener("click", spinWheel);
wheelOptions.addEventListener("input", updateWheelFromOptions);
closeResultButton.addEventListener("click", closeResultModal);
removeResultButton.addEventListener("click", removeSelectedSegment);
resultModal.addEventListener("click", (event) => {
  if (event.target === resultModal || event.target.classList.contains("result-modal-backdrop")) {
    closeResultModal();
  }
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !resultModal.hidden) {
    closeResultModal();
  }
});
syncViewFromHash();
updateWheelFromOptions();

function loadPhotoManifest() {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = `photos.js?v=${Date.now()}`;
    script.onload = () => {
      tripPhotos = window.tripPhotos ?? {};
      resolve();
    };
    script.onerror = () => {
      tripPhotos = {};
      resolve();
    };
    document.head.append(script);
  });
}

function showView(view) {
  if (view === "wheel") {
    history.pushState(null, "", "#wheel");
  } else {
    history.pushState(null, "", `${window.location.pathname}${window.location.search}`);
  }

  syncViewFromHash();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function syncViewFromHash() {
  const isWheel = window.location.hash === "#wheel";
  itineraryPage.hidden = isWheel;
  itineraryNav.hidden = isWheel;
  wheelPage.hidden = !isWheel;
  showWheelButton.textContent = isWheel ? "Itinerary" : "Spin wheel";
}

function spinWheel() {
  if (wheelSpinning) return;
  if (!wheelSegments.length) return;

  const winningIndex = Math.floor(Math.random() * wheelSegments.length);
  const winner = wheelSegments[winningIndex];
  const extraSpins = 5 + Math.floor(Math.random() * 3);
  const margin = Math.min(10, winner.sliceAngle * 0.18);
  const randomSegmentOffset = -winner.sliceAngle / 2 + margin + Math.random() * (winner.sliceAngle - margin * 2);
  const targetAngle = winner.center + randomSegmentOffset;
  const pointerAngle = 0;
  const currentOffset = positiveModulo(wheelRotation, 360);
  const targetOffset = positiveModulo(pointerAngle - targetAngle, 360);
  const delta = positiveModulo(targetOffset - currentOffset, 360);

  wheelSpinning = true;
  wheelResult.textContent = "Spinning";
  spinWheelButton.disabled = true;
  wheelRotation += extraSpins * 360 + delta;
  wheelDisc.style.transform = `rotate(${wheelRotation}deg)`;

  window.setTimeout(() => {
    wheelSpinning = false;
    spinWheelButton.disabled = false;
    wheelResult.textContent = winner.name;
    selectedSegment = { name: winner.name, index: winningIndex, color: winner.color };
    openResultModal(winner);
  }, 4800);
}

function positiveModulo(value, divisor) {
  return ((value % divisor) + divisor) % divisor;
}

function updateWheelFromOptions() {
  const names = wheelOptions.value
    .split(/\r?\n/)
    .map((name) => name.trim())
    .filter(Boolean);

  wheelSegments = names.map((name, index) => ({
    name,
    color: getWheelColor(index, names.length),
    center: names.length ? index * (360 / names.length) : 0,
    sliceAngle: names.length ? 360 / names.length : 360,
  }));

  renderWheel();
  wheelResult.textContent = wheelSegments.length ? "Ready" : "Add options";
  spinWheelButton.disabled = !wheelSegments.length;
  selectedSegment = null;
}

function renderWheel() {
  if (!wheelSegments.length) {
    wheelDisc.style.background = "var(--panel)";
    wheelLabels.innerHTML = "";
    return;
  }

  const sliceAngle = 360 / wheelSegments.length;
  const gradientStops = wheelSegments
    .map((segment, index) => {
      const start = index * sliceAngle;
      const end = (index + 1) * sliceAngle;
      return `${segment.color} ${start}deg ${end}deg`;
    })
    .join(", ");

  wheelDisc.style.background = `conic-gradient(from ${-sliceAngle / 2}deg, ${gradientStops})`;
  wheelLabels.innerHTML = wheelSegments.map(renderWheelLabel).join("");
}

function renderWheelLabel(segment, index) {
  const fontScale = Math.max(0.62, Math.min(1, 3.4 / wheelSegments.length));
  const angle = segment.center;

  return `
    <span
      class="wheel-name"
      style="--label-angle: ${angle}deg; --label-font-scale: ${fontScale};"
    >
      ${escapeHtml(segment.name)}
    </span>
  `;
}

function getWheelColor(index, count) {
  const colors = ["#69a7ff", "#f6c85f", "#58d68d"];
  if (count > 1 && count % colors.length === 1 && index === count - 1) {
    return colors[1];
  }

  return colors[index % colors.length];
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;",
  })[character]);
}

function openResultModal(segment) {
  resultModalName.textContent = segment.name;
  resultModalPanel.style.setProperty("--modal-accent", segment.color);
  resultModal.hidden = false;
  document.body.classList.add("modal-open");
  closeResultButton.focus();
}

function closeResultModal() {
  resultModal.hidden = true;
  document.body.classList.remove("modal-open");
}

function removeSelectedSegment() {
  if (!selectedSegment) {
    closeResultModal();
    return;
  }

  const lines = wheelOptions.value.split(/\r?\n/);
  let nonEmptyIndex = -1;
  const nextLines = lines.filter((line) => {
    if (!line.trim()) return true;

    nonEmptyIndex += 1;
    return nonEmptyIndex !== selectedSegment.index;
  });

  wheelOptions.value = nextLines.join("\n").replace(/^\n+|\n+$/g, "");
  closeResultModal();
  updateWheelFromOptions();
}

function renderNavigation() {
  cityLinks.innerHTML = itinerary
    .map((city) => `<a href="#${slugify(city.city)}">${city.city}</a>`)
    .join("");
}

function renderCities() {
  citiesRoot.innerHTML = itinerary.map(renderCity).join("");
}

function renderCity(city) {
  const citySlug = slugify(city.city);
  return `
    <section class="city-section" id="${citySlug}" aria-labelledby="${citySlug}-title">
      <div class="city-header">
        <div>
          <h2 class="city-title" id="${citySlug}-title">${city.city}</h2>
          <div class="city-meta">
            <span>${city.stay}</span>
            <span>${city.nights}</span>
          </div>
        </div>
      </div>
      <div class="date-grid">
        ${city.dates.map(renderDate).join("")}
      </div>
      ${renderPhotoGallery(city, citySlug)}
    </section>
  `;
}

function renderDate(date) {
  const arrivals = date.travel?.filter((travel) => travel.title.startsWith("Arrive")) ?? [];
  const departures = date.travel?.filter((travel) => !travel.title.startsWith("Arrive")) ?? [];
  const items = date.items?.length
    ? `<ul class="activity-list">${date.items.map(renderItem).join("")}</ul>`
    : "";

  return `
    <article class="date-card">
      <div class="date-head">
        <h3 class="date-title">${date.label}</h3>
        <span class="date-note">${date.note}</span>
      </div>
      ${arrivals.map(renderTravel).join("")}
      ${items}
      ${departures.map(renderTravel).join("")}
    </article>
  `;
}

function renderItem(item) {
  const meta = item.type === "booked"
    ? [item.time ? `<strong class="booking-pill">${item.time}</strong>` : "", item.detail ? `<span>${item.detail}</span>` : ""]
        .filter(Boolean)
        .join("")
    : "";

  return `
    <li class="activity-item ${item.type === "booked" ? "booked" : ""}">
      <span class="item-dot" aria-hidden="true"></span>
      <div class="item-main">
        <p class="item-title">${item.title}</p>
        ${meta ? `<div class="item-meta">${meta}</div>` : ""}
      </div>
    </li>
  `;
}

function renderTravel(travel) {
  return `
    <aside class="travel-card" aria-label="${travel.title}">
      <h4><span aria-hidden="true">${travel.icon}</span>${travel.title}</h4>
      <p><span class="travel-pill">${travel.time}</span></p>
    </aside>
  `;
}

function renderPhotoGallery(city, citySlug) {
  const photos = tripPhotos[citySlug] ?? [];
  if (!photos.length) return "";

  const galleryId = `${citySlug}-photos`;

  return `
    <section class="photo-section" aria-label="${city.city} photos">
      <div class="photo-grid" id="${galleryId}">
        ${photos.map((photo, index) => renderPhoto(photo, city, citySlug, index)).join("")}
      </div>
    </section>
  `;
}

function renderPhoto(photo, city, citySlug, index) {
  const filename = typeof photo === "string" ? photo : photo.src;
  const caption = typeof photo === "string" ? "" : photo.caption;
  const alt = caption || `${city.city} photo ${index + 1}`;

  return `
    <figure class="photo-tile">
      <img src="photos/${citySlug}/${encodeURI(filename)}" alt="${alt}" />
      ${caption ? `<figcaption>${caption}</figcaption>` : ""}
    </figure>
  `;
}

function initPhotoLayouts() {
  const images = [...document.querySelectorAll(".photo-grid img")];
  if (!images.length) return;

  Promise.all(images.map(waitForImage)).then(layoutPhotoGalleries);
}

function waitForImage(image) {
  if (image.complete) return Promise.resolve();

  return new Promise((resolve) => {
    image.addEventListener("load", resolve, { once: true });
    image.addEventListener("error", resolve, { once: true });
  });
}

function layoutPhotoGalleries() {
  document.querySelectorAll(".photo-grid").forEach(layoutPhotoGallery);
}

function layoutPhotoGallery(gallery) {
  const styles = getComputedStyle(gallery);
  const columnGap = parseFloat(styles.columnGap);
  const flexGap = parseFloat(styles.gap);
  const gap = Number.isNaN(columnGap) ? (Number.isNaN(flexGap) ? 0 : flexGap) : columnGap;
  const targetHeight = window.matchMedia("(max-width: 650px)").matches ? 195 : 234;
  const width = gallery.clientWidth;
  if (!width) return;

  resetPhotoGallery(gallery, targetHeight);

  const rows = groupPhotoRows(gallery);
  if (!rows.length) return;

  gallery.classList.add("photo-grid-justified");
  gallery.replaceChildren();

  const rowHeights = [];
  rows.forEach((row, index) => {
    const rowElement = document.createElement("div");
    const ratios = row.map(getPhotoRatio);
    const ratioTotal = ratios.reduce((total, ratio) => total + ratio, 0);
    const borderWidth = getPhotoBorderWidth(row[0]);
    const usableWidth = width - gap * (row.length - 1);
    const isLastRow = index === rows.length - 1;
    const rowHeight = isLastRow && rows.length > 1
      ? rowHeights[index - 1]
      : Math.max(targetHeight, Math.floor((usableWidth - borderWidth * row.length) / ratioTotal));

    rowHeights.push(rowHeight);
    rowElement.className = "photo-row";
    rowElement.style.setProperty("--photo-row-height", `${rowHeight}px`);
    row.forEach((figure, figureIndex) => {
      const image = figure.querySelector("img");
      if (image) {
        image.style.width = `${Math.floor(rowHeight * ratios[figureIndex])}px`;
        image.style.height = `${rowHeight}px`;
      }
      rowElement.append(figure);
    });
    gallery.append(rowElement);
  });
}

function resetPhotoGallery(gallery, targetHeight) {
  const figures = [...gallery.querySelectorAll(".photo-tile")];
  gallery.classList.remove("photo-grid-justified");
  gallery.replaceChildren(...figures);
  gallery.querySelectorAll("img").forEach((image) => {
    image.style.removeProperty("width");
    image.style.height = `${targetHeight}px`;
  });
}

function getPhotoRatio(figure) {
  const image = figure.querySelector("img");
  return image?.naturalWidth && image?.naturalHeight
    ? image.naturalWidth / image.naturalHeight
    : 1;
}

function getPhotoBorderWidth(figure) {
  const image = figure?.querySelector("img");
  if (!image) return 0;

  const styles = getComputedStyle(image);
  return (parseFloat(styles.borderLeftWidth) || 0) + (parseFloat(styles.borderRightWidth) || 0);
}

function groupPhotoRows(gallery) {
  const figures = [...gallery.querySelectorAll(".photo-tile")];
  const rows = [];

  figures.forEach((figure) => {
    const top = Math.round(figure.offsetTop);
    const row = rows.find((candidate) => candidate.top === top);

    if (row) {
      row.items.push(figure);
    } else {
      rows.push({ top, items: [figure] });
    }
  });

  return rows.map((row) => row.items);
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
