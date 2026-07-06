import { MetadataRoute } from "next";
import { PRODUCTS_DATA } from "@/data/products";
import { SERVICES_DATA } from "@/data/services";
import { BLOGS_DATA } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.pmpilot.in";

  // Core static pages
  const staticRoutes = [
    "",
    "/products",
    "/services",
    "/pricing",
    "/blog",
    "/about",
    "/contact",
    "/book-demo",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic Product Pages
  const productRoutes = Object.keys(PRODUCTS_DATA).map((slug) => ({
    url: `${baseUrl}/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: slug === "projectpilot-ai" ? 0.9 : 0.7,
  }));

  // Dynamic Service Pages
  const serviceRoutes = Object.keys(SERVICES_DATA).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic Blog Pages
  const blogRoutes = Object.keys(BLOGS_DATA).map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...serviceRoutes, ...blogRoutes];
}
