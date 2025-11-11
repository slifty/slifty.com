const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  // Add RSS plugin
  eleventyConfig.addPlugin(pluginRss);

  // Copy assets to output
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  // Collections
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/**/*.md").sort((a, b) => {
      return b.date - a.date; // Sort by date, newest first
    });
  });

  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/projects/**/*.md");
  });

  // Create collections for categories
  eleventyConfig.addCollection("categories", function(collectionApi) {
    const categories = {};
    collectionApi.getFilteredByGlob("src/posts/**/*.md").forEach(post => {
      if (post.data.categories) {
        post.data.categories.forEach(category => {
          if (!categories[category]) {
            categories[category] = [];
          }
          categories[category].push(post);
        });
      }
    });
    return categories;
  });

  // Create collections for tags
  eleventyConfig.addCollection("tags", function(collectionApi) {
    const tags = {};
    collectionApi.getFilteredByGlob("src/posts/**/*.md").forEach(post => {
      if (post.data.tags) {
        post.data.tags.forEach(tag => {
          if (!tags[tag]) {
            tags[tag] = [];
          }
          tags[tag].push(post);
        });
      }
    });
    return tags;
  });

  // Filters
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return new Date(dateObj).toISOString().split('T')[0];
  });

  // Create a filter to get posts by category
  eleventyConfig.addFilter("filterByCategory", (posts, category) => {
    return posts.filter(post =>
      post.data.categories && post.data.categories.includes(category)
    );
  });

  // Create a filter to get posts by tag
  eleventyConfig.addFilter("filterByTag", (posts, tag) => {
    return posts.filter(post =>
      post.data.tags && post.data.tags.includes(tag)
    );
  });

  // Create slug filter for URLs
  eleventyConfig.addFilter("slugify", (str) => {
    return str
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  });

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
