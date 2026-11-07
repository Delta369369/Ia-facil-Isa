# Publicação do IA Fácil Dark Premium no Cloudflare Pages

Estado: configuração preparada no GitHub, aguardando a vinculação autorizada da conta Cloudflare, identificação do prestador e escolha da URL canônica.

## Por que Cloudflare Pages?

Hospeda este site estático React/Vite com suporte a GitHub (inclusive repositório privado), HTTPS e implantação automática após alterações em `main`. A branch de funcionalidades recebe prévias isoladas. GitHub continua sendo o repositório e histórico. Nenhum token privado é necessário no código-fonte.

Documentação oficial: https://developers.cloudflare.com/pages/get-started/git-integration/

## Configurar a conta em etapas

1. Acesse https://dash.cloudflare.com/ e abra **Workers & Pages**.
2. Clique em **Create application → Pages → Connect to Git**; autorize o GitHub e escolha `Delta369369/TioPatinhas`.

Configure:

| Campo | Valor |
| --- | --- |
| Framework preset | React (Vite) |
| Production branch | `main` |
| Root directory | `/` |
| Build command | `pnpm build` |
| Build output directory | `dist` |

Em **Settings → Environment variables**, adicione **para Production**:

| Variável | Valor |
| --- | --- |
| `NODE_VERSION` | `24` |
| `PNPM_VERSION` | `11.25.0` |
| `SITE_BASE` | `/` |
| `SITE_URL` | URL pública HTTPS do site, sem barra final, após confirmar o subdomínio criado |

Atenção: `SITE_URL` só deve ser definida com endereço real atribuído ao projeto Cloudflare, por exemplo a URL `https://<nome-confirmado>.pages.dev`; não inventar um subdomínio. Na primeira compilação, pode ficar sem `SITE_URL`: a página funciona, porém os canônicos, Open Graph absoluto e o sitemap serão gerados somente depois do ajuste e de novo deploy.

A página `dist/404.html` e os arquivos `dist/servicos/<slug>/index.html` são produzidos pelo build existente. Não usar regra SPA que reescreva todas as rotas para `index.html`, pois isso invalidaria o pré-render e os metadados de cada serviço.

## Publicação controlada

- Antes do merge, Cloudflare pode gerar uma **prévia da branch `feat/ia-facil-dark-premium`**.
- Verifique a prévia e execute o fluxo de orçamento.
- Preencha os campos de `src/config/legal.ts` com dados reais aprovados.
- Execute o CI do GitHub e confirme build e testes verdes.
- Faça o merge do PR somente após validar dados institucionais e a publicação pretendida.
- O merge em `main` dispara a implantação de produção no Cloudflare Pages.
- Após o primeiro deploy, confirme a URL real e coloque-a em `SITE_URL` para um segundo deploy com SEO correto.

## Dados institucionais pendentes

Campos intencionalmente vazios em `src/config/legal.ts`:
- `providerName`: nome do fornecedor responsável, conforme efetiva operação
- `registrationLabel` e `registrationNumber`: CNPJ ou CPF quando cabível e aprovado para publicação
- `physicalAddress`: endereço físico para identificação e contato
- `businessEmail`: e-mail comercial
- `privacyEmail`: contato eletrônico para exercício de direitos sobre dados pessoais

O atendimento existente do Instagram `@isabela_guardian` permanece intacto. O site não processa pagamentos ou envia formulários e não coleta dados diretamente por cadastro. Não presumir que isso dispense obrigações de informação e transparência aplicáveis à oferta de serviços.

Conferir as condições de contratação e regras da operação real. Referência normativa: Decreto nº 7.962/2013, arts. 2º a 5º, e Código de Defesa do Consumidor; Lei nº 13.709/2018 (LGPD) quanto a dados pessoais.

## Testes depois da ativação

1. Página inicial abre por HTTPS e mostra a ISA original.
2. Cinco serviços abrem diretamente por URL e exibem seus pacotes e condições.
3. Galeria com imagens e modal, navegação por teclado, menu móvel e botão de contato.
4. URLs /sobre/, /privacidade/, /termos/, /robots.txt, /sitemap.xml e /404.html.
5. Visualização em celular, sem conteúdo cortado ou atrasos desnecessários.
6. Verificar no HTML a URL canônica, OG e sitemap apontando para o endereço realmente publicado.
7. Confirmar no GitHub que os 11 assets originais seguem presentes.

Nunca configurar credenciais ou tokens em arquivos públicos.
