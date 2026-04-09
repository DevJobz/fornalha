/* ======================================================
   FORNALHA PIZZARIA — main.js v1.0
   ====================================================== */
'use strict';

const WPP = '5514996450258';
const WPP_BASE = 'https://wa.me/' + WPP + '?text=';
const $ = (s,c) => (c||document).querySelector(s);
const $$ = (s,c) => [...(c||document).querySelectorAll(s)];
const wpp = msg => WPP_BASE + encodeURIComponent(msg);
const brl = v => 'R$\u00a0' + v.toFixed(2).replace('.',',');
const sts = n => '★'.repeat(n) + '☆'.repeat(5-n);

/* ── SVGs ───────────────────────────────────────────── */
const I = {
  wpp:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.558 4.121 1.533 5.849L.057 23.5l5.797-1.522A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.659-.501-5.188-1.376l-.371-.22-3.441.904.92-3.362-.241-.387A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>`,
  map:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  clk:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  phn:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.16 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  ig:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  fb:   `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>`,
  arL:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15,18 9,12 15,6"/></svg>`,
  arR:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9,18 15,12 9,6"/></svg>`,
  zoom: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>`,
  cls:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  cal:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  fire: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2c0 6-6 8-6 14a6 6 0 0012 0c0-6-6-8-6-14z"/><path d="M12 12c0 3-2 4-2 6a2 2 0 004 0c0-2-2-3-2-6z"/></svg>`,
  piz:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l9 17H3L12 2z"/><path d="M12 8v5"/><path d="M9 14h6"/></svg>`,
  sz:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  soc:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
};
const DICONS = { calendar:I.cal, fire:I.fire, pizza:I.piz, size:I.sz };

/* ── fetch all JSONs ─────────────────────────────────── */
async function carregarDados() {
  const urls = [
    '/dados/navbar.json', '/dados/hero.json', '/dados/historia.json',
    '/dados/diferenciais.json', '/dados/cardapio.json', '/dados/galeria.json',
    '/dados/depoimentos.json', '/dados/empresa.json',
    '/dados/combos.json',
  ];
  try {
    const rs = await Promise.all(urls.map(u => fetch(u)));
    const ds = await Promise.all(rs.map((r,i) => { if(!r.ok) throw new Error(urls[i]); return r.json(); }));
    return { navbar:ds[0], hero:ds[1], historia:ds[2], diferenciais:ds[3],
             cardapio:ds[4], galeria:ds[5], depoimentos:ds[6], empresa:ds[7], combos:ds[8] };
  } catch(e) { console.error('[Fornalha]', e); return null; }
}

/* ── NAVBAR ─────────────────────────────────────────── */
function renderNavbar(d) {
  const el = $('#navbar'); if(!el||!d) return;
  el.innerHTML = `<div class="container"><div class="nav-inner">
    <a href="#hero" class="nav-logo" aria-label="${d.logo_alt}">
      <img src="${d.logo_url}" alt="${d.logo_alt}" onerror="this.style.display='none'">
    </a>
    <div class="nav-overlay" id="navOverlay"></div>
    <nav>
      <ul class="nav-menu" id="navMenu">
        ${d.links.map(l=>`<li><a class="nav-link" href="${l.href}">${l.label}</a></li>`).join('')}
        <li><a class="nav-cta" href="${wpp(d.cta_whatsapp)}" target="_blank" rel="noopener">${d.cta_label}</a></li>
      </ul>
    </nav>
    <button class="nav-burger" id="navBurger" aria-label="Menu"><span></span><span></span><span></span></button>
  </div></div>`;
}
function initNavbar() {
  const nb=$('#navbar'), b=$('#navBurger'), m=$('#navMenu'), ov=$('#navOverlay');
  if(!nb) return;
  const sc=()=>nb.classList.toggle('scrolled',scrollY>50);
  window.addEventListener('scroll',sc,{passive:true}); sc();
  if(b&&m&&ov){
    const tog=o=>{b.classList.toggle('aberto',o);m.classList.toggle('aberto',o);ov.classList.toggle('ativo',o);document.body.style.overflow=o?'hidden':''};
    b.addEventListener('click',()=>tog(!m.classList.contains('aberto')));
    ov.addEventListener('click',()=>tog(false));
    $$('.nav-link',m).forEach(l=>l.addEventListener('click',()=>tog(false)));
  }
}

