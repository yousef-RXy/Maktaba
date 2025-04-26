import React from 'react';
import BookRow from './BoolRow';
import { deleteBook } from '../../util/http';
import { useNavigate } from 'react-router';

function BooksTable({ books, onUpdate }) {
  const navigate = useNavigate();
  async function handleDelete(bookId) {
    await deleteBook(bookId);
    navigate('/manage');
  }

  return (
    <div className="py-10">
      <div className="container mx-auto">
        {/* <div className="w-3/4 mx-auto mb-8">
          <input
            type="text"
            placeholder="Search"
            className="inputStyle bg-[#e5e5e5]"
          />
        </div> */}

        <div className="overflow-x-auto rounded-xl shadow-md bg-[#e5e5e5] p-5">
          <table className="min-w-full bg-[#e5e5e5] rounded-2xl p-10 shadow">
            <thead className="bg-[#e5e5e5] text-gray-700 text-sm">
              <tr>
                <th className="text-left py-3 px-4">Id</th>
                <th className="text-left py-3 px-4">Title</th>
                <th className="text-left py-3 px-4">Author</th>
                <th className="text-left py-3 px-4">Publication Year</th>
                <th className="text-left py-3 px-4">Category</th>
                <th className="text-left py-3 px-4">Number of Copies</th>
                <th className="text-left py-3 px-4">Available Copies</th>
                <th className="text-left py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white text-gray-800 text-sm">
              {books.map(book => (
                <BookRow
                  key={book.id}
                  book={book}
                  onDelete={handleDelete}
                  onUpdate={onUpdate}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BooksTable;
