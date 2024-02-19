import { useState } from 'react'
import React from 'react'
import { client } from '../../lib/client'
import { Category, Category2 } from '../../lib/types';
import './globals.css'

// Import dynamic from next/dynamic
import dynamic from 'next/dynamic';

// Use dynamic to import the Landing component
const Landing = dynamic(() => import('./component/Landing'), { ssr: false });

// Rest of your code remains unchanged

export const revalidate = 10
async function getData(){
  const query =`*[_type == "category"] | order(_createdAt asc) {
    name,
    notification,
    foods[]-> {
      name,
      inBracket,
      price
    }
  }
`




const data = await client.fetch(query)


return data;
}



async function getDrinksData(){
  const drinksQuery =`
  *[_type == "category2"] | order(_createdAt asc) {
    name,
    notification,
  drink[]-> {
    name,
    inBracket,
    price
  }
  }
  `

  const drinkData = await client.fetch(drinksQuery)

  return drinkData;
}



const page = async() => {


  const data:Category[] = await getData()
  const drinkData:Category2[] = await getDrinksData()
  console.log(data)
  console.log(drinkData)
  data.forEach((category) => {
    console.log(`Category: ${category.name}`);
    console.log('Foods:', category.foods);
  });
  return (
 <div>
        <Landing category2={drinkData} categories={data}/>
      {/* {data.map((category) => (
        <div key={category.name}>
          <h2>{category.name}</h2>
          <ul>
            {category.foods.map((food) => (
              <li key={food.name}>
                {food.name} - ${food.price}
              </li>
            ))}
          </ul>
        </div>
      ))} */}
    </div> 
  )
}

export default page