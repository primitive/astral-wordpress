import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Page {
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

const Page = () => {
  const [page, setPage] = useState<Page | null>(null);

  useEffect(() => {
    const fetchHomePage = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_WORDPRESS_URL}/wp-json/wp/v2/pages?slug=home`);
        
        if (response.data.length > 0) {
          setPage(response.data[0]);
        }
      } catch (error) {
        console.error('Error fetching WordPress homepage:', error);
      }
    };

    fetchHomePage();
  }, []);

  return (
    <div className="ion-padding">
      {page ? (
        <>
          <h2>{page.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Page;
