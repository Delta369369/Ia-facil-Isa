import { useState } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, CheckCircle2, WandSparkles, Camera, Play, ArrowRight, Instagram, Film, Zap, Layers3, MousePointer2, MonitorPlay } from 'lucide-react';
import { services } from '../data/services';
import { store } from '../config/store';
import { Artwork, Contact, FAQ, ServiceCard, Steps, asset } from '../components/UI';
import { Link } from 'react-router-dom';

const gallery = [
 {id:'campanha',label:'Campanha visual',type:'Imagens',src:'campanha-barbearia.jpg',service:'artes-comerciais',description:'Conceito demonstrativo de divulgação comercial'},
 {id:'pizza',label:'Fotografia comercial',type:'Imagens',src:'pizza-comercial.jpg',service:'fotos-comerciais',description:'Conceito demonstrativo de fotografia gastronômica'},
 {id:'isa',label:'ISA Guardiã',type:'Personagem',src:'isa-lifestyle.webp',service:null,description:'Personagem virtual original da marca'},
 {id:'produto',label:'Direção de produto',type:'Imagens',src:'produto.webp',service:'fotos-comerciais',description:'Conceito ilustrativo de produto'},
 {id:'retrato',label:'Identidade virtual',type:'Personagem',src:'isa-perfil.webp',service:null,description:'Retrato da ISA Guardiã'},
 {id:'avatar',label:'Avatar da ISA',type:'Personagem',src:'isa-avatar.png',service:null,description:'Avatar original da personagem'}
] as const;
type GalleryItem = typeof gallery[number];

export default function Home() {
 const [filter,setFilter]=useState('Todos');
 const [selected,setSelected]=useState<GalleryItem|null>(null);
 const shown = gallery.filter(item=>filter==='Todos'||item.type===filter);
 return <>
  <section className="container hero hero-isa neon-hero" aria-labelledby="home-title">
   <div className="hero-copy neon-copy">
    <span className="eyebrow"><span className="status-dot"/> ESTÚDIO CRIATIVO · INTELIGÊNCIA ARTIFICIAL</span>
    <h1 id="home-title">Sua imaginação não tem limites.<br/><span>Suas criações também não.</span></h1>
    <p>Artes, imagens comerciais, vídeos e experiências digitais para dar mais presença às suas ideias e ao seu negócio.</p>
    <div className="hero-actions"><a className="button" href="#servicos">Conheça nossos serviços <ArrowUpRight size={19}/></a><a className="text-button" href="#portfolio">Explorar portfólio <ArrowRight size={16}/></a></div>
    <div className="hero-notes"><span><CheckCircle2 size={15}/> Projetos personalizados</span><span><CheckCircle2 size={15}/> Orçamento antes de começar</span></div>
   </div>
   <div className="isa-composition neon-isa">
    <div className="neon-aura" aria-hidden="true"/><div className="isa-orbit" aria-hidden="true"/>
    <span className="studio-word" aria-hidden="true">FUTURO.</span>
    <div className="isa-portrait"><img src={asset('isa-perfil.webp')} alt="ISA Guardiã, personagem virtual oficial do IA Fácil" width="1000" height="1000" fetchPriority="high"/></div>
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
   <div className="showreel-stage"><img src={asset('campanha-barbearia.jpg')} loading="lazy" alt="Demonstração de campanha visual do IA Fácil"/><div className="showreel-badge"><MonitorPlay size={18}/> Vitrine de conceitos visuais</div><span className="showreel-status">Vídeo de apresentação em preparação</span></div>
  </div></section>

  <section id="portfolio" className="portfolio-section neon-portfolio"><div className="container section">
   <div className="section-heading"><div><span className="eyebrow">GALERIA DE CRIAÇÕES</span><h2>Ideias que ganham<br/>forma e personalidade.</h2></div><p>Explore os materiais já presentes no IA Fácil.<br/>Nenhuma fotografia foi removida.</p></div>
   <div className="portfolio-filters" role="group" aria-label="Filtrar portfólio">{['Todos','Imagens','Personagem'].map(label=><button key={label} type="button" onClick={()=>setFilter(label)} aria-pressed={filter===label} className={filter===label?'active':''}>{label}</button>)}</div>
   <div className="neon-gallery">{shown.map((item,i)=><button type="button" className={'neon-gallery-item '+(i===0?'featured':'')} key={item.id} onClick={()=>setSelected(item)} aria-label={'Ampliar '+item.label}><img src={asset(item.src)} alt={item.description} loading="lazy"/><span className="neon-gallery-info"><small>{item.type} · CONCEITO DEMONSTRATIVO</small><strong>{item.label}</strong><ArrowUpRight size={18}/></span></button>)}</div>
   <p className="pricing-note">Portfólio demonstrativo: as cenas comerciais são conceitos fictícios. A ISA Guardiã é uma personagem virtual, não uma pessoa real ou cliente.</p>
  </div></section>

  <section id="isa" className="container section neon-isa-story">
   <div className="neon-isa-story-image"><img src={asset('isa-lifestyle.webp')} alt="ISA Guardiã, identidade visual virtual do IA Fácil" loading="lazy"/><span>ISA // IDENTIDADE VIRTUAL</span></div>
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
