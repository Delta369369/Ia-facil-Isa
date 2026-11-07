import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import Home from '../src/pages/Home';
import { services } from '../src/data/services';

test('home premium preserva cinco serviços e mantém acesso ao orçamento',()=>{
 const html=renderToString(<MemoryRouter><Home/></MemoryRouter>);
 assert.match(html,/ISA Guardiã/);
 assert.match(html,/Dark Studio/);
 assert.match(html,/Explorar portfólio/);
 for(const service of services)assert.ok(html.includes(service.name),service.name);
 assert.match(html,/Orçamento antes de começar/);
});

test('arquivos de fotografias e arte anteriores continuam presentes e referenciados',()=>{
 const assets=['campanha-barbearia.jpg','pizza-comercial.jpg','isa-avatar.png','isa-lifestyle.webp','isa-perfil.webp','produto.webp','compartilhamento.png','presenca-digital.svg','produto-base.svg','site-cardapio.svg','video-conceito.svg'];
 for(const name of assets)assert.ok(existsSync('public/assets/'+name),'Arquivo ausente: '+name);
 const home=readFileSync('src/pages/Home.tsx','utf8');
 for(const name of ['campanha-barbearia.jpg','pizza-comercial.jpg','isa-avatar.png','isa-lifestyle.webp','isa-perfil.webp','produto.webp'])assert.ok(home.includes(name),'Imagem fora da galeria: '+name);
});
