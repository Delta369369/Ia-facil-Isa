import { store } from '../config/store';
import { legal } from '../config/legal';

type Section = [heading: string, body: string];
function providerDetails(): Section[] {
 const details: Section[] = [];
 if (legal.providerName) details.push(['Responsável pela prestação dos serviços', legal.providerName]);
 if (legal.registrationLabel && legal.registrationNumber) details.push(['Registro do fornecedor', legal.registrationLabel + ': ' + legal.registrationNumber]);
 if (legal.physicalAddress) details.push(['Endereço físico para contato', legal.physicalAddress]);
 if (legal.businessEmail) details.push(['Contato eletrônico', legal.businessEmail]);
 details.push(['Atendimento inicial', 'Instagram ' + store.instagramHandle + ' (' + store.instagram + '). O orçamento e as condições são confirmados no atendimento, antes da contratação.']);
 return details;
}
const content: Record<string,{title:string;sections: Section[]}> = {
 sobre: {
  title:'Sobre o IA Fácil',
  sections:[
   ['Criatividade com apoio de inteligência artificial',store.name + ' é um estúdio de serviços criativos para pequenos negócios: artes de divulgação, fotos comerciais, sites e catálogos, presença digital e vídeos curtos em preparação. Cada projeto depende de orçamento e definição de escopo.'],
   ['Conheça a ISA Guardiã','ISA Guardiã é uma personagem virtual criada com inteligência artificial e representa visualmente a marca. Não é pessoa real, cliente ou prestadora autônoma dos serviços. A execução e o atendimento são conduzidos pela equipe responsável.'],
   ...providerDetails()
  ]
 },
 privacidade: {
  title:'Privacidade',
  sections:[
   ['Como funciona este site','Esta vitrine não oferece cadastro, pagamento online, formulário para envio de dados nem cookies de publicidade implementados no código. A infraestrutura de hospedagem poderá gerar registros técnicos de acesso necessários à operação e segurança. Verifique as práticas do provedor escolhido antes da publicação.'],
   ['Contato por serviços externos','O contato comercial ocorre pelo Instagram ' + store.instagramHandle + '. Ao acessar o Instagram ou outro canal externo, os dados são tratados também conforme as políticas da plataforma utilizada. Não compartilhe documentos sensíveis por mensagens públicas.'],
   ['Finalidades e materiais de projetos','Dados fornecidos voluntariamente no atendimento podem ser necessários para compreender o pedido, preparar orçamento e realizar o serviço, caso contratado. Os detalhes de ferramentas, retenção, compartilhamento e exclusão de arquivos devem ser informados pelo responsável antes de receber materiais.'],
   ['Solicitações de privacidade',legal.privacyEmail ? 'Para solicitações relativas a dados pessoais, escreva para ' + legal.privacyEmail + '.' : 'O canal específico para solicitações de privacidade está pendente de confirmação pelo responsável. O atendimento inicial informado no site é o Instagram ' + store.instagramHandle + '.'],
   ['Atualização desta página','Texto revisado em ' + legal.lastReviewed + '. Ajustar após definir hospedagem, identificação do responsável, fornecedores envolvidos e práticas reais de tratamento de dados.']
  ]
 },
 termos: {
  title:'Termos e condições',
  sections:[
   ['Serviços e propostas','O IA Fácil apresenta serviços criativos; o site não recebe pagamentos ou fecha contratos automaticamente. Os cinco serviços e suas condições estão detalhados nas páginas correspondentes. Vídeos curtos permanecem em preparação.'],
   ['Orçamento e contratação','Preços exibidos como "Sob orçamento" não representam oferta com valor fixo. Escopo, valores, disponibilidade, prazos, materiais necessários, forma de pagamento e revisões são confirmados antes da contratação.'],
   ['Direitos sobre os materiais','O cliente deve fornecer materiais com autorização para uso. A titularidade e o licenciamento das criações produzidas devem ser descritos na proposta aprovada, respeitando direitos de terceiros e limitações de ferramentas utilizadas.'],
   ['Revisões e resultados','Revisões seguem o pacote e o escopo acordados. O uso de inteligência artificial exige conferência; não se garantem vendas, visualizações, posicionamento em mecanismos de busca ou resultados comerciais.'],
   ['Cancelamento e arrependimento','As condições de cancelamento e eventuais reembolsos devem ser informadas previamente ao consumidor, sem afastar direitos assegurados pelo Código de Defesa do Consumidor, inclusive o direito de arrependimento quando cabível.'],
   ['Contato e identificação',legal.providerName ? 'Prestador: ' + legal.providerName + '. Atendimento inicial: Instagram ' + store.instagramHandle + '.' : 'Atendimento inicial: Instagram ' + store.instagramHandle + '. Os dados completos de identificação do prestador estão pendentes de confirmação antes da publicação comercial definitiva.']
  ]
 }
};
export default function Institutional({page}:{page:string}) {
 const current=content[page];
 if(!current)return null;
 return <article className="container section legal"><span className="eyebrow">INFORMAÇÕES INSTITUCIONAIS</span><h1>{current.title}</h1>{current.sections.map(([title,body])=><section key={title}><h2>{title}</h2><p>{body}</p></section>)}</article>;
}
