import { useLocation, useNavigate } from 'react-router';
import { useEffect } from 'react';

import BooksTable from '../components/manage/BooksTable';
import ManageBooksForm from '../components/manage/ManageBooksForm';
import { getAllBooks } from '../util/http';
import { useState } from 'react';

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role && role !== 'Admin') {
      navigate('/');
    }
  }, []);

  async function fetchBooks() {
    const data = await getAllBooks();
    setBooks(data);
  }

  useEffect(() => {
    fetchBooks();
  }, [location]);

  function handleUpdate(bookId) {
    const bookToEdit = books.find(book => book.id === bookId);
    setSelectedBook(bookToEdit);
  }

  function cancelUpdate() {
    setSelectedBook(null);
  }

  return (
    <>
      <ManageBooksForm
        selectedBook={selectedBook}
        cancelUpdate={cancelUpdate}
      />
      <BooksTable books={books} onUpdate={handleUpdate} />
    </>
  );
}

export async function clientAction({ request }) {
  const JWT = localStorage.getItem('token');
  const form = await request.formData();

  const id = form.get('id');

  const data = new FormData();
  data.append('Title', form.get('title'));
  data.append('Author', form.get('author'));
  data.append('PublicationYear', form.get('publicationYear'));
  data.append('Category', form.get('category'));
  data.append('NumberOfCopies', form.get('numberOfCopies'));
  data.append('AvailableCopies', form.get('availableCopies'));

  const coverFile = form.get('CoverUrl');
  if (coverFile && coverFile.name) {
    data.append('CoverUrl', coverFile);
  }
  data.append('CoverName', form.get('CoverName'));

  const url = id
    ? `${import.meta.env.VITE_URL}/Books/UpdateBook/${id}`
    : `${import.meta.env.VITE_URL}/Books/AddBook`; // 👈 if id exists, Update

  const res = await fetch(url, {
    method: id ? 'PUT' : 'POST',
    headers: { Authorization: `Bearer ${JWT}` },
    body: data,
  });

  let errorMessages = ['Failed to add Book.'];

  if (!res.ok) {
    const contentType = res.headers.get('content-type');

    if (contentType && contentType.includes('application/json')) {
      const errorData = await res.json();
      if (errorData.errors) {
        errorMessages = Object.values(errorData.errors).flat();
      } else if (errorData.title) {
        errorMessages = [errorData.title];
      }
    } else {
      let text = await res.text();
      try {
        text = JSON.parse(text);
        errorMessages = Object.values(text?.errors).flat();
      } catch (error) {
        errorMessages = text.split(',');
      }
    }

    if (errorMessages[0] === '') {
      errorMessages = ['Failed To add Book.'];
    }

    return {
      messages: errorMessages,
      status: res.status,
    };
  }

  const resData = await res.json();

  return resData;
}
