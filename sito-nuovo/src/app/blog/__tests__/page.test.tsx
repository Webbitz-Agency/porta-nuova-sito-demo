import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import BlogPage from "@/app/blog/page";
import blog from "@/content/blog";

describe("BlogPage", () => {
  it("renders every post title as a link to its detail page", () => {
    render(<BlogPage />);
    for (const post of blog) {
      const link = screen.getByRole("link", { name: new RegExp(post.title) });
      expect(link).toHaveAttribute("href", `/blog/${post.slug}/`);
    }
  });
});
