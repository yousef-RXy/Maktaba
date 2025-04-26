import React from 'react';
import LoanTableRow from './LoanTableRow.jsx';
import { useLoaderData } from 'react-router';

function LoanHistory() {
  let data = useLoaderData();
  let loans = data.loans;

  return (
    <div className="col-span-2">
      <div className="card bg-[#e5e5e5] shadow-md rounded-lg overflow-hidden">
        <div className="bg-[#ffa91e] text-[#14213d] font-bold px-6 py-4">
          Loan History
        </div>

        <div className="p-4 md:p-6 bg-transparent">
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="min-w-full table-auto text-xs md:text-sm">
              <thead className="bg-white text-gray-700 font-semibold">
                <tr>
                  <th className="px-6 py-4 text-center">Book</th>
                  <th className="px-6 py-4 text-center">Loan Date</th>
                  <th className="px-6 py-4 text-center">Return Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {loans?.map((i, idx) => (
                  <LoanTableRow key={idx} {...i} />
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
