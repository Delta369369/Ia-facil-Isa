# IA Fácil Dark Premium — checklist para publicação definitiva

Revisão: 06/11/2026 (America/Cuiaba)

## Código e conteúdo

- [x] Home e ISA Guardiã na branch `feat/ia-facil-dark-premium`, sem mudar `main`
- [x] Cinco serviços existentes, pacotes e atendimento no Instagram preservados
- [x] 11 imagens e artes anteriores em `public/assets` preservadas
- [x] Testes e compilação do PR #2 aprovados na primeira revisão (https://github.com/Delta369369/TioPatinhas/actions/runs/42326171347)
- [x] HTML pré-renderizado das páginas de serviços, páginas institucionais e erro 404
- [x] Node.js 24 fixado em `.node-version`
- [x] Guia de implantação Cloudflare Pages em `docs/CLOUDFLARE_PAGES.md`
- [x] URL antiga removida do fallback de SEO: usar `SITE_URL` da hospedagem confirmada
- [x] Informações institucionais preparadas em `src/pages/Institutional.tsx`, com dados opcionais centralizados em `src/config/legal.ts`

## Pendências externas indispensáveis

- [ ] Aguardar novo CI do PR #2 após alterações institucionais e de configuração
- [ ] Autorizar Cloudflare Pages ↔ GitHub para `Delta369369/TioPatinhas`
- [ ] Confirmar URL pública e preencher SITE_URL
- [ ] Completar a identidade do fornecedor real e contatos institucionais em `src/config/legal.ts`
- [ ] Validar política de privacidade contra os fornecedores efetivamente usados e a rotina real de tratamento de arquivos
- [ ] Confirmar condições de cancelamento, licenças e direitos aplicáveis na contratação
- [ ] Revisar prévia no celular e desktop
- [ ] Fazer merge na branch `main` depois de cumprir as pendências e conferir o deploy
- [ ] Testar as URLs públicas, SEO e canal de atendimento pós-implantação

## Regras de segurança

Não publicar dados fictícios de fornecedor. Não implantar como operação comercial definitiva enquanto os dados institucionais exigíveis estiverem ausentes. Não modificar ou substituir fotos existentes. Não utilizar GitHub Pages como hospedagem comercial principal.

PR de publicação: https://github.com/Delta369369/TioPatinhas/pull/2
