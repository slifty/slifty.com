/**
 * @typedef {Object} TagData
 * @property {[string, any[]]} tagData
 */

module.exports = {
  layout: "layouts/base.njk",
  pagination: {
    data: "collections.tagsArray",
    size: 1,
    alias: "tagData",
    addAllPagesToCollections: true
  },
  eleventyComputed: {
    /**
     * @param {TagData} data
     * @returns {string}
     */
    title: (data) => `Tag: ${data.tagData[0]}`,
    /**
     * @param {TagData} data
     * @returns {string}
     */
    description: (data) => `Posts tagged with ${data.tagData[0]}`,
    /**
     * @param {TagData} data
     * @returns {string}
     */
    permalink: (data) => {
      const slug = data.tagData[0]
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
      return `/tag/${slug}/index.html`;
    }
  }
};