/* ── HERO ───────────────────────────────────────────── */
function renderHero(d) {
  const el=$('#hero'); if(!el||!d) return;
  el.innerHTML=`
    <div class="hero-bg" style="background-image:url('${d.imagem_fundo}')"></div>
    <div class="hero-overlay"></div>
    <canvas id="flame-canvas" aria-hidden="true"></canvas>
    <div class="hero-content">
      <span class="hero-badge-pill">${d.badge}</span>
      <h1 class="hero-titulo">${d.titulo_linha1}<em>${d.titulo_linha2}</em></h1>
      <p class="hero-sub">${d.subtitulo}</p>
      <div class="hero-acoes">
        <a class="btn btn-fogo" href="${d.cta_principal_href}"><span>${d.cta_principal_label}</span></a>
        <a class="btn btn-outline" href="${wpp(d.cta_wpp_msg)}" target="_blank" rel="noopener">${I.wpp} ${d.cta_wpp_label}</a>
      </div>
    </div>
    <div class="hero-stats"><div class="hero-stat-row">
      <div class="hero-stat"><div class="hero-stat-num">${d.stat_1_num}</div><div class="hero-stat-label">${d.stat_1_label}</div></div>
      <div class="hero-stat"><div class="hero-stat-num">${d.stat_2_num}</div><div class="hero-stat-label">${d.stat_2_label}</div></div>
      <div class="hero-stat"><div class="hero-stat-num"><em>${d.stat_3_txt}</em></div><div class="hero-stat-label">${d.stat_3_label}</div></div>
    </div></div>`;
  requestAnimationFrame(()=>el.classList.add('loaded'));
}

/* ── FLAMES (Canvas) ────────────────────────────────── */
function initFlames() {
  const cv=$('#flame-canvas'); if(!cv) return;
  const ctx=cv.getContext('2d'); let particles=[], raf;
  const resize=()=>{cv.width=cv.offsetWidth;cv.height=cv.offsetHeight};
  class Flame {
    constructor(x) {
      this.x=x+(Math.random()-0.5)*40; this.y=cv.height;
      this.vy=-(Math.random()*3.5+2.5);
      this.vx=(Math.random()-0.5)*0.9;
      this.life=Math.random()*90+60; this.age=0;
      this.r=Math.random()*4+2;
      this.hue=Math.random()*30+5; // 5-35: red-orange-yellow
    }
    get alpha(){return Math.max(0,1-this.age/this.life)}
    get dead(){return this.age>=this.life||this.y<-20}
    update(){this.x+=this.vx;this.y+=this.vy;this.vy*=0.97;this.vx*=0.98;this.r*=0.984;this.age++;}
    draw(){
      const g=ctx.createRadialGradient(this.x,this.y,0,this.x,this.y,this.r*2.5);
      const sat=90+this.age/this.life*(-30);
      const lit=50+this.age/this.life*20;
      g.addColorStop(0,`hsla(${this.hue},${sat}%,${lit}%,${this.alpha})`);
      g.addColorStop(0.5,`hsla(${this.hue+15},${sat}%,${lit-20}%,${this.alpha*0.6})`);
      g.addColorStop(1,`hsla(${this.hue+25},80%,30%,0)`);
      ctx.save();ctx.fillStyle=g;ctx.beginPath();
      ctx.arc(this.x,this.y,this.r*2.5,0,Math.PI*2);ctx.fill();ctx.restore();
    }
  }
  const sources=[0.3,0.5,0.7]; // 3 focal points across width
  function frame(){
    ctx.clearRect(0,0,cv.width,cv.height);
    if(Math.random()<0.7){
      const sx=sources[Math.floor(Math.random()*sources.length)];
      const burst=Math.floor(Math.random()*3)+1;
      for(let i=0;i<burst;i++) particles.push(new Flame(cv.width*sx));
    }
    particles=particles.filter(p=>!p.dead);
    particles.forEach(p=>{p.update();p.draw();});
    raf=requestAnimationFrame(frame);
  }
  window.addEventListener('resize',resize,{passive:true}); resize();
  const obs=new IntersectionObserver(([e])=>e.isIntersecting?frame():cancelAnimationFrame(raf));
  const hero=$('#hero'); if(hero)obs.observe(hero); else frame();
}

