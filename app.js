const itinerary = [
  {
    city: "Vienna",
    stay: "9-11 Sep",
    nights: "2 nights",
    dates: [
      {
        label: "Wed 9 Sep",
        note: "Arrive in Vienna",
        items: [{ title: "Figlmuller dinner", type: "booked", time: "8:00 PM" }],
      },
      {
        label: "Thu 10 Sep",
        note: "Full Vienna day",
        items: [
          { title: "Hofburg Palace and gardens" },
          { title: "St Stephen's Cathedral" },
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
          { title: "Reserve parking space" },
        ],
      },
      {
        label: "Sat 19 Sep",
        note: "Full Dolomites day",
        items: [
          { title: "Val di Funes" },
          { title: "Via ferrata maybe" },
        ],
      },
      {
        label: "Sun 20 Sep",
        note: "Travel day",
        items: [{ title: "Slow morning in the mountains" }],
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
let tripPhotos = {};
let photoResizeTimer;

loadPhotoManifest().then(() => {
  renderNavigation();
  renderCities();
  initPhotoLayouts();
});

window.addEventListener("resize", () => {
  clearTimeout(photoResizeTimer);
  photoResizeTimer = setTimeout(layoutPhotoGalleries, 120);
});

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
      <img src="photos/${citySlug}/${encodeURI(filename)}" alt="${alt}" loading="lazy" />
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
  const images = [...gallery.querySelectorAll("img")];
  if (!images.length) return;

  const styles = getComputedStyle(gallery);
  const columnGap = parseFloat(styles.columnGap);
  const flexGap = parseFloat(styles.gap);
  const gap = Number.isNaN(columnGap) ? (Number.isNaN(flexGap) ? 0 : flexGap) : columnGap;
  const targetHeight = window.matchMedia("(max-width: 650px)").matches ? 195 : 234;
  const width = gallery.clientWidth;
  if (!width) return;
  const rows = [];
  let row = [];
  let ratioTotal = 0;

  images.forEach((image) => {
    const ratio = image.naturalWidth && image.naturalHeight
      ? image.naturalWidth / image.naturalHeight
      : 1;
    const nextRatioTotal = ratioTotal + ratio;
    const nextWidth = nextRatioTotal * targetHeight + gap * row.length;

    if (row.length && nextWidth > width) {
      rows.push({ items: row, ratioTotal });
      row = [{ image, ratio }];
      ratioTotal = ratio;
    } else {
      row.push({ image, ratio });
      ratioTotal = nextRatioTotal;
    }
  });

  if (row.length) rows.push({ items: row, ratioTotal });

  const longestRow = rows.reduce((longest, current) => {
    const currentWidth = current.ratioTotal * targetHeight + gap * (current.items.length - 1);
    const longestWidth = longest.ratioTotal * targetHeight + gap * (longest.items.length - 1);
    return currentWidth > longestWidth ? current : longest;
  }, rows[0]);
  const usableWidth = width - gap * (longestRow.items.length - 1);
  const height = Math.max(targetHeight, usableWidth / longestRow.ratioTotal);

  gallery.style.setProperty("--photo-height", `${Math.round(height)}px`);
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
