import React from 'react';
import dynamic from 'next/dynamic';
import { client } from '../../../lib/client';
import { Category, Category2 } from '../../../lib/types';

// Dynamically import the Landing component
const Landing = dynamic(() => import('../component/Landing'), { ssr: false });

// Revalidate every 10 seconds for ISR
export const revalidate = 10;

// Fetch Outdoor Food Data
async function getOutdoorFoodData() {
  const query = `*[_type == "category"] | order(_createdAt asc) {
    name,
    notification,
    foods[]-> {
      name,
      inBracket,
      priceOutdoor
    },
    image {
      asset-> {
        _id,
        url
      }
    }
  }`;

  const data = await client.fetch(query);
  return data;
}

// Fetch Outdoor Drinks Data
async function getOutdoorDrinksData() {
  const drinksQuery = `*[_type == "category2"] | order(_createdAt asc) {
    name,
    notification,
    drink[]-> {
      name,
      inBracket,
      priceOutdoor
    },
    image {
      asset-> {
        _id,
        url
      }
    }
  }`;

  const drinkData = await client.fetch(drinksQuery);
  return drinkData;
}

// Outdoor Landing Page Component
const OutdoorPage = async () => {
  // Fetch data for Outdoor Food and Drinks
  const foodData: Category[] = await getOutdoorFoodData();
  const drinkData: Category2[] = await getOutdoorDrinksData();

  // Debugging logs
  // console.log('Outdoor Food Data:', foodData);
  // console.log('Outdoor Drinks Data:', drinkData);

  // Render the Landing component with fetched data
  return (  
    <div>
      <Landing category2={drinkData} categories={foodData} />
    </div>
  );
};

export default OutdoorPage;