/* ── HISTÓRIA ───────────────────────────────────────── */
function renderHistoria(d) {
  const el=$('#historia'); if(!el||!d) return;
  const pars=d.texto.split('\n\n').filter(Boolean).map(p=>`<p>${p.trim()}</p>`).join('');
  el.innerHTML=`<div class="container"><div class="grid-2">
    <div class="historia-texto anim-left">
      <div class="badge">${d.badge}</div>
      <h2 class="secao-titulo">${d.titulo}</h2>
      <div class="historia-corpo">${pars}</div>
      <div class="historia-assinatura">
        <span class="historia-linha"></span>
        <span class="historia-sig-txt">${d.assinatura}</span>
      </div></div>
    <div class="historia-img-col anim-right">
      <div class="historia-moldura">
        <img class="historia-img" src="${d.imagem}" alt="${d.imagem_alt}" loading="lazy"
             onerror="this.src='https://picsum.photos/seed/pizzeria/700/500'">
        <div class="historia-ano-badge">
          <em class="historia-ano-num">2022</em>
          <span class="historia-ano-txt">Fundada em<br>Piratininga</span>
        </div></div></div>
  </div></div>`;
}

/* ── DIFERENCIAIS ───────────────────────────────────── */
function renderDiferenciais(d) {
  const el=$('#diferenciais'); if(!el||!d) return;
  const cards=d.items.map((it,i)=>`
    <div class="dif-card anim-fade delay-${i+1}">
      <div class="dif-icon">${DICONS[it.icone]||I.fire}</div>
      <div class="dif-titulo">${it.titulo}</div>
      <p class="dif-texto">${it.texto}</p>
    </div>`).join('');
  el.innerHTML=`<div class="container">
    <div class="secao-header anim-fade">
      <div class="badge">${d.badge}</div>
      <h2 class="secao-titulo">${d.titulo}</h2>
    </div>
    <div class="difs-grid">${cards}</div>
  </div>`;
}

/* ── CARDÁPIO ───────────────────────────────────────── */
function renderCardapio(d) {
  const el=$('#cardapio'); if(!el||!d) return;
  const cats=d.categorias||[];
  const bordas=d.bordas_recheadas;

  const tabsHTML=cats.map((c,i)=>`
    <button class="cat-tab${i===0?' ativa':''}" data-cat="${c.id}">
      ${c.nome}<span class="cat-count">${c.pizzas.length}</span>
    </button>`).join('');

  const panelsHTML=cats.map((c,i)=>{
    const grid=c.pizzas.map(p=>`
      <div class="pizza-card anim-fade" data-nome="${p.nome.toLowerCase()}" data-cat="${c.id}">
        <div class="pizza-card-top">
          <div class="pizza-num">${p.numero}</div>
          <div class="pizza-info">
            <div class="pizza-nome">${p.nome}</div>
            <div class="pizza-desc">${p.descricao}</div>
          </div>
        </div>
        <div class="pizza-precos">
          <div class="pizza-preco">
            <span class="pizza-preco-tam">Média</span>
            <span class="pizza-preco-val">${brl(p.tamanhos.media)}</span>
          </div>
          <div class="pizza-preco">
            <span class="pizza-preco-tam">Grande</span>
            <span class="pizza-preco-val">${brl(p.tamanhos.grande)}</span>
          </div>
          <div class="pizza-preco destaque">
            <span class="pizza-preco-tam">🔥 Gigante</span>
            <span class="pizza-preco-val">${brl(p.tamanhos.gigante)}</span>
          </div>
        </div>
        <a class="btn-pedir"
           href="${wpp(`Olá! Vim pelo site e gostaria de pedir a pizza *${p.nome}* (${p.descricao}). Qual a disponibilidade?`)}"
           target="_blank" rel="noopener" aria-label="Pedir ${p.nome} pelo WhatsApp">
          ${I.wpp} Pedir esta pizza
        </a>
      </div>`).join('');
    return `<div class="cat-panel${i===0?' ativo':''}" id="panel-${c.id}" role="tabpanel">
      <div class="pizzas-grid" id="grid-${c.id}">${grid}</div>
    </div>`;
  }).join('');

  // Bordas banner
  const bordasHTML = bordas ? `
    <div class="bordas-banner anim-fade">
      <div class="bordas-icon">🍕</div>
      <div class="bordas-info">
        <h4>+ Bordas Recheadas</h4>
        <p>Dê um upgrade na sua pizza! Escolha um recheio especial para a borda:</p>
        <div class="bordas-sabores">
          ${bordas.sabores.map(s=>`<span class="borda-tag">${s}</span>`).join('')}
        </div>
        <div class="bordas-precos">
          <div class="borda-preco"><span class="borda-preco-tam">Média</span><span class="borda-preco-val">${brl(bordas.precos.media)}</span></div>
          <div class="borda-preco"><span class="borda-preco-tam">Grande</span><span class="borda-preco-val">${brl(bordas.precos.grande)}</span></div>
          <div class="borda-preco"><span class="borda-preco-tam">Gigante</span><span class="borda-preco-val">${brl(bordas.precos.gigante)}</span></div>
        </div>
      </div>
    </div>` : '';

  el.innerHTML=`<div class="container">
    <div class="secao-header anim-fade">
      <div class="badge">+ de 90 Sabores</div>
      <h2 class="secao-titulo">Nosso <em>Cardápio</em></h2>
    </div>
    <div class="cardapio-busca-wrap">
      <input class="cardapio-busca" id="pizzaBusca" type="search"
             placeholder="🔍  Buscar pizza por nome ou ingrediente…" autocomplete="off">
    </div>
    <div class="cat-tabs" role="tablist">${tabsHTML}</div>
    <div id="catPanels">${panelsHTML}</div>
    ${bordasHTML}
  </div>`;
}

