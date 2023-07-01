import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Post {
  id: number;
  title: { rendered: string };
  date: string;
  modifed: string;
  excerpt: { rendered: string };
  content: { rendered: string };
  featured_media: number;
  slug: string;
  status: string;
  type: string;
  format: string;
  sticky: boolean;
  template: string;
  comment_status: string;
  author: number;
  categories: number[];
  tags: number[];
}

const Pages = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_WORDPRESS_URL}/wp-json/wp/v2/pages`);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching WordPress pages:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="ion-padding">
      <h2>WordPress Pages</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title.rendered}</h3>
          <small>{post.date}</small>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      ))}
    </div>
  );
};

export default Pages;
