import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Check, ArrowLeft, Clock, RefreshCw, Film, ArrowUpRight, X } from 'lucide-react';
import { activePackages, currency, services, type Service } from '../data/services';
import { Artwork, Contact, FAQ, ServiceCard, Steps, asset } from '../components/UI';

// Seleção de imagens da própria biblioteca do IA Fácil. Conceitos, não entregas reais.
type VisualSample = {src:string;title:string;description:string};
const visualSamples: Record<string,VisualSample[]> = {
 'artes-comerciais': [
  {src:'campanha-barbearia.jpg',title:'Campanha para comércio local',description:'Exemplo de campanha promocional fictícia'},
  {src:'cinematic/barbearia-01.jpg',title:'Barbearia cinematográfica',description:'Direção de arte e anúncio demonstrativo'},
  {src:'cinematic/campanha-fotorrealista.webp',title:'Campanha fotorrealista',description:'Conceito visual de campanha publicitária'}
 ],
 'fotos-comerciais': [
  {src:'pizza-comercial.jpg',title:'Pizza em destaque',description:'Fotografia de gastronomia demonstrativa'},
  {src:'cinematic/gastronomia-01.jpg',title:'Apresentação gastronômica',description:'Conceito de exibição de produtos alimentícios'},
  {src:'produto.webp',title:'Fotografia de produto',description:'Composição comercial ilustrativa'},
  {src:'cinematic/campanha-fotorrealista.webp',title:'Produto em campanha',description:'Conceito publicitário de produto'}
 ],
 'sites-catalogos': [
  {src:'cinematic/cardapio-cafe.png',title:'Cardápio de cafeteria',description:'Conceito demonstrativo de cardápio digital'},
  {src:'cinematic/gastronomia-01.jpg',title:'Cardápio gastronômico',description:'Exemplo de catálogo apresentado em celular'},
  {src:'site-cardapio.svg',title:'Página de catálogo',description:'Modelo ilustrativo de catálogo comercial'},
  {src:'cinematic/presenca-local.png',title:'Presença na internet',description:'Exemplo conceitual de exposição digital'}
 ],
 'presenca-digital': [
  {src:'cinematic/presenca-local.png',title:'Visibilidade local',description:'Simulação de presença digital em mapas e buscas'},
  {src:'presenca-digital.svg',title:'Organização das informações',description:'Esquema demonstrativo de presença digital'},
  {src:'cinematic/cardapio-cafe.png',title:'Informações acessíveis',description:'Exemplo de informações comerciais em dispositivo móvel'}
 ],
 'videos-curtos': [
  {src:'video-conceito.svg',title:'Storyboard vertical',description:'Conceito estático de roteiro para vídeo'},
  {src:'cinematic/campanha-fotorrealista.webp',title:'Cena para campanha',description:'Imagem estática que pode inspirar uma sequência de vídeo'},
  {src:'cinematic/barbearia-01.jpg',title:'Direção visual de cena',description:'Imagem conceitual, não é um vídeo final'}
 ]
};

