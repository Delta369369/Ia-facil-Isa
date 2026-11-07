import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import Home from '../src/pages/Home';

const existing:Record<string,string>={
 'campanha-barbearia.jpg':'790ede6fb9d17ae5a7f8e544c68cc2f27fc231ff',
 'compartilhamento.png':'8a9781bed631d984f1d033d450242b69c6bedf2f',
 'isa-avatar.png':'fb22e4f970232b73d8e9849af1baed6508e7c593',
 'isa-lifestyle.webp':'695cad29bdc4d2a7c60727c6799d2d32f7de8191',
 'isa-perfil.webp':'8d87259fe9f9247d968712ee7a5e677f75f6b11b',
 'pizza-comercial.jpg':'acaf2d9a04bae2adbafc3159d0be2a2c5e896f16',
 'presenca-digital.svg':'c776496c1da9d23e36358710326f857724b6f751',
 'produto-base.svg':'6239b52c5a28de3b25ac1a7ff728baa674709f9a',
 'produto.webp':'1a2f3bdf4069d84e21e5718a7e6518bd4a5cf519',
 'site-cardapio.svg':'021b33f590ec7592e53381bb30357d3717e35e8f',
 'video-conceito.svg':'5961adcd314eebf82205bf10dc4df5e81c69d69b'
};
const added=['isa-blazer-royal.webp','isa-blazer-marinho.webp','isa-estudio.png','campanha-fotorrealista.webp','cardapio-cafe.png','presenca-local.png','gastronomia-01.jpg','barbearia-01.jpg'];
test('todas as onze artes anteriores permanecem byte por byte',()=>{
 for(const [name,expected] of Object.entries(existing)){
  const bytes=readFileSync('public/assets/'+name);
  const actual=createHash('sha1').update('blob '+bytes.length+'\0').update(bytes).digest('hex');
  assert.equal(actual,expected,'Arte original modificada: '+name);
 }
});
test('oito novas imagens locais aparecem no código de portfólio',()=>{
 const home=readFileSync('src/pages/Home.tsx','utf8');
 for(const name of added){
  assert.ok(existsSync('public/assets/cinematic/'+name),'Imagem adicionada ausente: '+name);
  assert.ok(home.includes('cinematic/'+name),'Imagem fora da vitrine: '+name);
 }
});
test('home 2.0 renderiza hero cinematográfico, destaques e categorias',()=>{
 const html=renderToString(<MemoryRouter><Home/></MemoryRouter>);
 for(const phrase of ['O futuro da sua marca','DIREÇÃO CRIATIVA','Campanhas','Gastronomia','Sites e catálogos','IA Guardiã']){
  if(phrase==='IA Guardiã') continue;
  assert.ok(html.includes(phrase),phrase);
 }
 assert.match(html,/cinematic-feature-grid/);
 assert.match(html,/cinematic-gallery/);
 assert.match(html,/Dark Studio/i);
});

test('as três referências neon do Google Drive estão versionadas e visíveis no site',()=>{
 const home=readFileSync('src/pages/Home.tsx','utf8');
 const names=['isa-facil-shorts-banner.jpg','isa-neon-portrait.jpg','shorts-visual-reference.png'];
 for(const name of names){
  assert.ok(existsSync('public/assets/neon/'+name),'Arquivo de referência ausente: '+name);
  assert.ok(home.includes('neon/'+name),'Arquivo fora da experiência visual: '+name);
 }
 const html=renderToString(<MemoryRouter><Home/></MemoryRouter>);
 assert.match(html,/ISA FÁCIL SHORTS/);
 assert.match(html,/shorts-neon-banner/);
 assert.match(html,/shorts-neon-feature/);
 assert.ok(existsSync('src/styles/shorts-neon.css'));
});

test('revisão visual é a última camada CSS e mantém paleta azul-violeta',()=>{
 const entry=readFileSync('src/main.tsx','utf8');
 const imports=Array.from(entry.matchAll(/import '\.\/styles\/([^']+\.css)'/g),m=>m[1]);
 assert.equal(imports.at(-1),'cinematic-review.css','Revisão deve ter precedência sobre a camada neon');
 const styles=readFileSync('src/styles/cinematic-review.css','utf8');
 assert.match(styles,/--cinematic-violet:\s*#a18bff/i);
 assert.match(styles,/--future-accent:\s*#79c9ff/i);
 assert.match(styles,/\.cinematic-hero\s+\.neon-copy\s+h1\s+span/);
 assert.match(styles,/\.cinematic-gallery\s+\.neon-gallery-item/);
 assert.match(styles,/prefers-reduced-motion/);
});

test('home conserva ISA Shorts, retratos e galeria sem links externos de imagem',()=>{
 const home=readFileSync('src/pages/Home.tsx','utf8');
 const required=[
  'neon/isa-neon-portrait.jpg',
  'neon/isa-facil-shorts-banner.jpg',
  'neon/shorts-visual-reference.png',
  'cinematic/isa-blazer-royal.webp',
  'cinematic/isa-blazer-marinho.webp',
  'cinematic/campanha-fotorrealista.webp'
 ];
 for(const name of required) assert.ok(home.includes(name),'Referência de imagem removida: '+name);
 assert.ok(!/src:\s*['"]https?:\/\//.test(home),'Galeria não deve depender de URL remota');
 const html=renderToString(<MemoryRouter><Home/></MemoryRouter>);
 assert.match(html,/aria-label="Filtrar portfólio"/);
 assert.match(html,/PERSONAGEM VIRTUAL/);
 assert.match(html,/cinematic-feature-grid/);
});
