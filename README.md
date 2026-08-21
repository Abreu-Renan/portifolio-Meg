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

## Deploy no Vercel

Este projeto está configurado para deploy no Vercel como aplicação SSR com TanStack Start + Nitro.

### Build de produção

```bash
npm run build
```

### Preview local

```bash
npm run preview
```

### Publicação no Vercel

1. Conecte o repositório ao Vercel.
2. Use a configuração padrão do framework Vite/React.
3. Faça o deploy da branch principal.

> A configuração do projeto foi ajustada para evitar conflitos com deploys de páginas estáticas e manter a compatibilidade com o Vercel.

## Observações

- O projeto foi preparado para funcionar como portfolio pessoal em ambiente local e produção.
- A identidade visual e o conteúdo podem ser adaptados facilmente para novas informações, casos e redes sociais.
- O build foi validado e está funcionando corretamente.
