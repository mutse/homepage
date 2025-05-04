import React, { useState } from 'react';
import photoConfig from '../config/photoConfig';

const Photo = () => {
  const [isExpanded, setIsExpanded] = useState([false, false, false]);

  const toggleExpand = (index) => {
    setIsExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <div className="container mx-auto text-center py-20">
      <h2 className="text-4xl mb-4">Photo Prompts</h2>
      <p className="mb-4">Discover our photos and prompts by AI tools.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {photoConfig.map((photo, index) => (
          <div key={index} className="p-6 bg-white shadow-md rounded" title={`This is ${photo.name}`} onClick={() => toggleExpand(index)}>
            <img src={photo.path} alt="Example" className="mb-2"/>
            <h3 className="text-2xl mb-2">{photo.name}</h3>
            {isExpanded[index] && <p>{photo.prompt}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photo;