function initCardapio() {
  const tabs=$$('.cat-tab');
  const busca=$('#pizzaBusca');
  if(!tabs.length) return;

  // Troca de aba
  tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
      tabs.forEach(t=>t.classList.remove('ativa'));
      tab.classList.add('ativa');
      const catId=tab.dataset.cat;
      $$('.cat-panel').forEach(p=>p.classList.remove('ativo'));
      const panel=$(`#panel-${catId}`);
      if(panel) panel.classList.add('ativo');
      // Limpa busca ao mudar aba
      if(busca) { busca.value=''; filtrarPizzas(''); }
    });
  });

  // Busca cross-categoria
  if(busca){
    busca.addEventListener('input', e => filtrarPizzas(e.target.value.toLowerCase().trim()));
  }
}

function filtrarPizzas(termo) {
  if(!termo) {
    // restaura estado normal
    $$('.cat-panel').forEach(p=>{
      p.classList.remove('ativo');
      $$('.pizza-card',p).forEach(c=>{ c.style.display=''; });
      const nenhum=$('.nenhum-resultado',p); if(nenhum) nenhum.remove();
    });
    const primeiraTab=$('.cat-tab.ativa');
    const catId=primeiraTab?primeiraTab.dataset.cat:$$('.cat-tab')[0]?.dataset.cat;
    if(catId) { const p=$(`#panel-${catId}`); if(p) p.classList.add('ativo'); }
    return;
  }
  // Mostra todos os painéis e filtra
  $$('.cat-panel').forEach(p=>{
    p.classList.add('ativo');
    const cards=$$('.pizza-card',p);
    let vis=0;
    cards.forEach(c=>{
      const nome=c.dataset.nome||'';
      const desc=(c.querySelector('.pizza-desc')?.textContent||'').toLowerCase();
      const match=nome.includes(termo)||desc.includes(termo);
      c.style.display=match?'':'none';
      if(match) vis++;
    });
    const nenhum=$('.nenhum-resultado',p); if(nenhum) nenhum.remove();
    if(vis===0){
      const div=document.createElement('div');
      div.className='nenhum-resultado';
      div.innerHTML='<span>🍕</span>Nenhuma pizza encontrada nesta categoria.';
      p.querySelector('.pizzas-grid')?.appendChild(div);
    }
  });
}

