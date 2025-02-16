# note

1. all the components provided by Shadcn UI has its own style, if not suitable, you should rewrite it;

2. some components has to live in a client component, since it need to handle client, for example Chart;

3. Draw component have a Portal component, and this need to use conditional rendering;

4. Sometime you need to consult the Shadcn github repository, for example the Draw component, it provide a mediaQuery hook in its reposotiry;

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
