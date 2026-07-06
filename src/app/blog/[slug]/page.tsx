import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOGS_DATA } from "@/data/blogs";
import { ArrowLeft, Calendar, BookOpen, Clock, ArrowRight, User } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = BLOGS_DATA[slug];

  if (!blog) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-mesh-grid">
      <Navbar />

      <main className="flex-grow pt-10 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-text-secondary-brand hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>

          {/* Article Header */}
          <article className="space-y-6">
            <div className="flex items-center gap-3.5 text-[10px] font-bold text-text-secondary-brand uppercase tracking-wider">
              <span className="text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                {blog.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {blog.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {blog.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-text-brand leading-tight">
              {blog.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-3 border-y border-border-brand/60 py-4">
              <div className="h-10 w-10 bg-primary/15 text-primary rounded-full flex items-center justify-center font-bold text-sm">
                {blog.author[0]}
              </div>
              <div>
                <div className="text-xs font-bold text-text-brand">{blog.author}</div>
                <div className="text-[10px] text-text-secondary-brand">{blog.authorRole}</div>
              </div>
            </div>

            {/* Article Content */}
            <div className="text-sm text-text-brand leading-relaxed space-y-6 pt-4 font-normal">
              <p className="text-base text-text-secondary-brand font-medium italic border-l-2 border-primary pl-4 py-1.5">
                {blog.excerpt}
              </p>
              
              {/* Render content paragraphs */}
              {blog.content.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Bottom Call to Action */}
            <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-white border border-border-brand shadow-premium flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1.5 text-left">
                <h3 className="text-base font-bold text-text-brand">Ready to try PMO automation?</h3>
                <p className="text-xs text-text-secondary-brand max-w-md">
                  Boost your engineering workflows using ProjectPilot AI. Generate functional specs and JIRA backlogs today.
                </p>
              </div>
              <Link
                href="https://portal.pmpilot.in"
                target="_blank"
                className="inline-flex items-center gap-1.5 px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary to-secondary hover:opacity-95 rounded-xl shadow-md transition-all hover:-translate-y-0.5 cursor-pointer shrink-0"
              >
                Launch Workspace
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
