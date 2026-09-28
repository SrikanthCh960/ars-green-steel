import qualityGuide from "@/data/editorial-blog-posts.json";
import priceFactorsGuide from "@/data/tmt-bar-price-factors-post.json";
import manufacturingGuide from "@/data/tmt-bar-manufacturing-process-post.json";
import gradesGuide from "@/data/tmt-bar-grades-post.json";
import type { BlogCategory } from "@/lib/blog-content";

export type EditorialBlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  category: BlogCategory;
  readTime: string;
  guideLabel: string;
  guideHeadingIds?: string[];
  image: string;
  mobileImage: string;
  imageAlt: string;
  bodyHtml: string;
};

export const editorialBlogPosts: EditorialBlogPost[] = [
  gradesGuide as EditorialBlogPost,
  manufacturingGuide as EditorialBlogPost,
  priceFactorsGuide as EditorialBlogPost,
  qualityGuide as EditorialBlogPost,
];

export function getEditorialBlogPost(slug: string) {
  return editorialBlogPosts.find((post) => post.slug === slug);
}
