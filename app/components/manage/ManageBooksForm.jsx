import React, { useEffect, useState } from 'react';
import { Form, useNavigation } from 'react-router';

function ManageBooksForm({ selectedBook, cancelUpdate }) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    publicationYear: '',
    category: '',
    numberOfCopies: '',
    availableCopies: '',
    CoverUrl: null,
    CoverName: '',
  });

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  useEffect(() => {
    if (selectedBook) {
      setFormData({
        title: selectedBook.title || '',
        author: selectedBook.author || '',
        publicationYear: selectedBook.publicationYear || '',
        category: selectedBook.category || '',
        numberOfCopies: selectedBook.numberOfCopies || '',
        availableCopies: selectedBook.availableCopies || '',
        coverUrl: selectedBook.coverUrl || '',
      });
    } else {
      setFormData({
        title: '',
        author: '',
        publicationYear: '',
        category: '',
        numberOfCopies: '',
        availableCopies: '',
        coverUrl: '',
      });
    }
  }, [selectedBook]);

  function handleChange(e) {
    const { id, value, files } = e.target;

    setFormData(prev => ({
      ...prev,
      [id]: files && files.length > 0 ? files[0] : value,
    }));
  }

  return (
    <div className="py-5 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#e5e5e5]">
        {selectedBook ? 'Update Book' : 'Add Book'}
      </h1>

      <div className="bg-[#e5e5e5] p-8 rounded-xl shadow-lg w-full max-w-[66%]">
        <Form method="post" encType="multipart/form-data" className="space-y-6">
          {/* If editing, send id hidden */}
          {selectedBook && (
            <input type="hidden" name="id" value={selectedBook.id} />
          )}

          {/* Normal Fields */}
          {[
            { id: 'title', label: 'Title', type: 'text' },
            { id: 'author', label: 'Author', type: 'text' },
            { id: 'publicationYear', label: 'Publication Year', type: 'text' },
            { id: 'category', label: 'Category', type: 'text' },
            { id: 'numberOfCopies', label: 'Number of Copies', type: 'number' },
            {
              id: 'availableCopies',
              label: 'Available Copies',
              type: 'number',
            },
            { id: 'CoverUrl', label: 'Cover URL', type: 'file' },
            { id: 'CoverName', label: 'Cover Name', type: 'text' },
          ].map(({ id, label, type }) => (
            <div key={id}>
              <label htmlFor={id} className="labelStyle">
                {label}:
              </label>
              <input
                id={id}
                name={id}
                type={type}
                onChange={handleChange}
                required
                className="inputStyle"
                {...(type !== 'file' ? { value: formData[id] } : {})}
              />
            </div>
          ))}

          <div className="flex md:flex-row flex-col gap-2 justify-center">
            {selectedBook && (
              <button
                type="submit"
                disabled={isSubmitting}
                onClick={cancelUpdate}
                className="buttonStyle"
              >
                cancel
              </button>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="buttonStyle"
            >
              {isSubmitting ? 'Saving...' : selectedBook ? 'Update' : 'Add'}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default ManageBooksForm;
