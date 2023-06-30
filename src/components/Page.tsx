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

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // sk-dev todo: extract config to a separate file
        // const response = await axios.get('https://your-wordpress-site/wp-json/wp/v2/posts');
        const response = await axios.get('https://sknow.it/wp-json/wp/v2/posts');

        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching WordPress posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="ion-padding">
      <h2>WordPress Posts</h2>
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

export default Posts;
