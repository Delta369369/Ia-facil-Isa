import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, CheckCircle2, WandSparkles, Camera, Play, ArrowRight, Instagram, Film, Zap, Layers3, MousePointer2, MonitorPlay } from 'lucide-react';
import { services } from '../data/services';
import { store } from '../config/store';
import { Artwork, Contact, FAQ, ServiceCard, Steps, asset } from '../components/UI';
import { Link } from 'react-router-dom';

const gallery = [
 {id:'campanha',label:'Campanha para barbearia',type:'Campanhas',src:'campanha-barbearia.jpg',service:'artes-comerciais',description:'Campanha demonstrativa para divulgação de barbearia'},
 {id:'pizza',label:'Fotografia gastronômica',type:'Gastronomia',src:'pizza-comercial.jpg',service:'fotos-comerciais',description:'Cena demonstrativa de fotografia de pizza'},
 {id:'isa',label:'ISA Guardiã — lifestyle',type:'ISA Guardiã',src:'isa-lifestyle.webp',service:null,description:'Retrato da personagem virtual ISA Guardiã'},
 {id:'produto',label:'Composição de produto',type:'Produtos',src:'produto.webp',service:'fotos-comerciais',description:'Conceito demonstrativo de fotografia de produto'},
 {id:'retrato',label:'ISA — identidade original',type:'ISA Guardiã',src:'isa-perfil.webp',service:null,description:'Fotografia original da personagem virtual ISA Guardiã'},
 {id:'avatar',label:'ISA — avatar original',type:'ISA Guardiã',src:'isa-avatar.png',service:null,description:'Avatar original da personagem virtual'},
 {id:'royal',label:'ISA — azul royal',type:'ISA Guardiã',src:'cinematic/isa-blazer-royal.webp',service:null,description:'Retrato virtual da ISA com blazer azul royal'},
 {id:'marinho',label:'ISA — direção editorial',type:'ISA Guardiã',src:'cinematic/isa-blazer-marinho.webp',service:null,description:'Retrato virtual da ISA com blazer marinho'},
 {id:'estudio',label:'ISA no estúdio criativo',type:'ISA Guardiã',src:'cinematic/isa-estudio.png',service:null,description:'Arte demonstrativa da personagem ISA em um estúdio'},
 {id:'campanha-nova',label:'Campanha com personalidade',type:'Campanhas',src:'cinematic/campanha-fotorrealista.webp',service:'artes-comerciais',description:'Campanha conceitual em estilo violeta e preto'},
 {id:'cafe',label:'Cardápio digital de cafeteria',type:'Sites e catálogos',src:'cinematic/cardapio-cafe.png',service:'sites-catalogos',description:'Conceito de cardápio digital apresentado em smartphone'},
 {id:'presenca',label:'Presença digital de negócios locais',type:'Sites e catálogos',src:'cinematic/presenca-local.png',service:'presenca-digital',description:'Conceito de presença digital com mapa e indicadores'},
 {id:'gastronomia',label:'Menu gastronômico interativo',type:'Gastronomia',src:'cinematic/gastronomia-01.jpg',service:'sites-catalogos',description:'Conceito de menu gastronômico em smartphone'},
 {id:'barbearia',label:'Barbearia — direção de campanha',type:'Campanhas',src:'cinematic/barbearia-01.jpg',service:'artes-comerciais',description:'Conceito de publicidade de barbearia com fotografia cinematográfica'}
] as const;
const categories = ['Todos','ISA Guardiã','Campanhas','Gastronomia','Produtos','Sites e catálogos'] as const;
const highlights = [gallery[10],gallery[13],gallery[7]] as const;
type GalleryItem = typeof gallery[number];

