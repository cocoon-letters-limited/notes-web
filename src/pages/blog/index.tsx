import React, { useEffect, useState } from "react";
import EmptyIcon from "assets/images/webp/empty_blog.webp";
import TopSection from "./components/topSection";
import BlogSection from "./components/blogSection";

const Blog = () => {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    setBlogList([]);
  }, []);

  return (
    <div>
      <TopSection />
      {blogList?.length === 0 ? (
        <div className="flex flex-row items-center justify-center w-6/12 lg:w-4/12 xl:w-3/12 mx-auto pt-16 pb-24">
          <img src={EmptyIcon} alt="Empty List" />
        </div>
      ) : (
        <BlogSection />
      )}
    </div>
  );
};

export default Blog;
