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
  const [showContent, setShowContent] = useState<boolean>(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_WORDPRESS_URL}/wp-json/wp/v2/posts`);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching WordPress posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const toggleDisplay = () => {
    setShowContent((prevState) => !prevState);
  };

  return (
    <div className="ion-padding">
      <h2>WordPress Posts</h2>
      <button onClick={toggleDisplay}>
        {showContent ? 'Show Excerpt' : 'Show Content'}
      </button>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title.rendered}</h3>
          <small>{post.date}</small>
          {showContent ? (
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          ) : (
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Posts;
