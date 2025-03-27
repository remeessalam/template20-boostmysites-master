import React from "react";
import ViewBlogHeader from "../Components/blog/ViewBlogHeader";
import { useTheme } from "../Context/ThemeContext";
import ViewBlogContent from "../Components/blog/viewBlogContent";
import { useParams } from "react-router-dom";
import { blogPosts } from "../util/blog";
import BlogBody from "../Components/blog/blogBody";
import Faq from "../Components/Faq";
import RoundedHeader from "../Components/RoundedHeader";

function BlogView() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const { id } = useParams();
  const blogId = Number(id);
  const blog = blogPosts.find((post) => post.id === blogId);

  function getRandomPosts(posts, count, excludeId) {
    const filteredPosts = posts.filter((post) => post.id !== excludeId);
    const shuffled = filteredPosts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  const randomPosts = getRandomPosts(blogPosts, 3, blogId);

  return (
    <div className="relative bg-white dark:bg-darkblack overflow-x-hidden max-w-screen">
      <div
        className={`absolute ${
          isDarkMode ? `flex` : "hidden"
        } md:-top-[109rem] -top-[172rem]  blur-3xl left-0 w-full h-full bg-footerBackground  `}
      />{" "}
      <div className="relative max-w-3xl mx-auto px-4  pt-[7rem]   overflow-hidden ">
        <ViewBlogHeader
          image={blog.imageUrl}
          title={blog.title}
          readTime={blog.readTime}
          date={blog.date}
        />
        <ViewBlogContent />
      </div>
      <div className="wrapper paddingtop">
        <div className="flex justify-center items-center flex-col">
          <RoundedHeader title={"Recent Posts"} />
          <h1 data-aos="fade-up" className="main-title my-3">
            Related Posts
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5 dark:bg-darkblack">
            {randomPosts.map((post, index) => (
              <BlogBody key={index} {...post} passkey={true} />
            ))}
          </div>
        </div>
        <Faq />
      </div>
    </div>
  );
}

export default BlogView;
