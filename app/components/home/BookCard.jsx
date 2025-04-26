import React from 'react';

const BookCard = ({
  image,
  title,
  author,
  publicationYear,
  category,
  availability,
}) => {
  return (
    <div className="col mb-5">
      <div className="card shadow-lg rounded-lg overflow-hidden bg-[#e5e5e5]">
        <div className=" h-[280px] overflow-hidden m-1 rounded-l">
          <img className="w-full object-cover" src={image} alt={title} />
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
            Available : <span className="font-bold">{availability}</span>
          </h6>
        </div>

        {/* Product actions */}
        <div className="p-4 pt-0  bg-transparent flex justify-center">
          <button className="buttonStyle">Loan</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
