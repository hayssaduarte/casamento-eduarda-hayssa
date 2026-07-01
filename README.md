# Site do Casamento — Eduarda & Hayssa

Site estático (HTML/CSS/JS puro), estilo minimalista clean, com animações suaves ao rolar a página, menu responsivo e contagem regressiva.

## Como visualizar localmente

1. Extraia/abra a pasta `site-casamento`
2. Dê dois cliques no arquivo `index.html` — ele abre direto no navegador
3. Para editar: abra os arquivos com qualquer editor de texto (Bloco de Notas, Notepad++, VS Code, etc.)

## Estrutura de arquivos

```
site-casamento/
├── index.html      → conteúdo e textos do site
├── style.css       → cores, fontes, layout, animações
├── script.js       → contagem regressiva, formulário, copiar Pix, menu
└── assets/
    ├── images/      → coloque aqui as fotos (hero-bg.jpg, casal-1.jpg, etc.)
    └── icons/       → (não usado por padrão; ícones estão em SVG direto no HTML)
```

## Pontos que você PRECISA substituir (busque por "PLACEHOLDER" no código)

### 1. Foto de fundo do hero
- Coloque uma foto (a árvore ou o gramado com arco-íris) em `assets/images/hero-bg.jpg`
- O CSS já está configurado para usar esse caminho automaticamente

### 2. Foto do casal (seção "Nossa história")
No `index.html`, troque:
```html
<div class="historia-img reveal reveal-delay-1">
  [ FOTO DO CASAL AQUI ]
</div>
```
Por:
```html
<div class="historia-img reveal reveal-delay-1">
  <img src="assets/images/casal-1.jpg" alt="Eduarda e Hayssa" loading="lazy">
</div>
```

### 3. Texto da "Nossa história"
Troque o parágrafo placeholder pelo texto real de vocês.

### 4. Endereço e Google Maps
- Substitua `[ Endereço completo do local do casamento, Coelho Neto - MA ]` pelo endereço real
- Substitua o `href="#"` do botão "Ver no Google Maps" pelo link real
- Para o mapa incorporado: vá ao Google Maps, busque o local, clique em "Compartilhar" → "Incorporar um mapa", copie o código `<iframe ...>` e cole no lugar indicado (está comentado no HTML)

### 5. Hotéis (seção Hospedagem)
Para cada um dos 3 cards, substitua:
- `[ Nome do Hotel X ]`
- `[ Distância do local ]`
- `[ Telefone ]` e o número em `tel:+5500000000000`
- O número no link do WhatsApp `https://wa.me/55...`
- O `href="#"` de "Ver no mapa"

Se precisar de mais ou menos cards, copie/apague o bloco `<div class="card-hotel">...</div>` inteiro.

### 6. Formulário RSVP (Formspree)
1. Crie uma conta gratuita em https://formspree.io
2. Crie um novo formulário e copie o endpoint (formato `https://formspree.io/f/xxxxxxxx`)
3. No `index.html`, substitua:
```html
<form id="rsvp-form" class="rsvp-form ..." action="https://formspree.io/f/SEU_ENDPOINT_AQUI" method="POST">
```
pelo endpoint real.

### 7. Chave Pix (Lista de presentes)
No `index.html`, existem 6 botões assim:
```html
<button class="btn btn-copiar" data-pix="CHAVE_PIX_AQUI">Copiar chave Pix</button>
```
Substitua `CHAVE_PIX_AQUI` pela chave Pix real (email, CPF, telefone ou chave aleatória) em **todos os 6 botões**.
Você também pode ajustar os nomes e valores sugeridos de cada presente.

### 8. Dress code e informações para convidados
Edite os textos dentro de `<div class="info-card">` na seção "Informações".

### 9. Contatos (WhatsApp)
Substitua `https://wa.me/5500000000000` pelos números reais (formato: 55 + DDD + número, sem espaços ou símbolos).

### 10. Horário oficial
No `script.js`, ajuste a linha:
```js
const dataCasamento = new Date('2026-08-22T17:00:00').getTime();
```
E no `index.html`, ajuste o texto `A partir das 17h00` se o horário mudar.

---

## Como hospedar gratuitamente (GitHub Pages)

1. Crie uma conta gratuita em https://github.com (se ainda não tiver)
2. Crie um novo repositório (pode ser público), ex: `casamento-eduarda-hayssa`
3. Faça upload de **todos os arquivos e pastas** desse projeto para o repositório (botão "Add file" → "Upload files", ou arraste a pasta)
4. Vá em **Settings** (do repositório) → **Pages**
5. Em "Source", selecione a branch `main` e pasta `/ (root)` → Salvar
6. Em alguns minutos, o site estará disponível em:
   `https://SEU_USUARIO.github.io/casamento-eduarda-hayssa/`

### Alternativas (também gratuitas)
- **Netlify**: arraste a pasta do projeto direto em https://app.netlify.com/drop
- **Vercel**: importe o repositório do GitHub em https://vercel.com

---

## Dica de teste rápido

Depois de configurar o Formspree e a chave Pix, abra o site, role até o final, teste:
- Preencher e enviar o formulário de RSVP (você deve receber um email)
- Clicar em "Copiar chave Pix" e colar em algum lugar para confirmar que copiou certo
- Diminuir a janela do navegador (ou abrir no celular) para testar o menu mobile
