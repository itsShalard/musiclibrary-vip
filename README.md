# Music Library VIP - Blog Search

A beautiful, responsive blog search website built with Astro and Tailwind CSS, featuring a maximum width of 800px and focused on music-related content.

## Features

- 🎵 **Music-focused content**: Blog posts about music history, production, and insights
- 🔍 **Real-time search**: Search through blog posts by title, artist, genre, tags, or content
- 📱 **Responsive design**: Optimized for all devices with 800px max-width constraint
- ⚡ **Fast performance**: Built with Astro for optimal loading speed
- 🎨 **Modern UI**: Clean, gradient-enhanced design with Tailwind CSS
- � **Content-rich**: Sample blog posts covering various music topics

## Search Functionality

The search form allows users to:
- Filter blog posts in real-time as they type
- Search across multiple fields (title, artist, genre, description, tags, content)
- View search results instantly without page navigation
- See result counts and "no results" messages

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
