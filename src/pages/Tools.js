import React from 'react';
import Card from '../Card';

const Tools = () => (
  <div className="container mx-auto text-center py-20">
    <h2 className="text-4xl mb-4">Tools</h2>
    <p className="mb-4">Explore our wide range of tools designed to help you succeed.</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card
        title="Cloudflare Docker Mirror"
        description="My Docker image repository"
        link="https://docker.mutse.top"
      />
      <Card
        title="Official Docker Hub"
        description="The official Docker image repository"
        link="https://hub.docker.com"
      />
    </div>
  </div>
);

export default Tools;
