# Mariana Chaluppe (Meg) | Portfolio

Portfolio pessoal e profissional de Mariana Chaluppe, também conhecida como Meg, com foco em comunicação estratégica, jornalismo, produção de conteúdo e presença digital.

## Sobre o projeto

Este projeto foi desenvolvido para apresentar:

- trajetória profissional
- especialidades e competências
- cases e projetos selecionados
- contatos e canais de comunicação

A interface foi pensada em um estilo editorial/brutalista, com visual moderno e forte identidade visual.

## Stack utilizada

- React
- TypeScript
- Vite
- TanStack Start
- TanStack Router
- TanStack Query
- Tailwind CSS
- Framer Motion
- Lucide React

## Requisitos

- Node.js 18+
- npm

## Instalação

```bash
npm install
```

## Scripts

```bash
npm run dev
```

Inicia o servidor de desenvolvimento local.

```bash
npm run build
```

Gera a build de produção.

```bash
npm run preview
```

Previsualiza a build localmente.

```bash
npm run lint
```

Executa a validação do código com ESLint.

## Estrutura principal

```text
src/
├── assets/
├── components/
├── hooks/
├── lib/
├── routes/
├── router.tsx
├── server.ts
├── start.ts
├── styles.css
└── routeTree.gen.ts
```

## Como rodar localmente

```bash
npm install
npm run dev -- --host 0.0.0.0
```

A aplicação fica disponível em:

```text
http://localhost:5173
```

## GitHub Pages

Este projeto já foi configurado para geração de build em pasta pública do GitHub Pages.

### Build para Pages

```bash
npm run build:pages
```

A saída será gerada em `docs/` e pode ser usada como origem do GitHub Pages.

### Configuração no GitHub

1. Vá em Settings > Pages
2. Em "Source", selecione a branch principal
3. Escolha a pasta `/docs`
4. Salve

> O projeto usa `base: "./"` para garantir que os assets funcionem corretamente em subpastas e em páginas do GitHub Pages.

## Observações

- O projeto foi preparado para funcionar como portfolio pessoal em ambiente local e produção.
- A identidade visual e o conteúdo podem ser adaptados facilmente para novas informações, casos e redes sociais.
- O build foi validado e está funcionando corretamente.
