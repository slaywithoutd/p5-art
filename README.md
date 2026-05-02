# Reprodução de pintura em p5.js — *Forms Derived from a Cube*

Reprodução interativa em p5.js de uma obra do artista conceitual Sol LeWitt, feita como exercício da disciplina.

---

## A pintura

> **Forms Derived from a Cube (in Color)** — Sol LeWitt, 1982.

<!-- adicionar a imagem original da pintura aqui -->
<p align="center">
  <img src="" alt="Forms Derived from a Cube - Sol LeWitt" width="600">
</p>

**Link da imagem:** _(adicionar link da fonte)_

A obra faz parte da investigação de Sol LeWitt sobre o cubo como unidade base — a partir de 1982, ele passou a dividir os lados do cubo em metades, terços e quartos e a conectar esses pontos para gerar formas derivadas. O resultado é uma composição em que cada compartimento colorido contém um cubo isométrico em proporções diferentes (alto, achatado, regular, esticado), todos seguindo a mesma lógica geométrica.

---

## O processo

Dividi a implementação em três etapas — primeiro entender o padrão geométrico da pintura, depois generalizar, e por fim adicionar interação.

### Etapa 1 — Versão simplificada (hard-coded)

Comecei reproduzindo só uma pequena parte do quadro: três quadrantes com um cubo isométrico em cada. Nessa versão, cada vértice de cada cubo foi escrito manualmente no código (sem nenhuma função, só `quad()`s soltos no `draw()`). A ideia não era ser eficiente — era observar de perto como os cubos se comportavam dentro de cada quadrante.

<!-- adicionar imagem da versão simplificada (3 cubos) aqui -->
<p align="center">
  <img src="" alt="Versão simplificada - 3 cubos" width="400">
</p>

Foi enquanto fazia essa versão que percebi o padrão que a pintura toda segue:

- O **vértice central do cubo** (o ponto onde as três faces visíveis se encontram, na vista isométrica) fica **exatamente no centro do quadrante**.
- As quatro pontas extremas do cubo (topo, base, lateral esquerda e lateral direita) ficam sempre a uma **margem fixa** das bordas do quadrante.
- Como a margem é fixa mas os quadrantes têm tamanhos diferentes, cada cubo fica naturalmente **distorcido** — esticado verticalmente em quadrantes altos, achatado em quadrantes baixos, e quase regular em quadrantes quadrados.

Ou seja: dois parâmetros (centro do quadrante + margem fixa) determinam univocamente todos os 7 vértices visíveis do cubo. Essa observação foi a chave pra etapa seguinte.

### Etapa 2 — Função generalizada e quadro completo

Com o padrão identificado, criei uma função `desenharQuadrante(x, y, w, h, corBg, corTopo, corEsq, corDir)` parecida com um `rect()` — recebe a posição e tamanho do quadrante mais as quatro cores (fundo + três faces do cubo). Internamente ela calcula os 7 vértices do cubo a partir das duas regras geométricas observadas na etapa 1, e desenha tudo (fundo, três faces e borda preta).

A partir daí, reproduzir o quadro inteiro virou só uma sequência de chamadas dessa função, uma para cada quadrante da composição. O `draw()` ficou bem limpo e legível.

<!-- adicionar imagem do quadro completo aqui -->
<p align="center">
  <img src="" alt="Quadro completo reproduzido" width="500">
</p>

### Etapa 3 — Interação

Para cumprir o requisito de animação/interação, adicionei o seguinte comportamento:

> **Ao clicar em qualquer quadrante, as cores do cubo daquele quadrante são embaralhadas.**

Cada clique gera uma nova combinação de cores para as três faces do cubo (e/ou para o fundo) do quadrante atingido, mantendo o resto da composição intacta. Isso transforma a obra estática numa pintura "viva", onde o usuário consegue gerar suas próprias variações cromáticas sobre a estrutura geométrica original — bem alinhado com a ideia conceitual do LeWitt de que *"a ideia se torna a máquina que faz a arte"*: a estrutura é fixa, mas as cores podem permutar infinitamente.

<!-- adicionar gif/imagem da interação aqui -->
<p align="center">
  <img src="" alt="Demonstração da interação" width="500">
</p>

---

## Arquivos

- **`index.html`** — página que carrega a biblioteca p5.js e o sketch.
- **`Davi.js`** — sketch principal com a função `desenharQuadrante()` e as chamadas que compõem a pintura.

## Como executar

1. Clonar o repositório.
2. Abrir o `index.html` no navegador (ou rodar com Live Server, se preferir).

---

## Referências

- LeWitt, Sol. *Forms Derived from a Cube (in Color)*, 1982.
- Pace Prints — [Sol LeWitt: Forms Derived from a Cube in Color](https://paceprints.com/2017/sol-lewitt)
- p5.js — [reference oficial](https://p5js.org/reference/)