/* ── COMBOS ─────────────────────────────────────── */
function renderCombos(d) {
  const el=$('#combos'); if(!el||!d) return;
  const cards=d.items.map(c=>`
    <div class="combo-card anim-fade${c.destaque?' destaque':''}">
      <img class="combo-img" src="${c.imagem}" alt="Combo ${c.numero}"
           loading="lazy" onerror="this.src='https://picsum.photos/seed/combo${c.numero}/600/400'">
      <div class="combo-body">
        <div class="combo-header">
          <div class="combo-num">${c.numero}</div>
          <div class="combo-titulo">Combo ${c.numero}</div>
        </div>
        <div class="combo-itens">
          ${c.itens.map(it=>`<span class="combo-item">${it}</span>`).join('')}
        </div>
        <div class="combo-preco-wrap">
          <div>
            <div class="combo-preco-label">Apenas</div>
            <div class="combo-preco-val">${brl(c.preco)}</div>
          </div>
          <a class="btn-pedir"
             href="${wpp(`Olá! Vim pelo site e gostaria de pedir o *Combo ${c.numero}* por ${brl(c.preco)}. Qual a disponibilidade?`)}"
             target="_blank" rel="noopener" style="width:auto;padding:10px 18px">
            ${I.wpp} Pedir Combo
          </a>
        </div>
      </div>
    </div>`).join('');
  el.innerHTML=`<div class="container">
    <div class="secao-header anim-fade">
      <div class="badge">${d.badge}</div>
      <h2 class="secao-titulo">Nossos <em>${d.titulo}</em></h2>
    </div>
    <div class="combos-grid">${cards}</div>
  </div>`;
}

/* ── GALERIA ────────────────────────────────────────── */
let _galItems = [];
function renderGaleria(d) {
  const el=$('#galeria'); if(!el||!d) return;
  _galItems=d.items;
  const items=d.items.map((it,i)=>{
    const isYt = it.tipo === 'video';
    const isLocal = it.tipo === 'video_local';
    const isV = isYt || isLocal;
    
    let midiaHTML = '';
    
    if (isLocal) {
      midiaHTML = `<video class="gal-img" src="${it.url}#t=0.001" preload="metadata" muted playsinline></video>`;
    } else {
      const imgSrc = isYt ? '/assets/images/uploads/galeria-video-thumb.jpg' : it.url;
      midiaHTML = `<img class="gal-img" src="${imgSrc}" alt="${it.legenda}" loading="lazy" onerror="this.src='https://picsum.photos/seed/pizza${i}/600/400'">`;
    }

    return `<div class="gal-item" data-index="${i}" role="button" tabindex="0" aria-label="${it.legenda}">
      ${isV?'<span class="gal-video-badge">▶ Vídeo</span>':''}
      ${midiaHTML}
      <div class="gal-overlay"><div class="gal-play-icon">${isV?I.play:I.zoom}</div></div>
      <div class="gal-label">${it.legenda}</div>
    </div>`;}).join('');
    
  el.innerHTML=`<div class="container">
    <div class="secao-header anim-fade">
      <div class="badge">${d.badge}</div>
      <h2 class="secao-titulo">${d.titulo}</h2>
    </div>
    <div class="galeria-track-wrap">
      <div class="galeria-track" id="galTrack">${items}</div>
    </div>
    <div class="car-ctrl">
      <button class="car-btn" id="galPrev" aria-label="Anterior">${I.arL}</button>
      <div class="car-dots" id="galDots"></div>
      <button class="car-btn" id="galNext" aria-label="Próximo">${I.arR}</button>
    </div>
  </div>`;
}

