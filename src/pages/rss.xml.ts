import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: { site: URL | undefined }) {
  const articles = (
    await getCollection("journal", ({ data }) => !data.draft)
  ).sort(
    (a, b) =>
      b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
  );

  return rss({
    title: "Fahrizal Yakin Journal",
    description:
      "Notes about design, software development, data, and the things I learn along the way.",
    site: context.site ?? "https://fahrizalyakin.pages.dev",
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.publishedAt,
      link: `/journal/${article.id}/`,
      categories: [article.data.category, ...article.data.tags],
    })),
    customData: `<language>en-us</language>`,
  });
}