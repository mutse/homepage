import React from 'react';

const Blog = () => (
  <div className="container mx-auto text-center py-20">
    <h2 className="text-4xl mb-4">Blog Page</h2>
    <p className="mb-4">Read our latest articles and updates on our blog.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-6 bg-white shadow-md rounded">
        <h3 className="text-2xl mb-2">Blog Post 1</h3>
        <p>Detail about blog post 1.</p>
      </div>
      <div className="p-6 bg-white shadow-md rounded">
        <h3 className="text-2xl mb-2">Blog Post 2</h3>
        <p>Detail about blog post 2.</p>
      </div>
    </div>
  </div>
);

export default Blog;
