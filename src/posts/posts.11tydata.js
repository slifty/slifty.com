/**
 * @typedef {Object} PageData
 * @property {Object} page
 * @property {Date} page.date
 * @property {string} page.fileSlug
 */

module.exports = {
  layout: "layouts/post.njk",
  tags: "posts",
  /**
   * @param {PageData} data
   * @returns {string}
   */
  permalink: function(data) {
    const date = new Date(data.page.date);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `/${year}/${month}/${data.page.fileSlug}/index.html`;
  }
};
