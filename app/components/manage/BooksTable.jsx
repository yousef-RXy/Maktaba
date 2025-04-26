import React from 'react';

function BooksTable() {
  return (
    <div class="py-10">
      <div class="container mx-auto">
        <div class="w-3/4 mx-auto mb-8">
          <input
            type="text"
            placeholder="Search"
            oninput="search(this.value)"
            class="inputStyle bg-[#e5e5e5]"
          />
        </div>

        <div class="overflow-x-auto rounded-xl shadow-md bg-[#e5e5e5] p-5">
          <table class="min-w-full bg-[#e5e5e5] rounded-2xl p-10 shadow ">
            <thead class="bg-[#e5e5e5] text-gray-700 text-sm ">
              <tr>
                <th class="text-left py-3 px-4">Id</th>
                <th class="text-left py-3 px-4">Title</th>
                <th class="text-left py-3 px-4">Author</th>
                <th class="text-left py-3 px-4">Publication Year</th>
                <th class="text-left py-3 px-4">Category</th>
                <th class="text-left py-3 px-4">Number of Copies</th>
                <th class="text-left py-3 px-4">Available Copies</th>
                <th class="text-left py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody class="bg-white text-gray-800 text-sm"></tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BooksTable;
