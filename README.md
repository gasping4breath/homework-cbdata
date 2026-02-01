# Zadání

Code: [https://github.com/gasping4breath/homework-cbdata](https://github.com/gasping4breath/homework-cbdata)

Application on Vercel: [https://homework-cbdata.vercel.app/](https://homework-cbdata.vercel.app/)


1. Použij Next.js a Typescript

ANSWER: Boilerplate code is used [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) with next.js and typescript dependencies

1. Vytvoř stránku `/planets`:

ANSWER: Page `/planets` is created in the folder structure `app/planets/page`, which will be automatic colocated by next.js 

   * API pro získání seznamu: https://swapi.info/api/planets

   ANSWER: Page `app/lib/data` fetches `getPlanets()` from API

   * Přidej state pro celou aplikaci se seznamem planet. Tak, aby jej každá komponenta mohla použít.

   ANSWER: `app/planets-context-provider` holdes the state of Planets and ready to be used in a Client component by using `use` hook for streaming of components. Because of this requirement of holding state I decided switch from ISR (there are only 60 planets, so it can be easy static content generated on build time) with ondemand invalidation => streaming approcach using `use` hook and context store, so at least speed of streaming can be used.

   * Použij silně typové objekty.

   ANSWER: Page `app/lib/definition` uses ZOD library to type check and coerce values from API in `getPlanets()` function

1. Přidej další funkce

   * Ošetři stavy aplikace při načítání seznamu a chyb při komunikaci s API.

   ANSWER: API error is handled by try catch of promises [Providing an alternative value with Promise.catch](https://react.dev/reference/react/use), safe return and ZOD type checking. Page `app/not-found`, `app/global-error`, `app/planets/error`, redirection
```bash
const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/planets',
        permanent: true,
      },
    ]
  },
};
```

   * Implementuj stránkování.

   ANSWER: Simple paging is created in `Planets` client component, because we have all the data in context for other components accoring to the previous task. Otherwice can be done by Server Components and cached by pregenerating pages for SEO advantages

   * Tlačítko na refresh dat.

   ANSWER: `app/planets-context-provider` has an action for data refresh, can be dispatched. ISR approach would be easier in `revalidatePath` or `revalidateTag`

1. Nasaď aplikaci tak, aby byla dostupná z internetu.

ANSWER: Application is developed on Vercel hobby website

1. Přidej odpovídající `README.md` a vystav kód tak, aby byl dostupný z internetu.

ANSWER: ([(https://github.com/gasping4breath/homework-cbdata)](https://github.com/gasping4breath/homework-cbdata) and public git repository. I didn't know what should I add more to README except standard development and deployment notes, so just put all answers to the tasks.

1. Pošli nám odkaz na zdrojový kód a nasazenou aplikaci.

ANSWER: 

Code: [https://github.com/gasping4breath/homework-cbdata](https://github.com/gasping4breath/homework-cbdata)

Application on Vercel: [https://homework-cbdata.vercel.app/](https://homework-cbdata.vercel.app/)

TODO: 
1. Improve design
1. Add skeleton for loading to improve Cumulative Layout Shift

## Development

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deployment
Using Vercel hobby deployment:
Application on Vercel: [homework-cbdata.vercel.app](https://homework-cbdata.vercel.app/)