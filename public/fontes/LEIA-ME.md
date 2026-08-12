# Fontes — ITC Avant Garde Gothic

Esta pasta guarda os arquivos da fonte **ITC Avant Garde Gothic**, servidos
estaticamente pelo Next em `/fontes/...` e declarados via `@font-face` em
`app/globals.css`.

## Arquivos esperados

O projeto usa dois pesos. Coloque os arquivos aqui com **exatamente** estes nomes:

| Peso CSS            | Corte da família | Nome do arquivo                     |
| ------------------- | ---------------- | ----------------------------------- |
| `500` (`font-medium`) | Medium         | `ITCAvantGardeGothic-Medium.woff2`  |
| `700` (`font-bold`)   | Bold / Demi    | `ITCAvantGardeGothic-Bold.woff2`    |

O `@font-face` aceita, em ordem de preferência, `.woff2`, `.woff` e `.ttf` com o
mesmo nome-base — então se você só tiver `ITCAvantGardeGothic-Bold.ttf`, ele
também funciona. O `.woff2` é o mais leve e o recomendado para web.

## Convertendo de OTF/TTF para WOFF2

A fonte costuma ser licenciada em `.otf`. Para converter:

- <https://transfonter.org/> (marque "WOFF2", sem subsetting se o texto tiver acentos)
- ou, via CLI: `npx ttf2woff2 < ITCAvantGardeGothic-Bold.ttf > ITCAvantGardeGothic-Bold.woff2`

## Licença

ITC Avant Garde Gothic é uma fonte comercial da ITC/Monotype. Os binários **não**
são redistribuíveis livremente e por isso não estão versionados aqui — use os
arquivos da sua licença (webfont kit) e confirme que ela cobre uso em web
(`@font-face`), que costuma ser um licenciamento separado do desktop.

## Enquanto os arquivos não estiverem aqui

O site não quebra: a pilha de fallback em `globals.css` cai para Century Gothic
(presente na maioria dos Windows/Office) e depois para a sans-serif do sistema.
