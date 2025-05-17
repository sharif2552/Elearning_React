import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  // Fetch the blog post data using the id from the URL
  const post = {
    title: "Understanding JavaScript Closures",
    author: "John Doe",
    date: "June 15, 2024",
    content:
      "Closures are a fundamental concept in JavaScript that every developer should understand. In this post, we will explore what closures are, how they work, and why they are useful...",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStl_SKDMPEgoJzK4EUrcHQ2fFmy6QR2DXguA&s",
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-lg p-8">
          <img
            className="h-96 w-full object-cover rounded-lg"
            src={post.imageUrl}
            alt={post.title}
          />
          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            {post.title}
          </h2>
          <div className="mt-4 text-gray-500">
            <span>{post.author}</span> | <span>{post.date}</span>
          </div>
          <div className="mt-6 text-lg text-gray-700">{post.content}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
