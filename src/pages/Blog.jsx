import React from "react";
import Navbar from "../components/Navbar";

const Blog = () => {
  // Example blog data; replace with your actual data fetching logic
  const blogPosts = [
    {
      id: 1,
      title: "Understanding JavaScript Closures",
      author: "John Doe",
      date: "June 15, 2024",
      excerpt:
        "Closures are a fundamental concept in JavaScript that every developer should understand. In this post, we will explore what closures are, how they work, and why they are useful.",
      imageUrl:
        "https://cdn.prod.website-files.com/610bb663a35dd3364ddbf08c/6217944a3023542e3a3ecebc_javascript-closures.png",
    },
    {
      id: 2,
      title: "A Guide to Responsive Design with Tailwind CSS",
      author: "Jane Smith",
      date: "June 10, 2024",
      excerpt:
        "Responsive design is crucial for modern web development. Learn how to create responsive layouts easily using Tailwind CSS.",
      imageUrl:
        "https://cdnblog.webkul.com/blog/wp-content/uploads/2024/05/tailwindcss-1633184775.webp",
    },
    {
      id: 3,
      title: "Top 10 Tips for Effective Online Learning",
      author: "Sam Johnson",
      date: "June 5, 2024",
      excerpt:
        "Online learning can be challenging. Here are our top 10 tips to help you stay motivated and succeed in your online courses.",
      imageUrl:
        "https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/03/24185535/Online-Learning.jpg",
    },
  ];

  return (
    <div>
      <div className=" mb-11">
        <Navbar />
      </div>
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className=" text-7xl text-indigo-600 font-semibold tracking-wide uppercase">
              Blog
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:tracking-tight lg:text-5xl">
              Latest Articles
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-16">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="flex flex-col bg-white shadow-xl rounded-lg p-8"
              >
                <img
                  className="h-48 w-full object-cover rounded-lg"
                  src={post.imageUrl}
                  alt={post.title}
                />
                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {post.title}
                </h3>
                <p className="mt-4 text-lg text-gray-500">{post.excerpt}</p>
                <div className="mt-6">
                  <a
                    href={`/blog/${post.id}`}
                    className="text-indigo-600 hover:text-indigo-900 font-semibold"
                  >
                    Read more
                  </a>
                </div>
                <div className="mt-4 text-gray-400 text-sm">
                  <span>{post.author}</span> | <span>{post.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
