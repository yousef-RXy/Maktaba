import React from 'react';
import BookCard from './BookCard';

const books = [
  {
    image:
      'https://i.pinimg.com/736x/fb/53/ff/fb53ffadeffa84fc6f81b2806fdb24c1.jpg',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    publicationYear: 1813,
    category: 'Romance',
    availability: 60,
  },
  {
    image:
      'https://i.pinimg.com/736x/fb/53/ff/fb53ffadeffa84fc6f81b2806fdb24c1.jpg',
    title: 'Pride and Prejudice2',
    author: 'Jane Austen',
    publicationYear: 1813,
    category: 'Romance',
    availability: 60,
  },
  {
    image:
      'https://i.pinimg.com/736x/15/40/fa/1540fadd4dbe5065e583c501e06c9641.jpg',
    title: 'Pride and Prejudice3',
    author: 'Jane Austen',
    publicationYear: 1813,
    category: 'Romance',
    availability: 60,
  },
];

const BooksSection = () => {
  return (
    <section className="py-5">
      <div className="container mx-auto px-4 mt-5">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
          {books.map(book => (
            <BookCard key={book.title} {...book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
