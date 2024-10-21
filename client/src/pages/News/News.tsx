import { type Blog } from "../../types/Types";
import { MockBlogs as blogs } from "./components/MockBlogs";
import { useState } from "react";
import {
  Clock,
  ChevronRight,
  ArrowLeft,
  Share2,
  Bookmark,
  ThumbsUp,
} from "lucide-react";

export default function News() {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  const BlogPreview = ({ blog }: { blog: Blog }) => (
    <div
      onClick={() => setSelectedBlog(blog)}
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer"
    >
      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
        <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
          {blog.category}
        </span>
        <span className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          {blog.readTime}
        </span>
      </div>

      <h2 className="text-xl font-semibold text-gray-900 mb-2">{blog.title}</h2>

      <p className="text-gray-600 mb-4">{blog.preview}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-gray-200 rounded-full" />
          <div>
            <p className="text-sm font-medium text-gray-900">{blog.author}</p>
            <p className="text-sm text-gray-500">
              {new Date(blog.date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <ChevronRight className="h-5 w-5 text-gray-400" />
      </div>
    </div>
  );

  const FullBlogView = ({ blog }: { blog: Blog }) => (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <button
          onClick={() => setSelectedBlog(null)}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to all articles
        </button>

        <div className="space-y-6">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full">
              {blog.category}
            </span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {blog.readTime}
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900">{blog.title}</h1>

          <div className="flex items-center justify-between py-4 border-y border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-gray-200 rounded-full" />
              <div>
                <p className="font-medium text-gray-900">{blog.author}</p>
                <p className="text-sm text-gray-500">
                  {new Date(blog.date).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="text-gray-500 hover:text-gray-700">
                <Share2 className="h-5 w-5" />
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <Bookmark className="h-5 w-5" />
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <ThumbsUp className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">{blog.content}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {selectedBlog ? (
        <FullBlogView blog={selectedBlog} />
      ) : (
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Medical News & Insights
            </h1>
            <p className="text-gray-600">
              Stay updated with the latest developments in healthcare and
              medicine
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {blogs.map((blog) => (
              <BlogPreview key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
