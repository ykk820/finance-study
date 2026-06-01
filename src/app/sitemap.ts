import { MetadataRoute } from "next";
import { courses } from "@/data/courses";

const siteUrl = "https://finance-study.yukuan820.workers.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/courses",
    "/exam-focus",
    "/plain-language",
    "/quiz",
    "/wrong-answers",
    "/flashcards",
    "/study-plan",
    "/search",
    "/progress",
    "/security",
  ];

  const courseRoutes = courses.flatMap((course) => [
    {
      url: `${siteUrl}/courses/${course.id}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...course.chapters.map((chapter) => ({
      url: `${siteUrl}/courses/${course.id}/${chapter.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]);

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.6,
    })),
    ...courseRoutes,
  ];
}
