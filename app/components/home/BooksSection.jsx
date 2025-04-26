import React from 'react';
import BookCard from './BookCard';
import { useLoaderData } from 'react-router';

const BooksSection = () => {
  const books = useLoaderData();
  return (
    <section className="py-5">
      <div className="container mx-auto px-4 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
          {books.map(book => (
            <BookCard key={book.title} {...book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
