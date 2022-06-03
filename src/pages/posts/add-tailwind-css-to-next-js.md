---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
title: Add Tailwind CSS to Next.js
tags: ["tailwindcss", "css"]
publishDate: 02 Jun 2022
description: Step by step guide on how to add Tailwind CSS to a Next.js project
---

First and foremost, install the dependencies and add Tailwind config:

```bash
pnpm add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

# Change tailwind configuration

In order to tell Tailwind where to look for utility classed we have to add the following lines:

```diff
module.exports = {
+ content: [
+   "./pages/**/*.{js,ts,jsx,tsx}",
+   "./components/**/*.{js,ts,jsx,tsx}",
+ ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

# Add the transpiled css to the app

We need to define where Tailwind should generate the css:

```sass
// styles/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

And enjoy!
