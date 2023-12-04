import React from "react";
import { useParams } from "react-router-dom";
import articleContent from "./article-content";
import NotFound from "./NotFound";

const Article = () => {
  const { name } = useParams();
  const article = articleContent.find((article) => article.name === name);
  if (!article) return <NotFound />;

  const otherArticles = articleContent.filter(
    (article) => article.name !== name,
  );
  return (
    <div className="justify-center">
      <h1 className="justify-center text-2xl font-bold my-6 text-black">
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
          {paragraph}
        </p>
      ))}
      <h1 className="sm:text-2xl text-xl font-bold my-4 text-gray-900">
        other articles
      </h1>
      <div className="flex flex-wrap -m-4">
        <Article articles={otherArticles} />
      </div>
    </div>
  );
};

export default Article;
