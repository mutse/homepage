import React from 'react';

const Photo = () => (
  <div className="container mx-auto text-center py-20">
    <h2 className="text-4xl mb-4">Photo Page</h2>
    <p className="mb-4">Discover our powerful photo editing tools and features.</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="p-6 bg-white shadow-md rounded">
        <img src="https://telegraph-image-3qp.pages.dev/file/3b1892584fe2e994c060a.png" alt="Example" className="mb-2"/>
        <h3 className="text-2xl mb-2">Photo 1</h3>
        <p>Detail about photo 1.</p>
      </div>
      <div className="p-6 bg-white shadow-md rounded">
        <img src="https://telegraph-image-3qp.pages.dev/file/fd947fab9877f21cf5052.png" alt="Example" className="mb-2"/>
        <h3 className="text-2xl mb-2">Photo 2</h3>
        <p>Detail about photo 2.</p>
      </div>
      <div className="p-6 bg-white shadow-md rounded">
        <img src="https://via.placeholder.com/150" alt="Example" className="mb-2"/>
        <h3 className="text-2xl mb-2">Photo 3</h3>
        <p>Detail about photo 3.</p>
      </div>
    </div>
  </div>
);

export default Photo;
