import rss from '@astrojs/rss';
import { BASE_URL, DESCRIPTION, TITLE } from '../constants/site';
import { sortByDate } from '../utils/sort-by-date';

// const items = Object.fromEntries(
//     Object.entries(import.meta.glob('./posts/*.md')
//   ).sort(sortByDate).slice(0, 5));

console.log(import.meta.glob('./posts/*.md'))

export const get = () => rss({
    // `<title>` field in output xml
    title: TITLE,
    // `<description>` field in output xml
    description: DESCRIPTION,
    // base URL for RSS <item> links
    // SITE will use "site" from your project's astro.config.
    site: BASE_URL,
    // list of `<item>`s in output xml
    // simple example: generate items for every md file in /src/pages
    // see "Generating items" section for required frontmatter and advanced use cases
    items: import.meta.glob('./posts/*.md'),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });