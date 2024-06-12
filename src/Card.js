
import React from 'react';

const Card = ({ title, description, link }) => (
  <div className="p-6 bg-white shadow-md rounded">
    <h3 className="text-2xl mb-2">{title}</h3>
    <p>{description}</p>
    <a href={link} className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
      Visit More
    </a>
  </div>
);

export default Card;
