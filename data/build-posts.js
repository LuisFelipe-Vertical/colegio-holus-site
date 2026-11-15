// Converte o JSON do WordPress em data/posts.js limpo
const fs = require('fs');
const path = require('path');
const root = process.argv[2];
const raw = JSON.parse(fs.readFileSync(path.join(root, 'data/raw_posts.json'), 'utf8'));

const CATS = { 24: 'Agenda de Eventos', 9: 'Assuntos Gerais', 18: 'Atividades', 7: 'Eventos Realizados', 6: 'Notícias', 1: 'Novidades' };

function decode(s) {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#039;/g, "'");
}
const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const full = u => u.replace(/-\d+x\d+(\.\w+)$/, '$1').replace(/\?_=\d+$/, '');

const out = raw.map(p => {
  let c = p.content.rendered.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<style[\s\S]*?<\/style>/g, "");
  const images = [];
  const videos = [];
  // vídeos
  c = c.replace(/<video[\s\S]*?<\/video>/g, m => {
    const s = m.match(/src="([^"]+\.mp4)[^"]*"/);
    if (s) videos.push(s[1]);
    return '\n';
  });
  // galerias do Divi (background:url)
  c = c.replace(/background: ?url\(([^)]+)\)/g, (_, u) => { images.push({ t: u, f: u }); return ''; });
  // links de galeria <a href=full><img></a>
  c = c.replace(/<img[^>]*?>/g, m => {
    const alt = (m.match(/alt="([^"]*)"/) || [])[1] || '';
    const src = (m.match(/src="([^"]+)"/) || [])[1] || '';
    if (/emoji|fbcdn|s\.w\.org|hupso/.test(src)) return decode(alt); // emoji -> texto
    if (src) {
      const ss = ((m.match(/srcset="([^"]+)"/) || [])[1] || '').split(',')
        .map(s => s.trim().split(/\s+/)).filter(a => a[0]).map(a => ({ u: a[0], w: parseInt(a[1]) || 0 }))
        .sort((a, b) => a.w - b.w);
      if (ss.length) {
        const mid = ss.find(s => s.w >= 700) || ss[ss.length - 1];
        images.push({ t: mid.u, f: ss[ss.length - 1].u });
      } else images.push({ t: src, f: src });
    }
    return '';
  });
  // mantém links simples
  const links = [];
  c = c.replace(/<a [^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, (_, href, txt) => {
    txt = decode(txt.replace(/<[^>]+>/g, '')).trim();
    if (!txt) return '';
    if (/wp-content\/uploads|hupso\.com/.test(href)) return '';
    links.push({ href, txt });
    return `\u0001${links.length - 1}\u0002`;
  });
  c = c.replace(/<br\s*\/?>/g, '\n').replace(/<\/(p|div|h\d|li)>/g, '\n').replace(/<li[^>]*>/g, '• ');
  c = c.replace(/\[\/?[a-z_]+[^\]]*\]/g, ''); // shortcodes soltos
  c = decode(c.replace(/<[^>]+>/g, ''));
  const paras = c.split(/\n\s*\n|\n/).map(s => s.trim()).filter(Boolean)
    .map(s => esc(s).replace(/\u0001(\d+)\u0002/g, (_, i) => `<a href="${links[i].href}" target="_blank" rel="noopener">${esc(links[i].txt)}</a>`));

  const fm = p._embedded && p._embedded['wp:featuredmedia'] && p._embedded['wp:featuredmedia'][0];
  const all = [];
  if (fm && fm.source_url) {
    const s = fm.media_details && fm.media_details.sizes || {};
    const t = (s.large || s.medium_large || s.full || {}).source_url || fm.source_url;
    all.push({ t, f: fm.source_url });
  }
  all.push(...images);
  const seen = new Set();
  const uniq = all.filter(i => !seen.has(i.f) && seen.add(i.f));
  return {
    id: p.id,
    date: p.date.slice(0, 10),
    title: decode(p.title.rendered).replace(/\s+/g, ' ').trim(),
    cats: p.categories.map(id => CATS[id] || 'Novidades'),
    body: paras,
    images: uniq,
    videos,
    link: p.link,
  };
});

fs.writeFileSync(path.join(root, 'data/posts.js'), '// Gerado a partir do site original (todas as publicações)\nwindow.HOLUS_POSTS = ' + JSON.stringify(out, null, 1) + ';\n');
console.log('posts:', out.length, 'imagens:', out.reduce((a, p) => a + p.images.length, 0), 'sem imagem:', out.filter(p => !p.images.length).map(p => p.id).join(','));
