import React from 'react';
import { logout } from '../../util/Tokens';
import { useLoaderData } from 'react-router';

function ProfileInfo() {
  const { user } = useLoaderData();
  return (
    <div className="col-span-1">
      <div className="card bg-[#e5e5e5] text-center shadow-md rounded-lg p-4 md:p-6">
        <img
          src="https://oodie.eu/cdn/shop/files/ODI09742.jpg?v=1721095106&width=1946"
          alt="Profile"
          className="rounded-full mb-4 w-20 h-20 md:w-24 md:h-24 object-cover mx-auto"
        />
        <h4 className="text-[#14213d] font-bold text-xl md:text-2xl mb-2">
          {user.user_name}
        </h4>

        <hr className="my-4 md:my-6 opacity-30 text-[#14213d]" />

        <div className="text-[#14213d] text-left space-y-2 text-sm md:text-base">
          <p>
            <strong>Full Name:</strong> {user.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {user.lastName}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phoneNumber}
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-3 mt-6">
          {/* <button className="bg-[#ffa91e] hover:bg-[#e6981a] w-full md:w-24 text-white font-medium px-5 py-2 rounded-full text-sm">
            Edit
          </button> */}
          <button
            onClick={logout}
            className="border w-full md:w-24 text-xs border-[#b31010] text-[#b31010] hover:bg-[#b31010] hover:text-white font-medium px-5 py-2 rounded-full"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
