(() => {
  const data = window.GAME_DATA || { cards: [], boardSpaces: [], deckMeta: {} };
  const deckOrder = ["all", "event", "opportunity", "asset", "decision", "special"];
  const state = {
    deck: "all",
    query: "",
    visible: 50,
    activeSpace: 0,
  };

  const deckTabs = document.querySelector("#deckTabs");
  const cardGrid = document.querySelector("#cardGrid");
  const cardSearch = document.querySelector("#cardSearch");
  const resultLine = document.querySelector("#resultLine");
  const loadMore = document.querySelector("#loadMore");
  const mapHotspots = document.querySelector("#mapHotspots");
  const mapPanel = document.querySelector("#mapPanel");
  const scoreForm = document.querySelector("#scoreForm");
  const scoreOutput = document.querySelector("#scoreOutput");
  const modalElement = document.querySelector("#cardModal");

  function escapeHTML(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function cardId(card) {
    return `${card.deck}-${card.number}`;
  }

  function formatNumber(value) {
    return new Intl.NumberFormat("zh-TW").format(value);
  }

  function deckLabel(deck) {
    return data.deckMeta[deck]?.label || deck;
  }

  function deckClass(deck) {
    return `deck-${deck}`;
  }

  function renderMap() {
    if (!mapHotspots || !mapPanel) return;

    mapHotspots.innerHTML = data.boardSpaces
      .map(
        (space) => `
          <button
            class="map-hotspot"
            type="button"
            data-space="${space.no}"
            style="left:${space.x}%;top:${space.y}%;width:${space.w}%;height:${space.h}%"
            aria-label="第 ${space.no} 格：${escapeHTML(space.name)}，${escapeHTML(space.action)}"
          ></button>
        `,
      )
      .join("");

    mapHotspots.addEventListener("pointerover", (event) => {
      const button = event.target.closest("[data-space]");
      if (button) selectSpace(Number(button.dataset.space));
    });

    mapHotspots.addEventListener("focusin", (event) => {
      const button = event.target.closest("[data-space]");
      if (button) selectSpace(Number(button.dataset.space));
    });

    mapHotspots.addEventListener("click", (event) => {
      const button = event.target.closest("[data-space]");
      if (button) selectSpace(Number(button.dataset.space));
    });

    selectSpace(0);
  }

  function selectSpace(spaceNo) {
    const space = data.boardSpaces.find((item) => item.no === spaceNo) || data.boardSpaces[0];
    if (!space) return;

    state.activeSpace = space.no;
    mapHotspots?.querySelectorAll("[data-space]").forEach((button) => {
      button.classList.toggle("is-active", Number(button.dataset.space) === space.no);
    });

    mapPanel.innerHTML = `
      <div class="card-body">
        <span class="space-badge kind-${escapeHTML(space.kind)}">第 ${space.no} 格</span>
        <h3 class="h4 fw-black mt-3 mb-2">${escapeHTML(space.name)}</h3>
        <p class="fw-bold mb-2">${escapeHTML(space.action)}</p>
        <p class="text-secondary mb-0">${escapeHTML(space.tip)}</p>
      </div>
    `;
  }

  function renderTabs() {
    if (!deckTabs) return;

    deckTabs.innerHTML = deckOrder
      .filter((deck) => data.deckMeta[deck])
      .map((deck) => {
        const meta = data.deckMeta[deck];
        const active = state.deck === deck;
        const count = deck === "all" ? data.cards.length : meta.count;
        return `
          <button
            class="btn deck-tab ${active ? "btn-primary" : "btn-light"}"
            type="button"
            data-deck="${deck}"
            aria-pressed="${active}"
          >
            ${escapeHTML(meta.label)} <span class="badge text-bg-secondary ms-1">${count}</span>
          </button>
        `;
      })
      .join("");
  }

  function searchableText(card) {
    return [
      deckLabel(card.deck),
      card.number,
      card.title,
      card.summary,
      ...(card.details || []),
      ...(card.tags || []),
    ]
      .join(" ")
      .toLowerCase();
  }

  function filteredCards() {
    const query = state.query.trim().toLowerCase();
    return data.cards.filter((card) => {
      const deckOk = state.deck === "all" || card.deck === state.deck;
      const queryOk = !query || searchableText(card).includes(query);
      return deckOk && queryOk;
    });
  }

  function renderCards() {
    if (!cardGrid || !resultLine || !loadMore) return;

    const cards = filteredCards();
    const visibleCards = cards.slice(0, state.visible);
    resultLine.textContent = `目前顯示 ${visibleCards.length} / ${cards.length} 張卡牌`;
    loadMore.hidden = visibleCards.length >= cards.length;

    if (!cards.length) {
      cardGrid.innerHTML = `<div class="col-12"><p class="alert alert-light border fw-bold mb-0">沒有符合的卡牌，請換個關鍵字或分類。</p></div>`;
      return;
    }

    cardGrid.innerHTML = visibleCards.map(renderCard).join("");
  }

  function renderCard(card) {
    const label = card.deck === "special" ? card.subtitle : `${card.subtitle} ${String(card.number).padStart(2, "0")}`;
    const portrait = card.title.includes("借貸");

    return `
      <div class="col">
        <button class="card card-cover ${portrait ? "is-portrait" : ""} text-start w-100" type="button" data-card-id="${escapeHTML(cardId(card))}">
          <img src="${escapeHTML(card.image)}" alt="${escapeHTML(card.title)}卡面" loading="lazy" />
          <div class="card-body">
            <span class="deck-badge ${deckClass(card.deck)}">${escapeHTML(label)}</span>
            <h3 class="card-cover-title">${escapeHTML(card.title)}</h3>
            <p class="card-cover-summary">${escapeHTML(card.summary)}</p>
          </div>
        </button>
      </div>
    `;
  }

  function showCard(card) {
    if (!card) return;

    const label = card.deck === "special" ? card.subtitle : `${card.subtitle} ${String(card.number).padStart(2, "0")}`;
    document.querySelector("#modalDeck").textContent = label;
    document.querySelector("#modalTitle").textContent = card.title;
    document.querySelector("#modalImage").src = card.image;
    document.querySelector("#modalImage").alt = `${card.title}卡面`;
    document.querySelector("#modalSummary").textContent = card.summary;
    document.querySelector("#modalTags").innerHTML = (card.tags || [])
      .map((tag) => `<span class="badge rounded-pill text-bg-light border">${escapeHTML(tag)}</span>`)
      .join("");
    document.querySelector("#modalDetails").innerHTML = (card.details || [])
      .map((detail) => `<li>${escapeHTML(detail)}</li>`)
      .join("");

    if (window.bootstrap?.Modal) {
      window.bootstrap.Modal.getOrCreateInstance(modalElement).show();
      return;
    }

    modalElement.classList.add("show");
    modalElement.style.display = "block";
    modalElement.removeAttribute("aria-hidden");
  }

  function setupCards() {
    renderTabs();
    renderCards();

    deckTabs?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-deck]");
      if (!button) return;
      state.deck = button.dataset.deck;
      state.visible = 50;
      renderTabs();
      renderCards();
    });

    cardSearch?.addEventListener("input", (event) => {
      state.query = event.target.value;
      state.visible = 50;
      renderCards();
    });

    loadMore?.addEventListener("click", () => {
      state.visible += 50;
      renderCards();
    });

    cardGrid?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-card-id]");
      if (!button) return;
      showCard(data.cards.find((card) => cardId(card) === button.dataset.cardId));
    });
  }

  function setupScore() {
    if (!scoreForm || !scoreOutput) return;

    const read = (name) => Number(scoreForm.elements[name]?.value || 0);
    const update = () => {
      const score =
        read("cash") +
        read("savings") +
        read("passive") * 8 +
        read("tires") * 700 -
        read("debt") -
        read("fixed") * 3 +
        read("favor") * 1000;
      scoreOutput.textContent = formatNumber(score);
    };

    scoreForm.addEventListener("input", update);
    update();
  }

  function setupModalFallback() {
    modalElement?.addEventListener("click", (event) => {
      if (window.bootstrap?.Modal) return;
      if (!event.target.matches("[data-bs-dismiss='modal'], .btn-close")) return;
      modalElement.classList.remove("show");
      modalElement.style.display = "none";
      modalElement.setAttribute("aria-hidden", "true");
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape" || window.bootstrap?.Modal || !modalElement?.classList.contains("show")) return;
      modalElement.classList.remove("show");
      modalElement.style.display = "none";
      modalElement.setAttribute("aria-hidden", "true");
    });
  }

  function setupBootstrapFallbacks() {
    if (window.bootstrap) return;

    document.querySelectorAll("[data-bs-toggle='collapse']").forEach((button) => {
      button.addEventListener("click", () => {
        const target = document.querySelector(button.getAttribute("data-bs-target"));
        if (!target) return;
        const expanded = target.classList.toggle("show");
        button.setAttribute("aria-expanded", String(expanded));
      });
    });

    document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        const target = document.querySelector("#siteNav");
        const toggler = document.querySelector("[data-bs-target='#siteNav']");
        target?.classList.remove("show");
        toggler?.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderMap();
    setupCards();
    setupScore();
    setupModalFallback();
    setupBootstrapFallbacks();
  });
})();
