import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Post {
  id: number;
  title: { rendered: string };
  date: string;
  modifed: string;
  excerpt: { rendered: string };
  content: { rendered: string };
  author: number;
  slug: string;
  status: string;
  type: string;
}

const WordPressContent = () => {
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
    <div>
      <h2>WordPress Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title.rendered}</h3>
          <h3>{post.date}</h3>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      ))}
    </div>
  );
};

export default WordPressContent;
