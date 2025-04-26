import React from 'react';

import Loan_Table_Row from './LoanTableRow.jsx';

function LoanHistory() {
  let loans = [
    {
      src: 'https://m.media-amazon.com/images/I/61HkdyBpKOL._AC_UF1000,1000_QL80_.jpg',
      alt: '1984',
      author: 'by George Orwell',
      loanDate: '2024-03-01',
      returnDate: '2024-03-21',
    },
    {
      src: 'https://m.media-amazon.com/images/I/41as+WafrFL.jpg',
      alt: 'Clean Code',
      author: 'by Robert C. Martin',
      loanDate: '2024-04-10',
      returnDate: '2024-05-01',
    },
    {
      src: 'https://cdn2.penguin.com.au/covers/original/9781718502062.jpg',
      alt: 'Object-Oriented Python',
      author: 'by Irv Kalb - Penguin',
      loanDate: '2024-04-10',
      returnDate: '2024-05-01',
    },
  ];

  return (
    <div className="col-span-2">
      <div className="card bg-[#e5e5e5] shadow-md rounded-lg overflow-hidden">
        <div className="bg-[#ffa91e] text-[#14213d] font-bold px-6 py-4">
          Loan History
        </div>

        <div className="p-6 bg-transparent">
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="min-w-full table-auto text-sm">
              <thead className="bg-white text-gray-700 font-semibold">
                <tr>
                  <th className="px-6 py-4 text-center">Book</th>
                  <th className="px-6 py-4 text-center">Loan Date</th>
                  <th className="px-6 py-4 text-center">Return Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {loans?.map(i => (
                  <Loan_Table_Row {...i} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanHistory;
