# Boilerplate and Starter for Next JS 13+, Tailwind CSS 3.2 and TypeScript 


π Boilerplate and Starter for Next.js, Tailwind CSS and TypeScript β‘οΈ Made with developer experience first: Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged, Commitlint, VSCode, Netlify, PostCSS, Tailwind CSS.

### Features

Developer experience first:

- β‘ [Next.js](https://nextjs.org) for Static Site Generator
- π₯ Type checking [TypeScript](https://www.typescriptlang.org)
- π Integrate with [Tailwind CSS](https://tailwindcss.com)
- β Strict Mode for TypeScript and React 18
- π Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration)
- π Code Formatter with [Prettier](https://prettier.io)
- π¦ Husky for Git Hooks
- π« Lint-staged for running linters on Git staged files
- π Lint git commit with Commitlint
- π Write standard compliant commit messages with Commitizen
- π Automatic changelog generation with Semantic Release
- π Visual testing with Percy (Optional)
- π‘ Absolute Imports using `~` prefix
- π VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript
- π€ SEO metadata, JSON-LD and Open Graph tags with Next SEO
- πΊοΈ Sitemap.xml and robots.txt with next-sitemap
- βοΈ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- π±οΈ One click deployment with Vercel or Netlify (or manual deployment to any hosting services)
- π Include a FREE minimalist theme
- π― Maximize lighthouse score

### Requirements

- Node.js 14+ and npm

### Getting started

Run the following command on your local environment:

```shell
git clone --depth=1 https://github.com/farzanshibu/nextjs-starter-template.git my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```shell
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```shell
.
βββ README.md                       # README file
βββ __mocks__                       # Mocks for testing
βββ .github                         # GitHub folder
βββ .husky                          # Husky configuration
βββ .vscode                         # VSCode configuration
βββ public                          # Public assets folder
βββ src
β   βββ layouts                     # Layouts components
β   βββ pages                       # Next JS Pages
β   βββ pages.test                  # Next JS Pages tests (this avoid test to treated as a Next.js pages)
β   βββ styles                      # Styles folder
β   βββ templates                   # Default template
β   βββ utils                       # Utility functions
βββ tailwind.config.js              # Tailwind CSS configuration
βββ tsconfig.json                   # TypeScript configuration
```

### Customization

You can easily configure Next js Boilerplate by making a search in the whole project with `FIXME:` for making quick customization. Here is some of the most important files to customize:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your website favicon, you can generate from https://favicon.io/favicon-converter/
- `src/styles/global.css`: your CSS file using Tailwind CSS
- `src/utils/AppConfig.ts`: configuration file
- `src/templates/Main.tsx`: default theme
- `next-sitemap.config.js`: sitemap configuration

You have access to the whole code source if you need further customization. The provided code is only example for you to start your project. The sky is the limit π.

### Commit Message Format

The project enforces [Conventional Commits](https://www.conventionalcommits.org/) specification. This means that all your commit messages must be formatted according to the specification. To help you write commit messages, the project uses [Commitizen](https://github.com/commitizen/cz-cli), an interactive CLI that guides you through the commit process. To use it, run the following command:

```shell
npm run commit
```

One of the benefits of using Conventional Commits is that it allows us to automatically generate a `CHANGELOG` file. It also allows us to automatically determine the next version number based on the types of commits that are included in a release.

### Deploy to production

You can see the results locally in production mode with:

```shell
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```shell
npm run build-prod
```

Now, your blog is ready to be deployed. All generated files are located at `out` folder, which you can deploy with any hosting service.

### Deploy to Netlify

Clone this repository on own GitHub account and deploy to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ixartz/Next-js-Boilerplate)

### Deploy to Vercel

Deploy this Next JS Boilerplate on Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fixartz%2FNext-js-Boilerplate)
