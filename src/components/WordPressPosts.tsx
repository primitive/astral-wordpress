import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  // Add other properties as needed
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
          <p>{post.content.rendered}</p>
        </div>
      ))}
    </div>
  );
};

export default WordPressContent;
