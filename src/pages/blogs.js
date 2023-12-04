import React from "react";
import articleContent from "./article-content";

// components
import Articles from "../components/Articles.js";

const Blogs = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center dark:text-white underline sm:text-4xl text-2xl font-bold  text-gray-900">
        BlogsPage
      </h1>
      <div className="container py-4 mx-auto">
        <Articles articles={articleContent} />
      </div>
    </div>
  );
};

export default Blogs;
