/**
 * @typedef {Object} CategoryData
 * @property {[string, any[]]} categoryData
 */

module.exports = {
  layout: "layouts/base.njk",
  pagination: {
    data: "collections.categoriesArray",
    size: 1,
    alias: "categoryData",
    addAllPagesToCollections: true
  },
  eleventyComputed: {
    /**
     * @param {CategoryData} data
     * @returns {string}
     */
    title: (data) => `Category: ${data.categoryData[0]}`,
    /**
     * @param {CategoryData} data
     * @returns {string}
     */
    description: (data) => `Posts in the ${data.categoryData[0]} category`,
    /**
     * @param {CategoryData} data
     * @returns {string}
     */
    permalink: (data) => {
      const slug = data.categoryData[0]
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
      return `/category/${slug}/index.html`;
    }
  }
};
