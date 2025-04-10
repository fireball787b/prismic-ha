When you're ready to start your project, run the following command:

## Easy setup

```sh
npm install
npm run dev
```

## Unit/Integration:

npm run test

## E2E with cypress

npx cypress run

## Project idea

create a mix between a pokedex and a store. The website lists magical, fantastic and adorable monsters along
with detailed information about their behaviour, size, weight and location. For each monster, there a recommended products
section (if any) to help you take care of their needs. This is very important because the monsters are very demanding

## Data Model

The project revolves around two main content types:

- Monsters: Creatures from an imaginary world.
- Products: Tools or accessories used to take care of monsters.
  Each monster can have 0 to many related products, defined in Prismic via content relationships.

## Use of Generative AI

Nearly all the code in this project was created with the help of AI tools.

- The only manual parts are the interfaces located in the types/ folder.
- The AI generated the full codebase and all tests, based on my detailed prompts.
- It also helped debug and solve several problems — although at times it hallucinated, proposing the same incorrect solution repeatedly.
- Eventually, I had to rely on my own experience and web searches to resolve specific edge cases.

## Architecture

The structure of the project is custom-designed for clarity, reusability, and separation of concerns.

`/components`

This folder includes:

- Reusable UI components like MonsterCard and ProductCard.
- Shared layout components like Header and Footer.

The idea is: if you need to update the footer or header, you only modify the component, not the page that uses it. This keeps the layout clean and centralized.

`/types`
This folder contains all the interfaces for the project.
They are critical because:

- They provide type safety and autocompletion.
- They prevent runtime bugs caused by invalid object shapes.
- They make the code more readable, maintainable, and scalable.

## Pending Improvements

- Handle the case where the connection to Prismic fails gracefully (e.g. fallback UI or retry logic).
- Implement arrow navigation between monsters on the detail page.
- Fix Cypress tests — currently one is failing (likely a minor issue, but I ran out of time).
- Enforce deployments only after successful tests (CI gating).
- Improve the Recommended Products section (UI, structure, flexibility).
- Check for missing data and avoid rendering empty blocks or broken links.
- Enhance responsive layout for mobile and tablet views.
- Add thoughtful loading and error states across all pages.
- Implement proper caching strategies to improve performance.
- Fix the 404 Not Found page — image is currently not loading correctly.
- implement login and stock
- for some reason, intellij raises errors in the jest tests. I've fixed it today but for some reason after some change in the code
  it detects them as non-existant methods (toBeInTheDocument, toHaveAttribute, etc..) but you can run the tests without any problem
  and they run on github so i think it is a problem with my IDE.
