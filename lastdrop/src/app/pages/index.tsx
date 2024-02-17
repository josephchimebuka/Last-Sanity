// pages/index.tsx (or any other page in the pages directory)
import React from 'react';
import { client } from '../../../lib/client';
import { Category } from '../../../lib/types';

interface Props {
  category: Category[];
}

const Page = ({ category }: Props) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Lastdrop frontend</h1>
      <div>
        {category && (
          // Render your category data here
          // For example, you might map through the categories and display them
          category.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))
        )}
      </div>
    </main>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "category"]';
  const category = await client.fetch<Category[]>(query);

  return {
    props: { category },
  };
};

export default Page;
