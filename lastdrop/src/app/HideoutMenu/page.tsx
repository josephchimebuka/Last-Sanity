import React from 'react';
import dynamic from 'next/dynamic';
import { client } from '../../../lib/client';
import { Category3, Category4 } from '../../../lib/types';

// Dynamically import the Landing component
const Landing = dynamic(() => import('../component/Landing2'), { ssr: false });

// Revalidate every 10 seconds for ISR
export const revalidate = 10;

// Fetch Hideout Food Data
async function getHideoutFoodData() {
  const query = `*[_type == "category3"] | order(_createdAt asc) {
    name,
    notification,
    drink[]-> {
      name,
      inBracket,
      priceHideout
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

// Fetch Hideout Drinks Data
async function getHideoutDrinksData() {
  const drinksQuery = `*[_type == "category4"] | order(_createdAt asc) {
    name,
    notification,
    foods[]-> {
      name,
      inBracket,
      priceHideout
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

// Hideout Landing Page Component
const HideoutPage = async () => {
  // Fetch data for Hideout Food and Drinks
  const foodData: Category4[] = await getHideoutFoodData();
  const drinkData: Category3[] = await getHideoutDrinksData();

  // Debugging logs
  console.log('Hideout Food Data:', foodData);
  console.log('Hideout Drinks Data:', drinkData);

  // Render the Landing component with fetched data
  return (
    <div>
      <Landing category2={drinkData} categories={foodData} />
    </div>
  );
};

export default HideoutPage;