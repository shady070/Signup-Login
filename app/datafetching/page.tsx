'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface fetchingData {
  id: number;
  title: string;
  body: string;
}

export default function page() {
  const [cards, setCards] = useState<fetchingData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=6');
        setCards(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='flex my-[20px] items-center justify-center px-[20px]'>
      <div className='flex flex-wrap gap-[20px] w-[500px]'>
        {cards.map((card) => (
          <div key={card.id} className='px-[20px] border py-[20px] rounded-md ' >
            <h2 className='text-[22px] w-[300px]'>{card.title}</h2>
            <p>{card.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
