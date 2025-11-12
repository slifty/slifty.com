import "tsx/esm";
import pluginRss from "@11ty/eleventy-plugin-rss";
import Image from "@11ty/eleventy-img";

interface CollectionItem {
  data: {
    categories?: string[];
    tags?: string[];
    [key: string]: any;
  };
  date: Date;
  url: string;
  [key: string]: any;
}

interface CollectionApi {
  getFilteredByGlob(glob: string): CollectionItem[];
}

interface CategoryCollection {
  [category: string]: CollectionItem[];
}

interface TagCollection {
  [tag: string]: CollectionItem[];
}

export default function(eleventyConfig: any) {
  // Add RSS plugin
  eleventyConfig.addPlugin(pluginRss);

  // Image shortcode for responsive images
  eleventyConfig.addShortcode("image", async function(src: string, alt: string, sizes: string = "100vw") {
    const metadata = await Image(src, {
      widths: [300, 600, 1200],
      formats: ["webp", "jpeg"],
      outputDir: "./public/assets/images/",
      urlPath: "/assets/images/"
    });

    const imageAttributes = {
      alt,
      sizes,
      loading: "lazy" as const,
      decoding: "async" as const
    };

    return Image.generateHTML(metadata, imageAttributes);
  });

  // Copy assets to output
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  // Helper function to build category collection
  function buildCategoryCollection(collectionApi: CollectionApi): CategoryCollection {
    const categories: CategoryCollection = {};
    collectionApi.getFilteredByGlob("src/posts/**/*.md").forEach((post) => {
      if (post.data.categories) {
        post.data.categories.forEach((category) => {
          if (!categories[category]) {
            categories[category] = [];
          }
          categories[category].push(post);
        });
      }
    });
    return categories;
  }

  // Helper function to build tag collection
  function buildTagCollection(collectionApi: CollectionApi): TagCollection {
    const tags: TagCollection = {};
    collectionApi.getFilteredByGlob("src/posts/**/*.md").forEach((post) => {
      if (post.data.tags) {
        post.data.tags.forEach((tag) => {
          // Filter out the "posts" tag which is used for collection
          if (tag !== "posts") {
            if (!tags[tag]) {
              tags[tag] = [];
            }
            tags[tag].push(post);
          }
        });
      }
    });
    return tags;
  }

  // Collections
  eleventyConfig.addCollection("posts", function(collectionApi: CollectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/**/*.md").sort((a, b) => {
      return b.date.getTime() - a.date.getTime(); // Sort by date, newest first
    });
  });

  eleventyConfig.addCollection("projects", function(collectionApi: CollectionApi) {
    return collectionApi.getFilteredByGlob("src/projects/**/*.md");
  });

  eleventyConfig.addCollection("categories", function(collectionApi: CollectionApi) {
    return buildCategoryCollection(collectionApi);
  });

  eleventyConfig.addCollection("categoriesArray", function(collectionApi: CollectionApi) {
    return Object.entries(buildCategoryCollection(collectionApi));
  });

  eleventyConfig.addCollection("tags", function(collectionApi: CollectionApi) {
    return buildTagCollection(collectionApi);
  });

  eleventyConfig.addCollection("tagsArray", function(collectionApi: CollectionApi) {
    return Object.entries(buildTagCollection(collectionApi));
  });

  // Filters
  eleventyConfig.addFilter("readableDate", (dateObj: Date) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj: Date) => {
    return new Date(dateObj).toISOString().split('T')[0];
  });

  // Create a filter to get posts by category
  eleventyConfig.addFilter("filterByCategory", (posts: CollectionItem[], category: string) => {
    return posts.filter((post) =>
      post.data.categories && post.data.categories.includes(category)
    );
  });

  // Create a filter to get posts by tag
  eleventyConfig.addFilter("filterByTag", (posts: CollectionItem[], tag: string) => {
    return posts.filter((post) =>
      post.data.tags && post.data.tags.includes(tag)
    );
  });

  // Slugify filter for URLs
  // Note: @sindresorhus/slugify is an ESM package and can't be used with require()
  eleventyConfig.addFilter("slugify", (str: string) => {
    return str
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  });

  // Limit filter for arrays
  eleventyConfig.addFilter("limit", <T>(array: T[], limit: number) => {
    return array.slice(0, limit);
  });

  // Configure markdown-it to allow HTML
  eleventyConfig.amendLibrary("md", (mdLib: any) => {
    mdLib.set({ html: true });
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
}
