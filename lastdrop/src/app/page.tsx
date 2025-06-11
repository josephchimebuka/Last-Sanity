"use client";
import { useState, useEffect } from "react";
import React from "react";
import { client } from "../../lib/client";
import { Category, Category2 } from "../../lib/types";
import "./globals.css";

// Import dynamic from next/dynamic
import dynamic from "next/dynamic";

// Use dynamic to import the Landing component
const Landing = dynamic(() => import("./component/Landing"), { ssr: false });

const Page = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [category2, setCategory2] = useState<Category2[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const query = `*[_type == "category"] | order(_createdAt asc) {
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

        const data = await client.fetch(query);
        setCategories(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchDrinks = async () => {
      try {
        const drinksQuery = `*[_type == "category2"] | order(_createdAt asc) {
          name,
          notification,
          drink[]-> {
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

        const drinkData = await client.fetch(drinksQuery);
        setCategory2(drinkData);
        console.log(drinkData)
      } catch (error) {
        console.error("Error fetching drinks:", error);
      }
    };

    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchCategories(), fetchDrinks()]);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <img className="logoimage" src="/Last Drop Logo.svg" alt="Loading Logo" />
        <div className="loading-circle"></div>
      </div>
    );
  }

  return (
    <div>
      <Landing category2={category2} categories={categories} />
    </div>
  );
};

export default Page;