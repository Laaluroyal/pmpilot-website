"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOGS_DATA } from "@/data/blogs";
import { BookOpen, Search, ArrowRight, Calendar, User } from "lucide-react";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Project Management", "AI in PMO", "Customer Stories", "Product Updates"];

  const filteredBlogs = Object.values(BLOGS_DATA).filter((blog) => {
    const matchesCategory = activeCategory === "All" || blog.category === activeCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-mesh-grid">
      <Navbar />

      <main className="flex-grow pt-16 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider mb-3">
              <BookOpen className="h-4 w-4" />
              Resources & Insights
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-text-brand mb-4">
              The PMPilot Blog
            </h1>
            <p className="text-sm text-text-secondary-brand leading-relaxed">
              Guides, case studies, and engineering briefs detailing agile delivery, PMO intelligence, and compliance automation.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-border-brand/60 pb-6 mb-10">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                    activeCategory === cat
                      ? "bg-primary border-primary text-white shadow-sm"
                      : "bg-white border-border-brand text-text-secondary-brand hover:border-primary/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-text-secondary-brand" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-border-brand rounded-xl focus:outline-none focus:border-primary text-text-brand placeholder:text-text-secondary-brand/60 shadow-sm"
              />
            </div>
          </div>

          {/* Blog Grid */}
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredBlogs.map((blog) => (
                <article 
                  key={blog.slug}
                  className="bg-white rounded-3xl border border-border-brand p-6 shadow-premium hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3.5 mb-4 text-[10px] font-bold text-text-secondary-brand uppercase tracking-wider">
                      <span className="text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                        {blog.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {blog.date}
                      </span>
                      <span>
                        {blog.readTime}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-text-brand mb-3 leading-snug">
                      <Link href={`/blog/${blog.slug}`} className="hover:text-primary transition-colors">
                        {blog.title}
                      </Link>
                    </h2>
                    <p className="text-xs text-text-secondary-brand leading-relaxed mb-6">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="border-t border-border-brand/60 pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-[10px]">
                        {blog.author[0]}
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-text-brand">{blog.author}</div>
                        <div className="text-[8px] text-text-secondary-brand -mt-0.5">{blog.authorRole}</div>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${blog.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-primary/80 transition-colors"
                    >
                      Read Article
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-border-brand/60 max-w-md mx-auto">
              <BookOpen className="h-10 w-10 text-text-secondary-brand/40 mx-auto mb-3" />
              <h3 className="text-sm font-bold text-text-brand">No articles found</h3>
              <p className="text-xs text-text-secondary-brand mt-1.5">
                We couldn't find any articles matching your search query. Try broadening your keywords.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
