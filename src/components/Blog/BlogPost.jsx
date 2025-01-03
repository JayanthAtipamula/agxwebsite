import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import blogPosts from './blogData';

const BlogPost = () => {
  const { slug } = useParams(); // Use slug instead of id
  const post = blogPosts.find((post) => post.slug === slug); // Find post by slug

  // Reset scroll position to the top when the component mounts or the slug changes
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [slug]); // Trigger effect when the slug changes

  if (!post) {
    return <div className="text-white text-center py-20">Blog post not found.</div>;
  }

  return (
    <section className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center" // Center the content
        >
          {/* Blog Image */}
          <div className="w-full flex justify-center"> {/* Center the image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full max-w-3xl h-64 md:h-96 object-cover rounded-xl mb-8"
              loading="lazy" // Lazy load the image
            />
          </div>

          {/* Blog Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            {post.title}
          </h1>

          {/* Blog Date */}
          <p className="text-gray-400 text-sm mb-8 text-center">January 3, 2025</p> {/* Updated date */}

          {/* Blog Content */}
          <div
            className="text-gray-300 leading-relaxed prose prose-invert max-w-3xl w-full" // Center and limit width
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPost;