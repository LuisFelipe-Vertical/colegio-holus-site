/* Colégio Holus — scripts compartilhados por todas as páginas */
(function () {
  "use strict";

  // ---------- Dados fixos da escola (iguais ao site original) ----------
  const ESCOLA = {
    nome: "Colégio Holus FTD",
    endereco: "Av. Irmãs Cintra, 961 - Centro",
    cidade: "São Manuel - SP",
    cep: "18650-000",
    fone: "(14) 3841-5060",
    foneLink: "tel:+551438415060",
    email: "colegioholus@colegioholus.com.br",
    mapa: "https://goo.gl/maps/ES4UTD5LmFRs6Xca9",
    whats: "https://api.whatsapp.com/send?phone=5514991159887&text=ColegioHolusSite",
    whatsNum: "5514991159887",
    facebook: "https://www.facebook.com/Col%C3%A9gio-Holus-Objetivo-181601305249721/",
    facebookUnip: "https://www.facebook.com/UNIP-S%C3%A3o-Manuel-635206229988993/",
    instagram: "https://www.instagram.com/colegioholus/",
    portal: "http://portal.colegioholus.com.br/index.php",
    tarefas: "http://portal.colegioholus.com.br/Comunicados",
    boletim: "http://portal.colegioholus.com.br/Boletim",
  };
  window.ESCOLA = ESCOLA;

  // ---------- Ícones ----------
  const I = {
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    caret: '<svg class="caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="M22 7l-10 6L2 7"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s-8-6.6-8-13a8 8 0 0 1 16 0c0 6.4-8 13-8 13z"/><circle cx="12" cy="9" r="3"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8.5V6.6c0-.9.6-1.1 1-1.1h2.6V1.6L14 1.5c-4 0-4.9 3-4.9 4.9v2.1H6.8v4h2.3V22.5H14V12.5h3.3l.4-4z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"/></svg>',
    wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 0 1 2.2 12C2.2 6.6 6.6 2.2 12 2.2c2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 0 1 2.9 6.9c0 5.4-4.4 9.8-9.8 9.8zm8.4-18.2A11.8 11.8 0 0 0 12 .2C5.5.2.2 5.5.2 12c0 2.1.5 4.1 1.6 5.9L.1 23.9l6.1-1.6c1.7.9 3.7 1.4 5.7 1.4 6.5 0 11.8-5.3 11.8-11.8 0-3.1-1.2-6.1-3.3-8.3z"/></svg>',
    up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M6 11l6-6 6 6"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    left: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>',
    right: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
    photo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="5" width="18" height="15" rx="3"/><circle cx="9" cy="11" r="2"/><path d="M21 17l-5-5-8 8"/></svg>',
    video: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
  };
  window.HOLUS_ICONS = I;

  const page = document.body.dataset.page || "";

  // ---------- Cabeçalho ----------
  const menu = [
    { id: "home", label: "Home", href: "index.html" },
    { id: "institucional", label: "Institucional", href: "institucional.html", sub: [
      ["Sobre Nós", "institucional.html#holus"], ["Sistema FTD", "institucional.html#ftd"],
      ["EAD UNIP", "institucional.html#unip"], ["Nossa Estrutura", "institucional.html#estrutura"] ] },
    { id: "novidades", label: "Novidades", href: "novidades.html", sub: [
      ["Eventos e Notícias", "novidades.html#eventos"], ["Atividades Extras", "novidades.html#atividades"] ] },
    { id: "cursos", label: "Cursos", href: "cursos.html", sub: [
      ["Educação Infantil", "cursos.html#infantil"], ["Ensino Fundamental", "cursos.html#fundamental"], ["Ensino Médio", "cursos.html#medio"] ] },
    { id: "contato", label: "Fale Conosco", href: "contato.html" },
    { id: "portal", label: "Portal Restrito", href: ESCOLA.portal, ext: true, cls: "portal", sub: [
      ["Tarefas", ESCOLA.tarefas, true], ["Boletim", ESCOLA.boletim, true] ] },
  ];
  const ext = e => (e ? ' target="_blank" rel="noopener"' : "");
  const navHtml = menu.map(m => `
    <div class="nav-item ${m.cls || ""} ${page === m.id ? "active" : ""}">
      <a href="${m.href}"${ext(m.ext)}>${m.label}${m.sub ? I.caret : ""}</a>
      ${m.sub ? `<div class="dropdown">${m.sub.map(s => `<a href="${s[1]}"${ext(s[2])}>${s[0]}</a>`).join("")}</div>` : ""}
    </div>`).join("");

  document.body.insertAdjacentHTML("afterbegin", `
    <div class="topbar"><div class="container">
      <div class="tb-left">
        <span>${I.phone}<a href="${ESCOLA.foneLink}">${ESCOLA.fone}</a></span>
        <span class="hide-sm">${I.mail}<a href="mailto:${ESCOLA.email}">${ESCOLA.email}</a></span>
        <span class="hide-sm">${I.pin}${ESCOLA.endereco} · ${ESCOLA.cidade}</span>
      </div>
      <div class="tb-social">
        <a href="${ESCOLA.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${I.fb}</a>
        <a href="${ESCOLA.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${I.ig}</a>
        <a href="${ESCOLA.whats}" target="_blank" rel="noopener" aria-label="WhatsApp">${I.wa}</a>
      </div>
    </div></div>
    <header class="header"><div class="container">
      <a class="brand" href="index.html" aria-label="Colégio Holus — início"><img src="img/logo.png" alt="Colégio Holus FTD"></a>
      <nav class="nav" aria-label="Menu principal">${navHtml}</nav>
      <button class="burger" aria-label="Abrir menu"><span></span></button>
    </div></header>`);

  // ---------- Rodapé ----------
  document.body.insertAdjacentHTML("beforeend", `
    <footer class="footer">
      <div class="footer-wave"><svg viewBox="0 0 1440 60" preserveAspectRatio="none"><path fill="#ffffff" d="M0 0h1440v20c-240 40-480 40-720 10S240-10 0 30z"/></svg></div>
      <div class="container">
        <div class="footer-grid">
          <div>
            <img class="f-logo" src="img/slide4.png" alt="Colégio Holus FTD">
            <p>A melhor escola de São Manuel e região! Acompanhe as novidades do Colégio Holus nas Redes Sociais.</p>
            <a class="f-matric" href="${ESCOLA.foneLink}">Matrículas Abertas: ${ESCOLA.fone}</a>
          </div>
          <div>
            <h4>Navegação</h4>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="institucional.html">Institucional</a></li>
              <li><a href="novidades.html">Novidades</a></li>
              <li><a href="cursos.html">Cursos</a></li>
              <li><a href="contato.html">Fale Conosco</a></li>
            </ul>
          </div>
          <div>
            <h4>Portal Restrito</h4>
            <ul>
              <li><a href="${ESCOLA.portal}" target="_blank" rel="noopener">Portal do Aluno</a></li>
              <li><a href="${ESCOLA.tarefas}" target="_blank" rel="noopener">Tarefas</a></li>
              <li><a href="${ESCOLA.boletim}" target="_blank" rel="noopener">Boletim</a></li>
              <li><a href="${ESCOLA.tarefas}" target="_blank" rel="noopener">Calendário Acadêmico</a></li>
            </ul>
            <div class="partners"><img src="img/slide2.png" alt="FTD Sistema de Ensino"><img src="img/slide3.png" alt="EAD UNIP"></div>
          </div>
          <div>
            <h4>Atendimento</h4>
            <ul>
              <li><strong style="color:#fff">COLÉGIO HOLUS FTD</strong></li>
              <li>${ESCOLA.endereco}<br>${ESCOLA.cidade} CEP: ${ESCOLA.cep}</li>
              <li>Fone: <a href="${ESCOLA.foneLink}">${ESCOLA.fone}</a></li>
              <li>E-Mail: <a href="mailto:${ESCOLA.email}">${ESCOLA.email}</a></li>
              <li><a href="${ESCOLA.mapa}" target="_blank" rel="noopener">Acesse o mapa interativo no Google Maps →</a></li>
            </ul>
            <div class="socials">
              <a href="${ESCOLA.facebook}" target="_blank" rel="noopener" aria-label="Facebook do Colégio Holus">${I.fb}</a>
              <a href="${ESCOLA.facebookUnip}" target="_blank" rel="noopener" aria-label="Facebook da UNIP São Manuel">${I.fb}</a>
              <a href="${ESCOLA.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${I.ig}</a>
              <a href="${ESCOLA.whats}" target="_blank" rel="noopener" aria-label="WhatsApp">${I.wa}</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} Colégio Holus · São Manuel - SP</span>
          <span>Av. Irmãs Cintra, 961 - Centro</span>
        </div>
      </div>
    </footer>
    <a class="wa-float" href="${ESCOLA.whats}" target="_blank" rel="noopener" aria-label="Fale pelo WhatsApp">${I.wa}</a>
    <button class="to-top" aria-label="Voltar ao topo">${I.up}</button>`);

  // ---------- Comportamento do cabeçalho / menu ----------
  const header = document.querySelector(".header");
  const toTop = document.querySelector(".to-top");
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 20);
    toTop.classList.toggle("show", y > 700);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  document.querySelector(".burger").addEventListener("click", () => document.body.classList.toggle("menu-open"));
  document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => document.body.classList.remove("menu-open")));
  document.addEventListener("click", e => {
    if (document.body.classList.contains("menu-open") && !e.target.closest(".nav, .burger")) document.body.classList.remove("menu-open");
  });

  // ---------- Títulos palavra por palavra ----------
  document.querySelectorAll("[data-split]").forEach(el => {
    let i = 0;
    const walk = node => {
      [...node.childNodes].forEach(n => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
            const s = document.createElement("span");
            s.className = "w"; s.style.setProperty("--i", i++); s.textContent = part;
            frag.appendChild(s);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1) walk(n);
      });
    };
    walk(el);
    el.classList.add("split-words");
  });

  // ---------- Revelar ao rolar ----------
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  window.holusReveal = root => (root || document).querySelectorAll(".reveal:not(.in), .tl-item:not(.in)").forEach(el => io.observe(el));
  window.holusReveal();

  // ---------- Contadores ----------
  const cio = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target; cio.unobserve(el);
      const to = +el.dataset.count, from = +(el.dataset.from || 0), suf = el.dataset.suffix || "", pre = el.dataset.prefix || "";
      const t0 = performance.now(), dur = 1800;
      const tick = t => {
        const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 4);
        el.textContent = pre + Math.round(from + (to - from) * e).toLocaleString("pt-BR").replace(/\./g, el.dataset.nosep ? "" : ".") + suf;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll("[data-count]").forEach(el => cio.observe(el));

  // ---------- Linha do tempo: barra de progresso ----------
  const tl = document.querySelector(".timeline");
  if (tl) {
    const bar = tl.querySelector(".progress");
    const upd = () => {
      const r = tl.getBoundingClientRect(), vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.6 - r.top) / r.height));
      bar.style.height = p * 100 + "%";
    };
    window.addEventListener("scroll", upd, { passive: true }); upd();
  }

  // ---------- Parallax suave ----------
  const par = [...document.querySelectorAll("[data-parallax]")];
  if (par.length && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const run = () => par.forEach(el => {
      const r = el.getBoundingClientRect();
      const k = parseFloat(el.dataset.parallax) || 0.1;
      el.style.transform = `translateY(${(r.top + r.height / 2 - innerHeight / 2) * -k}px)`;
    });
    window.addEventListener("scroll", run, { passive: true }); run();
  }

  // ---------- Lightbox ----------
  document.body.insertAdjacentHTML("beforeend", `
    <div class="lightbox" role="dialog" aria-modal="true" aria-label="Foto ampliada">
      <button class="lb-btn lb-close" aria-label="Fechar">${I.close}</button>
      <button class="lb-btn prev" aria-label="Anterior">${I.left}</button>
      <img alt="">
      <button class="lb-btn next" aria-label="Próxima">${I.right}</button>
      <div class="cap"></div>
    </div>`);
  const lb = document.querySelector(".lightbox"), lbImg = lb.querySelector("img"), lbCap = lb.querySelector(".cap");
  let lbList = [], lbIdx = 0;
  const lbShow = () => {
    const it = lbList[lbIdx];
    lbImg.style.animation = "none"; void lbImg.offsetWidth; lbImg.style.animation = "";
    lbImg.onerror = () => { if (it.fallback && lbImg.src !== it.fallback) lbImg.src = it.fallback; };
    lbImg.src = it.src; lbCap.textContent = (it.cap ? it.cap + " · " : "") + (lbIdx + 1) + " / " + lbList.length;
  };
  window.openLightbox = (list, idx) => { lbList = list; lbIdx = idx || 0; lbShow(); lb.classList.add("open"); };
  const lbClose = () => lb.classList.remove("open");
  lb.querySelector(".lb-close").onclick = lbClose;
  lb.querySelector(".prev").onclick = e => { e.stopPropagation(); lbIdx = (lbIdx - 1 + lbList.length) % lbList.length; lbShow(); };
  lb.querySelector(".next").onclick = e => { e.stopPropagation(); lbIdx = (lbIdx + 1) % lbList.length; lbShow(); };
  lb.addEventListener("click", e => { if (e.target === lb) lbClose(); });
  document.addEventListener("keydown", e => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") lbClose();
    if (e.key === "ArrowLeft") lb.querySelector(".prev").click();
    if (e.key === "ArrowRight") lb.querySelector(".next").click();
  });

  // ---------- Notícias ----------
  const POSTS = window.HOLUS_POSTS || [];
  const COVERS = window.HOLUS_COVERS || {};
  const MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
  const MESES_L = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  const strip = h => { const d = document.createElement("div"); d.innerHTML = h; return d.textContent; };
  const excerpt = p => strip(p.body.join(" ")).replace(/#\S+/g, "").replace(/\s+/g, " ").trim().slice(0, 190);

  function card(p, i) {
    const [y, m, d] = p.date.split("-");
    const cover = COVERS[p.id];
    const nImg = p.images.length, nVid = p.videos.length;
    return `
      <button class="news-card reveal" style="--d:${(i % 3) * 0.08}s" data-id="${p.id}" aria-label="Ler: ${p.title.replace(/"/g, "&quot;")}">
        <div class="thumb">
          ${cover ? `<img loading="lazy" src="${cover}" alt="">`
                  : `<div class="ph"><img src="img/slide4.png" alt=""></div>`}
          <div class="date-badge"><b>${d}</b><small>${MESES[+m - 1]} ${y}</small></div>
          ${nImg > 1 || nVid ? `<span class="media-count">${nImg > 1 ? I.photo + nImg : ""}${nVid ? " " + I.video + nVid : ""}</span>` : ""}
        </div>
        <div class="body">
          <div class="cat">${p.cats.join(" · ")}</div>
          <h3>${p.title}</h3>
          <p>${excerpt(p)}${excerpt(p).length >= 190 ? "…" : ""}</p>
          <span class="read">ler mais ${I.arrow}</span>
        </div>
      </button>`;
  }

  // modal
  document.body.insertAdjacentHTML("beforeend", `
    <div class="modal" role="dialog" aria-modal="true"><div class="modal-box">
      <button class="modal-close" aria-label="Fechar">${I.close}</button>
      <div class="modal-inner"></div>
    </div></div>`);
  const modal = document.querySelector(".modal"), modalInner = modal.querySelector(".modal-inner");
  const closeModal = () => {
    modal.classList.remove("open"); document.body.style.overflow = "";
    modalInner.querySelectorAll("video").forEach(v => v.pause());
    if (location.hash.startsWith("#post-")) history.replaceState(null, "", location.pathname + location.search);
  };
  modal.querySelector(".modal-close").onclick = closeModal;
  modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && modal.classList.contains("open") && !lb.classList.contains("open")) closeModal(); });

  function openPost(id) {
    const p = POSTS.find(x => x.id == id);
    if (!p) return;
    const [y, m, d] = p.date.split("-");
    const hero = COVERS[p.id] || (p.images[0] && p.images[0].t);
    const imgs = p.images.map(im => ({ src: im.f, fallback: im.t, cap: p.title }));
    modalInner.innerHTML = `
      ${hero ? `<div class="modal-hero"><img src="${hero}" alt="" onerror="this.parentNode.remove()"></div>` : ""}
      <div class="modal-content">
        <div class="meta"><span class="cat">${p.cats.join(" · ")}</span><span>${+d} de ${MESES_L[+m - 1]} de ${y}</span></div>
        <h2>${p.title}</h2>
        <div class="text">${p.body.map(t => `<p>${t}</p>`).join("")}</div>
        ${p.videos.length ? `<div class="modal-videos">${p.videos.map(v => `<video controls preload="metadata" playsinline src="${v}"></video>`).join("")}</div>` : ""}
        ${p.images.length > 1 ? `<div class="modal-gallery">${p.images.map((im, i) => `<button data-i="${i}" aria-label="Ampliar foto ${i + 1}"><img loading="lazy" src="${im.t}" alt="" onerror="this.closest('button').remove()"></button>`).join("")}</div>` : ""}
        <div class="modal-source">Publicado originalmente em <a href="${p.link}" target="_blank" rel="noopener">colegioholus.com.br</a></div>
      </div>`;
    modalInner.querySelectorAll(".modal-gallery button").forEach(b => b.onclick = () => openLightbox(imgs, +b.dataset.i));
    const heroImg = modalInner.querySelector(".modal-hero img");
    if (heroImg && imgs.length) heroImg.style.cursor = "zoom-in", heroImg.onclick = () => openLightbox(imgs, 0);
    modal.classList.add("open"); modal.scrollTop = 0; document.body.style.overflow = "hidden";
    history.replaceState(null, "", "#post-" + p.id);
  }
  window.openPost = openPost;
  document.addEventListener("click", e => {
    const c = e.target.closest(".news-card");
    if (c) openPost(c.dataset.id);
  });

  // Home: últimas 6
  const latest = document.getElementById("latest-news");
  if (latest) {
    latest.innerHTML = POSTS.slice(0, 6).map(card).join("");
    window.holusReveal(latest);
  }

  // Página Novidades: todas, com filtros, busca e "carregar mais"
  const all = document.getElementById("all-news");
  if (all) {
    const filtersEl = document.getElementById("news-filters");
    const searchEl = document.getElementById("news-search");
    const titleEl = document.getElementById("news-title");
    const groups = [
      ["todas", "Todas", () => true],
      ["novidades", "Novidades", p => p.cats.includes("Novidades")],
      ["eventos", "Eventos e Notícias", p => p.cats.includes("Eventos Realizados") || p.cats.includes("Notícias")],
      ["atividades", "Atividades Extras", p => p.cats.includes("Atividades")],
      ["gerais", "Assuntos Gerais", p => p.cats.includes("Assuntos Gerais")],
    ];
    let cur = "todas", q = "", shown = 12;
    filtersEl.innerHTML = groups.map(g => `<button class="chip" data-g="${g[0]}">${g[1]}<span class="n">${POSTS.filter(g[2]).length}</span></button>`).join("");
    const norm = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
    function render() {
      const g = groups.find(x => x[0] === cur);
      filtersEl.querySelectorAll(".chip").forEach(c => c.classList.toggle("on", c.dataset.g === cur));
      if (titleEl) titleEl.textContent = cur === "todas" ? "Todas as publicações" : g[1];
      let list = POSTS.filter(g[2]);
      if (q) list = list.filter(p => norm(p.title + " " + strip(p.body.join(" "))).includes(norm(q)));
      const vis = list.slice(0, shown);
      let html = "", lastY = "";
      vis.forEach((p, i) => {
        const y = p.date.slice(0, 4);
        if (y !== lastY) { html += `<div class="year-sep">${y}</div>`; lastY = y; }
        html += card(p, i);
      });
      all.innerHTML = html || `<div class="empty">Nenhuma publicação encontrada.</div>`;
      document.getElementById("news-more").style.display = list.length > shown ? "" : "none";
      window.holusReveal(all);
    }
    filtersEl.addEventListener("click", e => {
      const c = e.target.closest(".chip"); if (!c) return;
      cur = c.dataset.g; shown = 12; render();
      history.replaceState(null, "", cur === "todas" ? location.pathname : "#" + cur);
    });
    searchEl.addEventListener("input", () => { q = searchEl.value.trim(); shown = 12; render(); });
    document.getElementById("news-more").querySelector("button").onclick = () => { shown += 12; render(); };
    const h = location.hash.slice(1);
    if (groups.some(g => g[0] === h)) cur = h;
    render();
    window.addEventListener("hashchange", () => {
      const h2 = location.hash.slice(1);
      if (groups.some(g => g[0] === h2)) { cur = h2; shown = 12; render(); document.getElementById("lista").scrollIntoView(); }
    });
  }
  // abrir post direto por link (#post-123)
  const m = location.hash.match(/^#post-(\d+)/);
  if (m) setTimeout(() => openPost(m[1]), 300);

  // ---------- Formulário de contato ----------
  // O site novo é estático (sem servidor). O formulário monta a mensagem
  // e abre o WhatsApp ou o e-mail da escola já preenchidos.
  document.querySelectorAll("form.contact-form").forEach(form => {
    const build = () => {
      const f = new FormData(form);
      return `Olá! Contato pelo site do Colégio Holus.\n\nNome: ${f.get("nome")}\nE-mail: ${f.get("email")}\nTelefone: ${f.get("telefone")}\nCidade: ${f.get("cidade")}\nMotivo do contato: ${f.get("motivo")}\n\nMensagem:\n${f.get("mensagem")}`;
    };
    form.addEventListener("submit", e => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const via = e.submitter && e.submitter.dataset.via;
      const msg = build();
      if (via === "email") {
        location.href = `mailto:${ESCOLA.email}?subject=${encodeURIComponent("Contato pelo site — " + new FormData(form).get("motivo"))}&body=${encodeURIComponent(msg)}`;
      } else {
        window.open(`https://api.whatsapp.com/send?phone=${ESCOLA.whatsNum}&text=${encodeURIComponent(msg)}`, "_blank", "noopener");
      }
    });
  });

  // ---------- Galeria (estrutura) ----------
  document.querySelectorAll(".gallery").forEach(gal => {
    const items = () => [...gal.querySelectorAll(".g-item:not(.hide)")];
    gal.addEventListener("click", e => {
      const it = e.target.closest(".g-item"); if (!it) return;
      const list = items();
      openLightbox(list.map(x => ({ src: x.querySelector("img").src, cap: x.dataset.cap })), list.indexOf(it));
    });
    const filt = document.querySelector(`[data-gallery-filter="${gal.id}"]`);
    if (filt) filt.addEventListener("click", e => {
      const c = e.target.closest(".chip"); if (!c) return;
      filt.querySelectorAll(".chip").forEach(x => x.classList.toggle("on", x === c));
      const g = c.dataset.g;
      gal.querySelectorAll(".g-item").forEach(x => x.classList.toggle("hide", g !== "todas" && x.dataset.g !== g));
    });
  });
})();
