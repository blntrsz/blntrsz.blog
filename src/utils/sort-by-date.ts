export const sortByDate = (a, b) =>
  new Date(b.frontmatter.publishDate).valueOf() -
  new Date(a.frontmatter.publishDate).valueOf();
