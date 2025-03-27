import React from "react";
import { blogPosts } from "../util/blog";
import BlogBody from "../Components/blog/blogBody";
import BlogHeader from "../Components/blog/BlogHeader";
import Faq from "../Components/Faq";

function BlogPage() {
  return (
    <div className="dark:bg-darkblack overflow-x-hidden max-w-screen">
      <BlogHeader />
      <div className="wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  py-10 dark:bg-darkblack">
          {blogPosts.map((post, index) => (
            <BlogBody key={index} {...post} />
          ))}
        </div>
      </div>
      <Faq />
    </div>
  );
}

export default BlogPage;
