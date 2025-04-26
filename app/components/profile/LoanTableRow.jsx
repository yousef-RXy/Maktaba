import React from 'react';

function LoanTableRow({ src, alt, author, publishDate, loanDate, returnDate }) {
  return (
    <tr className="odd:bg-[#f2f2f2] even:bg-white hover:bg-[#ececec]">
      <td className="px-6 py-6 text-center">
        <div className="flex flex-col items-center">
          <img src={src} alt={alt} className="w-16 h-20 object-cover mb-2" />
          <div className="font-semibold text-gray-900">{publishDate}</div>
          <div className="text-orange-500 text-xs">{author}</div>
        </div>
      </td>
      <td className="px-6 py-6 text-center text-[#14213d]">{loanDate}</td>
      <td className="px-6 py-6 text-center text-[#14213d]">{returnDate}</td>
    </tr>
  );
}

export default LoanTableRow;
