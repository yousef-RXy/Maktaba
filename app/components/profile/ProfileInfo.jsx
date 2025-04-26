import React from 'react';

function ProfileInfo() {
  return (
    <div className="col-span-1">
      <div className="card bg-[#e5e5e5] text-center shadow-md rounded-lg p-6">
        <img
          src="https://oodie.eu/cdn/shop/files/ODI09742.jpg?v=1721095106&width=1946"
          alt="Profile"
          className="rounded-full mb-4 w-24 h-24 object-cover mx-auto"
        />
        <h4 className="text-[#14213d] font-bold text-2xl mb-2">
          Naden Mohamed Yasen
        </h4>

        {/* <div className="flex justify-center gap-3 mt-3">
          <button className="bg-[#ffa91e] border-[#ffa91e] text-white font-medium px-5 py-1 rounded-full text-sm">
            Follow
          </button>
          <button className="border border-[#ffa91e] text-[#ffa91e] font-medium px-5 py-1 rounded-full text-sm">
            Message
          </button>
        </div> */}

        <hr className="my-6 opacity-30 text-[#14213d]" />

        <div className="text-[#14213d] text-left space-y-2">
          <p>
            <strong>Full Name:</strong> Naden Mohamed
          </p>
          <p>
            <strong>Email:</strong> naden@email.com
          </p>
          <p>
            <strong>Phone:</strong> (239) 816-9029
          </p>
          <p>
            <strong>Mobile:</strong> (320) 380-4539
          </p>
          <p>
            <strong>Address:</strong> Bay Area, San Francisco, CA
          </p>
        </div>

        <div className="flex justify-center gap-3 mt-6">
          <button className="bg-[#ffa91e] hover:bg-[#e6981a] w-24 text-white font-medium px-5 py-2 rounded-full text-sm">
            Edit
          </button>
          <button className="border w-24 text-xs border-[#b31010] text-[#b31010] hover:bg-[#b31010] hover:text-white font-medium px-5 py-2 rounded-full ">
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
