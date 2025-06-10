"use client"
import { useState, useEffect } from 'react';
import React from 'react';
import { client } from '../../lib/client';
import { Category, Category2 } from '../../lib/types';
import './globals.css';

// Import dynamic from next/dynamic
import dynamic from 'next/dynamic';

// Use dynamic to import the Landing component
const Landing = dynamic(() => import('./component/Landing'), { ssr: false });

const Page = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [category2, setCategory2] = useState<Category2[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "category"] | order(_createdAt desc) {
          name,
          notification,
          foods[]-> {
            name,
            inBracket,
            price
          },
          image {
            asset-> {
              _id,
              url
            }
          }
        }`;

        const drinksQuery = `*[_type == "category2"] | order(_createdAt desc) {
          name,
          notification,
          drink[]-> {
            name,
            inBracket,
            price
          }
        }`;

        const [data, drinkData] = await Promise.all([
          client.fetch(query),
          client.fetch(drinksQuery),
        ]);

        setCategories(data);
        setCategory2(drinkData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Landing category2={category2} categories={categories} />
    </div>
  );
};

export default Page;