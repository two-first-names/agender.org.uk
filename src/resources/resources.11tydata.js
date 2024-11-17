export default {
  eleventyComputed: {
    permalink: (data) => data.url ? false : undefined
  }
}