function initGaleriaCarousel() {
  const track=$('#galTrack'), prev=$('#galPrev'), next=$('#galNext'), dots=$('#galDots');
  if(!track) return;
  let idx=0;
  const getV=()=>innerWidth<=768?1:innerWidth<=1024?2:3;
  function setup(){
    const items=$$('.gal-item',track), vis=getV(), pages=Math.ceil(items.length/vis);
    if(!dots) return; dots.innerHTML='';
    for(let i=0;i<pages;i++){
      const b=document.createElement('button'); b.className='c-dot'+(i===0?' ativo':'');
      b.setAttribute('aria-label',`Página ${i+1}`);
      b.addEventListener('click',()=>{idx=i*vis;move();}); dots.appendChild(b);
    } move();
  }
  function move(){
    const items=$$('.gal-item',track); if(!items.length) return;
    const vis=getV(), w=items[0].offsetWidth+14, max=Math.max(0,items.length-vis);
    idx=Math.min(Math.max(0,idx),max);
    track.style.transform=`translateX(-${idx*w}px)`;
    $$('.c-dot',dots).forEach((d,i)=>d.classList.toggle('ativo',Math.floor(idx/vis)===i));
  }
  if(prev) prev.addEventListener('click',()=>{idx--;move();});
  if(next) next.addEventListener('click',()=>{idx++;move();});
  let sx=0;
  track.addEventListener('touchstart',e=>{sx=e.touches[0].clientX},{passive:true});
  track.addEventListener('touchend',e=>{const d=sx-e.changedTouches[0].clientX;if(Math.abs(d)>48){d>0?idx++:idx--;move();}},{passive:true});
  window.addEventListener('resize',setup,{passive:true}); setup();
}

/* ── LIGHTBOX ───────────────────────────────────────── */
function injectLightbox() {
  const div=document.createElement('div'); div.id='lightbox';
  div.innerHTML=`<div class="lb-inner">
    <button class="lb-close" aria-label="Fechar">${I.cls}</button>
    <img id="lb-img" alt="">
    <iframe id="lb-iframe" allowfullscreen title="Vídeo"></iframe>
    <video id="lb-video" controls playsinline></video>
    <div class="lb-caption"></div>
  </div>
  <button class="lb-nav lb-prev" aria-label="Anterior">${I.arL}</button>
  <button class="lb-nav lb-next" aria-label="Próximo">${I.arR}</button>`;
  document.body.appendChild(div);
}
function initLightbox() {
  const box=$('#lightbox'), img=$('#lb-img'), ifr=$('#lb-iframe'), 
        video=$('#lb-video'),
        cls=$('.lb-close',box), lp=$('.lb-prev',box), ln=$('.lb-next',box), cap=$('.lb-caption',box);
  if(!box) return;
  let cur=0;
  
  const abrir=i=>{
    cur=i; const it=_galItems[i]; if(!it) return;
    
    // Reseta todos os elementos de mídia primeiro
    img.style.display='none'; 
    ifr.classList.remove('ativo'); ifr.src='';
    video.classList.remove('ativo'); video.pause(); video.src='';
    
    if(it.tipo==='video'){
      ifr.src=it.url+'?autoplay=1'; ifr.classList.add('ativo');
    } else if (it.tipo==='video_local') {
      video.src=it.url; video.classList.add('ativo'); video.play();
    } else {
      img.style.display=''; img.src=it.url; img.alt=it.legenda;
    }
    
    if(cap) cap.textContent=it.legenda||'';
    box.classList.add('ativo'); document.body.style.overflow='hidden';
  };
  
  const fechar=()=>{
    box.classList.remove('ativo'); 
    ifr.src=''; ifr.classList.remove('ativo');
    video.pause(); video.src=''; video.classList.remove('ativo'); 
    document.body.style.overflow='';
  };
  
  const nav=d=>{cur=(cur+d+_galItems.length)%_galItems.length;abrir(cur);};
  document.addEventListener('click',e=>{const it=e.target.closest('.gal-item');if(it)abrir(+it.dataset.index);});
  document.addEventListener('keydown',e=>{
    const it=e.target.closest?.('.gal-item');if(it&&e.key==='Enter')abrir(+it.dataset.index);
    if(!box.classList.contains('ativo'))return;
    if(e.key==='Escape')fechar();if(e.key==='ArrowRight')nav(1);if(e.key==='ArrowLeft')nav(-1);
  });
  if(cls)cls.addEventListener('click',fechar);
  if(lp)lp.addEventListener('click',()=>nav(-1));
  if(ln)ln.addEventListener('click',()=>nav(1));
  box.addEventListener('click',e=>{if(e.target===box)fechar();});
}

