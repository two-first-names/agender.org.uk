export default {
  eleventyComputed: {
    permalink: ({ page }) => {
      return `${page.filePathStem.replace(/^\/pages/, '').replace(/index$/, '')}/`
    }
  }
}