# IA Fácil Dark Premium — checklist para publicação definitiva

Data de revisão: 2026-11-06 (America/Cuiaba)

## Código e conteúdo

- [x] Versão `feat/ia-facil-dark-premium` isolada da `main`
- [x] Home Dark Premium com ISA Guardiã e área Dark Studio
- [x] Cinco serviços e condições comerciais mantidos
- [x] 11 arquivos existentes de `public/assets` preservados
- [x] Galeria usa imagens previamente existentes e distingue conceitos de trabalhos reais
- [x] Testes de unidade `pnpm test` aprovados no GitHub Actions PR #2
- [x] Compilação `pnpm build` aprovada no GitHub Actions PR #2
- [x] Testes de saída estática aprovados no GitHub Actions PR #2
- [ ] Verificação visual final em celular e computador no ambiente de produção
- [ ] Confirmar funcionamento do contato Instagram em ambiente real

## Publicação — pendências

- [ ] Definir hospedagem para site comercial (não utilizar GitHub Pages como hospedagem principal de negócio sem confirmar adequação aos termos)
- [ ] Confirmar URL final e domínio personalizado, se houver
- [ ] Configurar variáveis SITE_URL / SITE_BASE no build e validar links internos
- [ ] Informar identificação do responsável comercial e canal de privacidade nos textos institucionais
- [ ] Revisar termos comerciais, cancelamentos e licenças
- [ ] Garantir HTTPS e realizar teste real depois da implantação
- [ ] Aprovar implantação final e integrar PR #2 à `main`

## Restrições e decisão

Não executar workflow manual de GitHub Pages nem mesclar o PR sem escolha explícita do destino da hospedagem e conferência das informações institucionais pendentes.

Referência dos testes: https://github.com/Delta369369/TioPatinhas/actions/runs/42326171347

Referência da proposta: https://github.com/Delta369369/TioPatinhas/pull/2
