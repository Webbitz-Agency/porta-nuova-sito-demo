import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import BlogPostPage, { generateStaticParams } from "@/app/blog/[slug]/page";
import blog from "@/content/blog";

describe("BlogPostPage", () => {
  it("generates static params for every post", () => {
    expect(generateStaticParams()).toEqual(blog.map((post) => ({ slug: post.slug })));
  });

  it("renders the post title, its sections and a link back to the blog index", async () => {
    const post = blog[0];
    const jsx = await BlogPostPage({ params: Promise.resolve({ slug: post.slug }) });
    render(jsx);

    expect(screen.getByRole("heading", { level: 1, name: post.title })).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2, name: post.sections[0].heading })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Tutti gli articoli/ })).toHaveAttribute("href", "/blog/");
  });

  it("calls notFound() for an unknown slug", async () => {
    await expect(BlogPostPage({ params: Promise.resolve({ slug: "non-esiste" }) })).rejects.toThrow();
  });
});
