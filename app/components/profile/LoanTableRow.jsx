import React from 'react';

function LoanTableRow({ bookName, loanDate, returnDate }) {
  return (
    <tr className="odd:bg-[#f2f2f2] even:bg-white hover:bg-[#ececec]">
      <td className="px-6 py-6 text-center">
        <div className="flex flex-col items-center">
          <div className="text-orange-500 text-xs">{bookName}</div>
        </div>
      </td>
      <td className="px-6 py-6 text-center text-[#14213d]">{loanDate}</td>
      <td className="px-6 py-6 text-center text-[#14213d]">{returnDate}</td>
    </tr>
  );
}

export default LoanTableRow;
