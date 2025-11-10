import React from "react";
import BlogHero from "../Components/Hero/BlogHero";
import PopularBlogs from "../Components/Blogs/PopularBlogs";
import AllBlogs from "../Components/Blogs/AllBlogs";
import Intelligence from "../Components/AppBrain/Intelligence";

const Blogs = () => {
  return (
    <div>
      <BlogHero />
      <div className="app-list-container">
      <div className="app-list">
        <PopularBlogs />
        <AllBlogs/>
        <Intelligence/>
      </div>
      </div>
    </div>
  );
};

export default Blogs;
