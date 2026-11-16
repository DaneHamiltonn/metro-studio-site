// Metro Studio — Eleventy configuration.
// Pages live in src/, projects (edited in the CMS at /admin) live in src/projects/.
export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "src/favicon.svg": "favicon.svg" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });

  // Projects, in the order set in the CMS (lower first), then newest first.
  eleventyConfig.addCollection("projects", (api) =>
    api.getFilteredByGlob("src/projects/*.md").sort((a, b) =>
      (a.data.order ?? 99) - (b.data.order ?? 99) ||
      (b.data.year_start ?? 0) - (a.data.year_start ?? 0)
    )
  );

  // "2018 – Present", "2020"
  eleventyConfig.addFilter("years", (d) => {
    if (!d?.year_start) return "";
    if (d.status === "Ongoing" || d.year_end === "Present") return `${d.year_start} – Present`;
    if (d.year_end && String(d.year_end) !== String(d.year_start)) return `${d.year_start} – ${d.year_end}`;
    return `${d.year_start}`;
  });
  eleventyConfig.addFilter("head", (arr, n) => (arr || []).slice(0, n));
  eleventyConfig.addFilter("withService", (projects, name) =>
    (projects || []).filter((p) => (p.data.services || []).includes(name))
  );
  eleventyConfig.addFilter("withStatus", (projects, s) => (projects || []).filter((p) => p.data.status === s));
  eleventyConfig.addFilter("without", (projects, url) => (projects || []).filter((p) => p.url !== url));
  eleventyConfig.addFilter("hostname", (u) => { try { return new URL(u).hostname.replace(/^www\./, ""); } catch { return u; } });
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString().slice(0, 10));
  eleventyConfig.addShortcode("year", () => String(new Date().getFullYear()));

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
