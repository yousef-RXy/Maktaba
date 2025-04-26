import React from 'react';

function ManageBooksForm() {
  return (
    <div class="py-5 min-h-screen flex flex-col items-center justify-center">
      <h1 class="text-4xl font-bold text-center mb-8 text-[#e5e5e5]">
        Manage Books
      </h1>
      <div class="bg-[#e5e5e5] p-8 rounded-xl shadow-lg w-full max-w-[66%]">
        <form class="space-y-6">
          <div>
            <label for="title" class="labelStyle">
              Title:
            </label>
            <input type="text" id="title" required class="inputStyle" />
          </div>

          <div>
            <label for="author" class="labelStyle">
              Author:
            </label>
            <input type="text" id="author" required class="inputStyle" />
          </div>

          <div>
            <label for="publicationYear" class="labelStyle">
              Publication Year:
            </label>
            <input
              type="text"
              id="publicationYear"
              required
              class="inputStyle"
            />
          </div>

          <div>
            <label for="category" class="labelStyle">
              Category:
            </label>
            <input type="text" id="category" required class="inputStyle" />
          </div>

          <div>
            <label for="numberOfCopies" class="labelStyle">
              Number of Copies:
            </label>
            <input
              type="number"
              id="numberOfCopies"
              required
              class="inputStyle"
            />
          </div>

          <div>
            <label for="availableCopies" class="labelStyle">
              Available Copies:
            </label>
            <input
              type="number"
              id="availableCopies"
              required
              class="inputStyle"
            />
          </div>

          <div>
            <label for="coverUrl" class="labelStyle">
              Cover URL:
            </label>
            <input type="file" id="coverUrl" required class="inputStyle" />
          </div>

          <div class="flex justify-center">
            <button type="button" id="addUpdateButton" class="buttonStyle">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ManageBooksForm;