/* ── DEPOIMENTOS ────────────────────────────────────── */
function renderDepoimentos(d) {
  const el=$('#depoimentos'); if(!el||!d) return;
  const items=d.items.map(dep=>`
    <div class="dep-item">
      <div class="dep-card">
        <div class="dep-stars" aria-label="${dep.estrelas} estrelas">${sts(dep.estrelas)}</div>
        <blockquote class="dep-text">"${dep.texto}"</blockquote>
        <div class="dep-author">
          <img class="dep-foto" src="${dep.foto}" alt="${dep.nome}" loading="lazy"
               onerror="this.src='https://i.pravatar.cc/100?u=${encodeURIComponent(dep.nome)}'">
          <div><div class="dep-nome">${dep.nome}</div><div class="dep-tipo">${dep.tipo}</div></div>
        </div>
      </div>
    </div>`).join('');
  el.innerHTML=`<div class="container">
    <div class="secao-header anim-fade">
      <div class="badge">${d.badge}</div>
      <h2 class="secao-titulo">${d.titulo}</h2>
    </div>
    <div class="dep-carousel"><div class="dep-track" id="depTrack">${items}</div></div>
    <div class="car-ctrl" style="margin-top:28px">
      <button class="car-btn" id="depPrev" aria-label="Anterior">${I.arL}</button>
      <div class="car-dots" id="depDots"></div>
      <button class="car-btn" id="depNext" aria-label="Próximo">${I.arR}</button>
    </div>
  </div>`;
}
function initDepCarousel() {
  const track=$('#depTrack'), prev=$('#depPrev'), next=$('#depNext'), dots=$('#depDots');
  if(!track) return;
  const items=$$('.dep-item',track), tot=items.length; let idx=0, timer;
  if(!tot) return;
  function buildDots(){
    if(!dots) return; dots.innerHTML='';
    for(let i=0;i<tot;i++){
      const b=document.createElement('button'); b.className='c-dot'+(i===0?' ativo':'');
      b.setAttribute('aria-label',`Depoimento ${i+1}`);
      b.addEventListener('click',()=>{go(i);rst();}); dots.appendChild(b);
    }
  }
  const go=i=>{idx=(i+tot)%tot;track.style.transform=`translateX(-${idx*100}%)`;$$('.c-dot',dots).forEach((d,j)=>d.classList.toggle('ativo',j===idx));};
  const rst=()=>{clearInterval(timer);timer=setInterval(()=>go(idx+1),6500);};
  if(prev)prev.addEventListener('click',()=>{go(idx-1);rst();});
  if(next)next.addEventListener('click',()=>{go(idx+1);rst();});
  track.addEventListener('mouseenter',()=>clearInterval(timer));
  track.addEventListener('mouseleave',rst);
  let sx=0;
  track.addEventListener('touchstart',e=>{sx=e.touches[0].clientX;clearInterval(timer);},{passive:true});
  track.addEventListener('touchend',e=>{const d=sx-e.changedTouches[0].clientX;if(Math.abs(d)>48){d>0?go(idx+1):go(idx-1);}rst();},{passive:true});
  buildDots(); rst();
}