export function Compare({service}:{service:Service}){const [value,setValue]=useState(55);return <figure className="compare"><div className="compare-canvas"><img src={asset('produto-base.svg')} alt="Composição ilustrativa inicial de cosmético em fundo simples"/><div className="compare-overlay" style={{clipPath:`inset(0 ${100-value}% 0 0)`}}><img src={asset('produto.webp')} alt="Composição ilustrativa de cosmético em cenário elaborado"/></div><span className="compare-line" style={{left:`${value}%`}}/><span className="before-label">Cenário elaborado</span><span className="after-label">Fundo simples</span></div><label>Compare os cenários <input aria-label="Posição do comparador de cenários" type="range" min="0" max="100" value={value} onChange={e=>setValue(Number(e.target.value))}/></label><figcaption>Simulação visual do comparador com ilustrações. Não representa um antes/depois de edição real. Substitua por um par de fotos autorizado de {service.name.toLowerCase()}.</figcaption></figure>}
export default function ServicePage(){const {slug}=useParams();const service=services.find(s=>s.slug===slug);const [expanded,setExpanded]=useState<VisualSample|null>(null);
 useEffect(()=>{if(!expanded)return;const onKey=(e:KeyboardEvent)=>{if(e.key==='Escape')setExpanded(null)};window.addEventListener('keydown',onKey);return()=>window.removeEventListener('keydown',onKey)},[expanded]);
 if(!service)return <NotFound/>;const samples=visualSamples[service.slug]||[];return <><section className="container service-hero section"><Link className="back" to="/#servicos"><ArrowLeft size={16}/> Todos os serviços</Link><div className="service-intro"><div><span className="eyebrow">{service.category}</span><h1>{service.name}<span>.</span></h1><p>{service.description}</p><a href="#pacotes" className="button">Conhecer pacotes</a><small className="service-intro-note">Escopo e prazo confirmados antes de começar</small></div><div className="service-art"><Artwork service={service}/><span className="image-label">Exemplo demonstrativo</span></div></div></section><section className="container section detail-grid"><div><span className="eyebrow">PENSADO PARA VOCÊ</span><h2>O que podemos fazer.</h2><ul className="use-list">{service.uses.map(x=><li key={x}><Check size={18}/>{x}</li>)}</ul></div><aside className="information"><h3>Um bom resultado começa no briefing.</h3><p>{service.note}</p></aside></section><section className="container section"><span className="eyebrow">EXPLORE AS POSSIBILIDADES</span><h2>{service.kind==='product'?'Uma imagem. Outros cenários.':'Uma amostra do formato.'}</h2>{<div className="demo-gallery"><Artwork service={service}/><div><h3>{service.short}</h3><p>{service.note}</p>{service.kind==='video'&&<div className="video-placeholder"><Film/><span>Portfólio de vídeos em preparação.<br/>Nenhum vídeo demonstrativo real publicado.</span></div>}{service.kind==='audio'&&<blockquote>Exemplo fictício de entrega:<br/>[00:12] Participante 1: Vamos transformar essa ideia em algo que faça sentido.<br/>Resumo opcional: definição de objetivo e próximos passos.</blockquote>}</div></div>}</section>
<section className="container section service-visual-section" aria-labelledby="service-visual-title">
 <div className="section-heading"><div><span className="eyebrow">PORTFÓLIO VISUAL // EXEMPLOS</span><h2 id="service-visual-title">Explore diferentes possibilidades.</h2></div><p>Seleção de conceitos demonstrativos para visualizar estilos, formatos e aplicações do serviço.</p></div>
 <div className="service-visual-grid">{samples.map((item,i)=><button key={item.src} type="button" className={'service-visual-card '+(i===0?'service-visual-lead':'')} onClick={()=>setExpanded(item)} aria-label={'Ampliar '+item.title}>
 <img src={asset(item.src)} alt={item.description} loading="lazy"/><span className="service-visual-caption"><small>CONCEITO {String(i+1).padStart(2,'0')}</small><strong>{item.title}</strong><ArrowUpRight size={19}/></span></button>)}</div>
 <p className="service-visual-disclaimer">As imagens são criações e simulações de portfólio; não constituem serviços entregues a clientes reais.{service.slug==='videos-curtos'?' O storyboard é uma prévia estática, não um vídeo reproduzível.':''}</p>
</section>
<section className="process-section"><div className="container section"><span className="eyebrow">DO BRIEFING À ENTREGA</span><h2>Como funciona.</h2><Steps/></div></section><section className="container section" id="pacotes"><div className="section-heading"><div><span className="eyebrow">ESCOLHA SEU PONTO DE PARTIDA</span><h2>Um pacote para cada ideia.</h2></div><p>Proposta personalizada.<br/>Confirme o escopo no atendimento.</p></div><div className="packages">{activePackages(service).map((p,i)=><article className={i===1?'package featured':'package'} key={p.name}><small>{p.name}</small><h3>{p.price>0?currency(p.price):'Sob orçamento'}</h3><p>{p.quantity}</p><ul><li><Clock size={16}/>{p.delivery}</li><li><RefreshCw size={16}/>{p.revisions} {p.revisions===1?'revisão':'revisões'}</li><li><Check size={16}/> Escopo alinhado antes de começar</li></ul><Contact service={service.name} packageName={p.name} label="Solicitar pelo WhatsApp" className={i===1?'button':'button outline'}/></article>)}</div><p className="pricing-note">Prazo contado após confirmação do escopo e recebimento de todos os materiais. Não há pagamento ou envio de arquivos pelo site. Para solicitar pelo Instagram, informe o serviço e o pacote escolhido no Direct.</p></section><section className="container section detail-grid"><div><span className="eyebrow">VAMOS COMEÇAR BEM</span><h2>O que você precisa enviar.</h2><p>{service.materials}</p></div><FAQ items={service.faq}/></section><section className="container section"><span className="eyebrow">OUTRAS POSSIBILIDADES</span><h2>Conheça também.</h2><div className="services-grid">{services.filter(s=>s.slug!==slug).slice(0,3).map(s=><ServiceCard key={s.slug} service={s}/>)}</div></section>
{expanded&&<div className="service-visual-lightbox" role="presentation" onClick={()=>setExpanded(null)}><div role="dialog" aria-modal="true" aria-label={'Imagem ampliada: '+expanded.title} className="service-visual-dialog" onClick={e=>e.stopPropagation()}><button type="button" aria-label="Fechar imagem" onClick={()=>setExpanded(null)} className="service-visual-close"><X size={19}/> Fechar</button><img src={asset(expanded.src)} alt={expanded.description}/><strong>{expanded.title}</strong><small>Conceito demonstrativo — não representa cliente real</small></div></div>}
</>}
export function NotFound(){return <section className="container section not-found"><span className="eyebrow">404 · NOVO CAMINHO</span><h1>Essa página não está aqui.</h1><p>Explore nossos serviços para encontrar o que você precisa.</p><Link className="button" to="/">Voltar para o início</Link></section>}
