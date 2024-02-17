import React from 'react'
import { client } from '../../lib/client'
import { Category } from '../../lib/types';



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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1>Lastdrop frontend</h1> 
   </main>
  )
}

export default page