export async function getAllBooks() {
  const res = await fetch(`${import.meta.env.VITE_URL}/Books/GetAll`);

  const resData = await res.json();

  return resData;
}

export async function deleteBook(id) {
  const JWT = localStorage.getItem('token');

  const res = await fetch(
    `${import.meta.env.VITE_URL}/Books/DeleteBook?id=${id}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${JWT}`,
        'Content-Type': 'application/json',
      },
    }
  );

  if (!res.ok) {
    return {
      messages: 'Failed To Delete Book.',
      status: res.status,
    };
  }

  const resData = await res.text();

  return resData;
}

export async function addLoan(userId, bookId) {
  const JWT = localStorage.getItem('token');

  const url = `${
    import.meta.env.VITE_URL
  }/Loans/AddLone?userId=${userId}&bookId=${bookId}&fineAmount=100`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${JWT}`,
    },
  });

  if (!res.ok) {
    return {
      messages: 'Failed To Add Loan.',
      status: res.status,
    };
  }

  const resData = await res.text();

  return resData;
}
