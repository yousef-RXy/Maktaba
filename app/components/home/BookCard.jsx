import React from 'react';
import { addLoan } from '../../util/http';
import { useNavigate } from 'react-router';

const BookCard = ({
  id,
  coverUrl,
  title,
  author,
  publicationYear,
  category,
  availableCopies,
}) => {
  const navigate = useNavigate();

  async function AddLoan() {
    let userId = localStorage.getItem('id');
    if (userId && id) {
      await addLoan(userId, id);
      navigate('/');
    }
  }

  return (
    <div className="col mb-5">
      <div className="card shadow-lg rounded-lg overflow-hidden bg-[#e5e5e5]">
        <div className=" h-[160px] overflow-hidden m-1 rounded">
          <img className="w-full object-cover" src={coverUrl} alt={title} />
        </div>

        {/* Product details */}
        <div className="p-4 text-center">
          <h5 className="text-lg text-[#14213d]  font-bold mb-2">{title}</h5>
          <h6 className="text-gray-700">By : {author}</h6>
          <h6 className="text-gray-700">
            Publication Year : {publicationYear}
          </h6>
          <h6 className="text-gray-700">
            Category : <span className="font-semibold">{category}</span>
          </h6>
          <h6 className="text-gray-700">
            Available : <span className="font-bold">{availableCopies}</span>
          </h6>
        </div>

        {/* Product actions */}
        <div className="p-4 pt-0  bg-transparent flex justify-center">
          <button onClick={AddLoan} className="buttonStyle">
            Loan
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
