import { useState } from 'react'
import React from 'react'
import { client } from '../../lib/client'
import { Category } from '../../lib/types';
import './globals.css'

// Import dynamic from next/dynamic
import dynamic from 'next/dynamic';

// Use dynamic to import the Landing component
const Landing = dynamic(() => import('./component/Landing'), { ssr: false });

// Rest of your code remains unchanged


async function getData(){
  const query =`*[_type == "category"] | order(_createdAt asc) {
    name,
    foods[]-> {
      name,
      price
    }
  }
`


const data = await client.fetch(query)


return data;
}
const page = async() => {


  const data:Category[] = await getData()
  console.log(data)
  return (
 <div>
        <Landing data={data}/>
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