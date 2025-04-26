import React from 'react';

function BookRow({ book, onDelete, onUpdate }) {
  return (
    <tr key={book.id}>
      <td className="py-3 px-4">{book.id}</td>
      <td className="py-3 px-4">{book.title}</td>
      <td className="py-3 px-4">{book.author}</td>
      <td className="py-3 px-4">{book.publicationYear}</td>
      <td className="py-3 px-4">{book.category}</td>
      <td className="py-3 px-4">{book.numberOfCopies}</td>
      <td className="py-3 px-4">{book.availableCopies}</td>
      <td className="py-3 px-4 flex gap-2">
        <button
          onClick={() => onUpdate(book.id)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded"
        >
          Update
        </button>
        <button
          onClick={() => onDelete(book.id)}
          className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default BookRow;