/* ── EMPRESA / CONTATO ──────────────────────────────── */
function renderEmpresa(d) {
  const el=$('#contato'); if(!el||!d) return;
  el.innerHTML=`<div class="container">
    <div class="secao-header anim-fade">
      <div class="badge">${d.badge}</div>
      <h2 class="secao-titulo">${d.titulo}</h2>
    </div>
    <div class="contato-grid">
      <div class="contato-info anim-left">
        <div class="cinfo-item">
          <div class="cinfo-icon">${I.map}</div>
          <div><div class="cinfo-label">Endereço</div><div class="cinfo-val">${d.endereco}</div></div>
        </div>
        <div class="cinfo-item">
          <div class="cinfo-icon">${I.clk}</div>
          <div><div class="cinfo-label">Horário</div><div class="cinfo-val">${d.horario}</div></div>
        </div>
        <div class="cinfo-item">
          <div class="cinfo-icon">${I.phn}</div>
          <div><div class="cinfo-label">Contato</div>
          <div class="cinfo-val">
            <a href="${wpp(d.wpp_contato_msg)}" target="_blank" rel="noopener">${d.telefone_wpp} (WhatsApp)</a><br>
            <a href="tel:${d.telefone_fixo.replace(/\D/g,'')}">${d.telefone_fixo} (Fixo)</a>
          </div></div>
        </div>
        <div class="cinfo-item">
          <div class="cinfo-icon">${I.soc}</div>
          <div><div class="cinfo-label">Redes Sociais</div>
          <div class="contato-redes" style="margin-top:8px">
            ${d.instagram?`<a class="rede-btn" href="${d.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${I.ig}</a>`:''}
            ${d.facebook?`<a class="rede-btn" href="${d.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${I.fb}</a>`:''}
            <a class="rede-btn" href="${wpp(d.wpp_contato_msg)}" target="_blank" rel="noopener" aria-label="WhatsApp">${I.wpp}</a>
          </div></div>
        </div>
        <a class="contato-wpp" href="${wpp(d.wpp_contato_msg)}" target="_blank" rel="noopener">
          ${I.wpp} Falar no WhatsApp
        </a>
      </div>
      <div class="contato-mapa anim-right">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.498347643793!2d-49.134660824927295!3d-22.410261379607658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bf63deaab9a701%3A0xaa3844d889512dcd!2sPizzaria%20Fornalha%20Pizzaria!5e0!3m2!1spt-BR!2sbr!4v1775664522952!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>`;
}

/* ── FOOTER ─────────────────────────────────────────── */
function renderFooter(nav, emp) {
  const el=$('footer'); if(!el) return;
  const n=nav||{}, e=emp||{};
  el.innerHTML=`<div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-marca-nome">Fornalha</div>
        <div class="footer-marca-sub">Pizzaria · Piratininga SP</div>
        <p class="footer-desc">Tradição artesanal desde 2022. Forno à lenha, massa de fermentação lenta e +90 sabores para você descobrir a cada visita.</p>
      </div>
      <div>
        <div class="footer-col-titulo">Navegação</div>
        <ul class="footer-links">
          ${(n.links||[]).map(l=>`<li><a class="footer-link" href="${l.href}">${l.label}</a></li>`).join('')}
        </ul>
      </div>
      <div>
        <div class="footer-col-titulo">Contato</div>
        <ul class="footer-links">
          <li><a class="footer-link" href="${wpp(e.wpp_contato_msg||'')}" target="_blank" rel="noopener">${e.telefone_wpp||''} (WhatsApp)</a></li>
          <li><a class="footer-link" href="tel:${(e.telefone_fixo||'').replace(/\D/g,'')}">${e.telefone_fixo||''} (Fixo)</a></li>
          ${e.instagram?`<li><a class="footer-link" href="${e.instagram}" target="_blank" rel="noopener">Instagram</a></li>`:''}
          ${e.facebook?`<li><a class="footer-link" href="${e.facebook}" target="_blank" rel="noopener">Facebook</a></li>`:''}
        </ul>
        <p style="margin-top:14px;font-size:0.78rem;color:var(--cinza-medio);font-family:'Oswald',sans-serif;letter-spacing:0.06em">
          🕐 ${e.horario||''}
        </p>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© ${new Date().getFullYear()} <strong>Fornalha Pizzaria</strong>. Todos os direitos reservados.</span>
      <span class="footer-dev">Desenvolvido com 🔥 em Piratininga · SP</span>
    </div>
  </div>`;
}

/* ── SCROLL ANIMATIONS ──────────────────────────────── */
function initScrollAnim() {
  const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visivel');obs.unobserve(e.target);}}),{threshold:0.1});
  $$('.anim-fade,.anim-left,.anim-right').forEach(el=>obs.observe(el));
}

/* ── INIT ───────────────────────────────────────────── */
async function init() {
  const d = await carregarDados();
  if(!d){ console.warn('[Fornalha] dados não carregados'); return; }
  renderNavbar(d.navbar);
  renderHero(d.hero);
  renderHistoria(d.historia);
  renderDiferenciais(d.diferenciais);
  renderCardapio(d.cardapio);
  renderCombos(d.combos);
  renderGaleria(d.galeria);
  renderDepoimentos(d.depoimentos);
  renderEmpresa(d.empresa);
  renderFooter(d.navbar, d.empresa);
  injectLightbox();
  requestAnimationFrame(()=>{
    initNavbar();
    initFlames();
    initCardapio();
    initGaleriaCarousel();
    initLightbox();
    initDepCarousel();
    initScrollAnim();
  });
}
document.addEventListener('DOMContentLoaded', init);
