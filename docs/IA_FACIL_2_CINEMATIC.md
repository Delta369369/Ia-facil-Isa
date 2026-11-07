# IA Fácil 2.0 — Imagens do Drive e revisão cinematográfica

## Controle de publicação
- Branch: `feat/ia-facil-2-cinematic-premium`
- Origem: `main` do site público
- Não mesclar sem aprovação do responsável. Cloudflare Pages pode gerar uma prévia automática da branch; isso não representa publicação em produção.
- Todos os arquivos originais de `public/assets/` permanecem íntegros; ver hashes originais no teste `tests/cinematic-home.test.tsx`.

## Inventário dos novos arquivos (fonte: Google Drive da ISA)

| Origem (Google Drive) | Drive ID | Destino | Tamanho original | Contexto |
|---|---|---|---:|---|
| ISA_Oficial_Blazer_Azul_Royal.webp | 1zrRrY928Hbomah3OHwHcx25AA4CqFfxM | public/assets/cinematic/isa-blazer-royal.webp | 334542 B | Hero / ISA virtual |
| ISA_Oficial_Blazer_Marinho_Original.webp | 1DZuErj0Y8q7Iqvm2RUszAknZ8jCq5BZk | public/assets/cinematic/isa-blazer-marinho.webp | 291186 B | Retrato editorial |
| ISA no estúdio criativo (1).png | 1RM_DEZZXT485DC6sqr7SzqC2dAc2WVVA | public/assets/cinematic/isa-estudio.png | 2024544 B | Identidade virtual |
| 03_Template_Campanha_Fotorrealista_FINAL.webp | 17cr2ISX3MqxYbeqS7EB4Nv0GlbS_oyuP | public/assets/cinematic/campanha-fotorrealista.webp | 298670 B | Campanhas |
| Menu de café moderno no smartphone.png | 1xyNj_Oh3JvPc_hBKfrWjyi_doJXLltiH | public/assets/cinematic/cardapio-cafe.png | 2041058 B | Sites e catálogos |
| Presença digital local em destaque.png | 1K8xuMiC_OpTRfUXMyIn8LdJxIMquhGRq | public/assets/cinematic/presenca-local.png | 1917897 B | Presença digital |
| image_20261105_022825.jpg | 1NR8Vzf4iDL1a01gn8SUfEm5ol0aIMBL6 | public/assets/cinematic/gastronomia-01.jpg | 283641 B | Gastronomia |
| image_20261105_013623.jpg | 1el-0MtFxr3WdiUf_y2d5CDP5LL8iFP4o | public/assets/cinematic/barbearia-01.jpg | 179040 B | Campanha de barbearia |

Pasta de origem: https://drive.google.com/drive/folders/1xlNj8VbrjdTU7OID0MlaQ6Ev09bYTC33

Os itens são apresentados como **conceitos demonstrativos**, não como depoimentos ou clientes reais. A ISA Guardiã é uma personagem virtual. Uma imagem de campanha festiva com preço impresso no layout foi deliberadamente **excluída**, para não criar conflito com os preços e condições comerciais atuais. Fotos originais não foram renomeadas, excluídas nem substituídas.

## Revisão técnica
- Nova área editorial de três projetos.
- Galeria ampliada: 14 imagens, seis filtros e modal.
- Hero com retrato da ISA em blazer azul royal.
- Nova camada de estilos `src/styles/cinematic.css` por último, sem apagar CSS anterior.
- Efeitos e responsividade com preferência `prefers-reduced-motion`.
- Modal fecha com Escape e botão de fechamento.
- Atenção ao peso de três PNGs (cerca de 2 MB cada), usados com carregamento diferido e candidatos a futura otimização.
- Testes: `pnpm test`, `pnpm build`, `pnpm test:output`.

## Check de aprovação
- [ ] Inspecionar a prévia do Cloudflare em desktop e celular
- [ ] Verificar enquadramento da ISA e legibilidade do conteúdo das imagens
- [ ] Validar filtros, modal, teclas e navegação
- [ ] Confirmar todos os testes CI verdes
- [ ] Aprovar eventual merge somente depois da avaliação visual