export default function Home() {
 const [filter,setFilter]=useState('Todos');
 const [selected,setSelected]=useState<GalleryItem|null>(null);
 const shown = gallery.filter(item=>filter==='Todos'||item.type===filter);
 useEffect(()=>{ if(!selected)return;const onKeyDown=(event:KeyboardEvent)=>{if(event.key==='Escape')setSelected(null)};window.addEventListener('keydown',onKeyDown);return()=>window.removeEventListener('keydown',onKeyDown)},[selected]);
 return <>
  <section className="container hero hero-isa neon-hero cinematic-hero" aria-labelledby="home-title">
   <div className="hero-copy neon-copy">
    <span className="eyebrow"><span className="status-dot"/> ESTÚDIO CRIATIVO · INTELIGÊNCIA ARTIFICIAL</span>
    <h1 id="home-title">O futuro da sua marca <span>começa com uma ideia.</span></h1>
    <p>Ideias que se transformam em imagens, campanhas e experiências digitais marcantes. Um estúdio criativo com inteligência artificial e personalidade própria.</p>
    <div className="hero-actions"><a className="button" href="#servicos">Conheça nossos serviços <ArrowUpRight size={19}/></a><a className="text-button" href="#portfolio">Explorar portfólio <ArrowRight size={16}/></a></div>
    <div className="hero-notes"><span><CheckCircle2 size={15}/> Projetos personalizados</span><span><CheckCircle2 size={15}/> Orçamento antes de começar</span></div>
   </div>
   <div className="isa-composition neon-isa cinematic-isa">
    <div className="neon-aura" aria-hidden="true"/><div className="isa-orbit" aria-hidden="true"/>
    <span className="studio-word" aria-hidden="true">FUTURO.</span>
    <div className="isa-portrait"><img src={asset('cinematic/isa-blazer-royal.webp')} alt="ISA Guardiã, personagem virtual oficial do IA Fácil, usando blazer azul royal" width="1000" height="1000" fetchPriority="high"/></div>
    <div className="floating-service floating-photo"><span><Camera size={19}/></span><div><small>CRIATIVIDADE VISUAL</small><strong>Imagens que impactam</strong></div></div>
    <div className="floating-service floating-video"><span><Play size={18}/></span><div><small>TECNOLOGIA + IMAGINAÇÃO</small><strong>Novas possibilidades</strong></div></div>
    <div className="isa-signature"><span>Isa Guardiã</span><small>PERSONAGEM VIRTUAL · CRIADA COM IA</small></div>
   </div>
  </section>
  <div className="container disciplines neon-disciplines"><span>CRIAÇÃO QUE VAI ALÉM</span><b>Imagem</b><i>✦</i><b>Vídeo</b><i>✦</i><b>Experiência digital</b><a href="#servicos" aria-label="Ir para os serviços"><ArrowDown size={19}/></a></div>

  <section id="servicos" className="container section neon-section">
   <div className="section-heading"><div><span className="eyebrow">O QUE PODEMOS CRIAR</span><h2>Tecnologia para transformar<br/>suas ideias em realidade.</h2></div><p>Explore as soluções disponíveis.<br/>Cada projeto começa com uma conversa.</p></div>
   <div className="services-grid">{services.map(s=><ServiceCard key={s.slug} service={s}/>)}<div className="custom-card"><span className="custom-icon"><WandSparkles size={27}/></span><small>CRIAÇÃO SOB MEDIDA</small><h3>Sua ideia não<br/>cabe num cartão?</h3><p>Conte o que deseja criar. Vamos avaliar as possibilidades e o melhor formato.</p><Contact label="Conversar sobre minha ideia" className="text-button"/></div></div>
   {store.provisionalPrices&&<p className="pricing-note">Preços e prazos são confirmados no orçamento. O serviço de vídeos curtos está em preparação.</p>}
  </section>

  <section className="neon-showreel" id="apresentacao"><div className="container section neon-showreel-layout">
   <div><span className="eyebrow">CRIATIVIDADE EM MOVIMENTO</span><h2>Não imagine apenas.<br/>Veja as possibilidades.</h2><p>Conheça o universo visual do IA Fácil. As imagens desta apresentação são conceitos demonstrativos e não representam clientes reais.</p><a href="#portfolio" className="button">Explorar projetos <ArrowUpRight size={17}/></a></div>
   <div className="showreel-stage"><img src={asset('cinematic/cardapio-cafe.png')} loading="lazy" alt="Conceito demonstrativo de cardápio de cafeteria em smartphone"/><div className="showreel-badge"><MonitorPlay size={18}/> Vitrine de conceitos visuais</div><span className="showreel-status">Vídeo de apresentação em preparação</span></div>
  </div></section>

  <section className="cinematic-featured" aria-labelledby="cinematic-featured-title"><div className="container section">
   <div className="cinematic-featured-intro"><div><span className="eyebrow">DIREÇÃO CRIATIVA // SELEÇÃO</span><h2 id="cinematic-featured-title">Uma vitrine de <em>possibilidades reais de criação.</em></h2></div><p>Conceitos visuais para inspirar novas campanhas, negócios e identidades. Cada composição demonstra uma possibilidade criativa — não representa cliente real.</p></div>
   <div className="cinematic-feature-grid">{highlights.map((item,index)=><button key={item.id} type="button" className={'cinematic-feature-card cinematic-feature-'+index} onClick={()=>setSelected(item)} aria-label={'Ampliar '+item.label}><img src={asset(item.src)} alt={item.description} loading="lazy"/><span className="cinematic-feature-overlay"><small>0{index+1} / CONCEITO CRIATIVO</small><strong>{item.label}</strong><ArrowUpRight size={22}/></span></button>)}</div>
  </div></section>

  <section id="portfolio" className="portfolio-section neon-portfolio"><div className="container section">
   <div className="section-heading"><div><span className="eyebrow">GALERIA DE CRIAÇÕES</span><h2>Ideias que ganham<br/>forma e personalidade.</h2></div><p>Imagens originais e novas criações selecionadas para apresentar o universo visual do IA Fácil.</p></div>
   <div className="portfolio-filters" role="group" aria-label="Filtrar portfólio">{categories.map(label=><button key={label} type="button" onClick={()=>setFilter(label)} aria-pressed={filter===label} className={filter===label?'active':''}>{label}</button>)}</div>
   <div className="neon-gallery cinematic-gallery">{shown.map((item,i)=><button type="button" className={'neon-gallery-item '+(i===0?'featured':'')} key={item.id} onClick={()=>setSelected(item)} aria-label={'Ampliar '+item.label}><img src={asset(item.src)} alt={item.description} loading="lazy"/><span className="neon-gallery-info"><small>{item.type} · CONCEITO DEMONSTRATIVO</small><strong>{item.label}</strong><ArrowUpRight size={18}/></span></button>)}</div>
   <p className="pricing-note">Portfólio demonstrativo: as cenas comerciais são conceitos fictícios. A ISA Guardiã é uma personagem virtual, não uma pessoa real ou cliente.</p>
  </div></section>

  <section id="isa" className="container section neon-isa-story">
   <div className="neon-isa-story-image"><img src={asset('cinematic/isa-blazer-marinho.webp')} alt="ISA Guardiã, personagem virtual, em retrato editorial" loading="lazy"/><span>ISA // IDENTIDADE VIRTUAL</span></div>
   <div><span className="eyebrow">CONHEÇA A ISA</span><h2>A inteligência tem<br/><em>uma nova identidade.</em></h2><p>A ISA Guardiã representa o encontro entre tecnologia, imaginação e criatividade. Uma personagem virtual que dá rosto ao universo do IA Fácil.</p><p>Ela é parte da nossa identidade visual. O atendimento e os projetos são conduzidos pela equipe responsável.</p><Link to="/sobre/" className="button outline">Conheça o IA Fácil <ArrowUpRight size={18}/></Link></div>
  </section>

  <section className="process-section neon-process" id="como-funciona"><div className="container section"><span className="eyebrow">SIMPLES DO INÍCIO AO FIM</span><h2>Da primeira ideia<br/>à criação final.</h2><Steps/></div></section>

  <section className="container section neon-dark-studio" id="dark-studio">
   <div className="neon-dark-studio-copy"><span className="eyebrow">NOVAS POSSIBILIDADES AUDIOVISUAIS</span><h2>Histórias que prendem<br/>a atenção.</h2><p>Vídeos curtos, narrativas visuais e conteúdo sem apresentador: possibilidades criativas de inteligência artificial para explorar.</p><p className="studio-disclaimer">Área conceitual em desenvolvimento. O serviço de vídeos curtos está em preparação, sujeito à disponibilidade e validação técnica.</p><Link to="/servicos/videos-curtos/" className="button outline">Conheça o conceito <ArrowUpRight size={18}/></Link></div>
   <div className="dark-studio-visual"><img src={asset('video-conceito.svg')} alt="Storyboard demonstrativo de vídeo vertical" loading="lazy"/><div className="studio-visual-chip"><Film size={18}/> DARK STUDIO // EM PREPARAÇÃO</div></div>
  </section>

  <section className="container section neon-values"><span className="eyebrow">TECNOLOGIA COM PROPÓSITO</span><h2>Criatividade que respeita<br/>a sua identidade.</h2><div className="neon-value-grid"><article><Zap/><h3>Ideias em evidência</h3><p>Um visual pensado para destacar produtos, serviços e conteúdos.</p></article><article><Layers3/><h3>Projeto sob medida</h3><p>Escopo, prazo e revisões acordados antes de iniciar.</p></article><article><MousePointer2/><h3>Atendimento humano</h3><p>A ISA representa a marca; a equipe cuida das solicitações.</p></article></div><a href={store.instagram} target="_blank" rel="noopener noreferrer" className="text-button"><Instagram size={17}/> Acompanhe {store.instagramHandle} <ArrowUpRight size={16}/></a></section>

  <section className="container section faq-section"><div><span className="eyebrow">DÚVIDAS FREQUENTES</span><h2>Antes de começar.</h2><p>Transparência em todas as etapas.</p></div><FAQ items={[['Como solicito um orçamento?','Escolha um serviço e envie sua solicitação pelo perfil @isabela_guardian no Instagram. Escopo, prazo e valor são alinhados antes do início.'],['A ISA Guardiã é uma pessoa real?','Não. ISA é uma personagem virtual criada com inteligência artificial para representar visualmente o IA Fácil.'],['O site produz automaticamente os vídeos e imagens?','Não. Este site apresenta serviços e conceitos; a criação é realizada externamente pela equipe.'],['Os exemplos são de clientes reais?','Não. O portfólio atual apresenta conceitos demonstrativos e personagens virtuais.'],['Vídeos curtos já estão disponíveis?','O serviço está em preparação e depende de validação técnica e disponibilidade.']]} /></section>

  {selected&&<div className="neon-lightbox" role="presentation" onClick={()=>setSelected(null)}><div className="neon-lightbox-dialog" role="dialog" aria-modal="true" aria-label={'Imagem ampliada: '+selected.label} onClick={event=>event.stopPropagation()}><button type="button" className="neon-lightbox-close" onClick={()=>setSelected(null)} aria-label="Fechar visualização">Fechar ×</button><img src={asset(selected.src)} alt={selected.description}/><div><strong>{selected.label}</strong><span>Conceito demonstrativo</span>{selected.service&&<Link to={'/servicos/'+selected.service+'/'} onClick={()=>setSelected(null)}>Ver serviço <ArrowUpRight size={15}/></Link>}</div></div></div>}
 </>;
}
