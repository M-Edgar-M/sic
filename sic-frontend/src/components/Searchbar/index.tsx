import { useFormik } from "formik";
import React, { SyntheticEvent, useState } from "react";
import { SearchInitValues } from "../../models/FromikTypes";

function SearchBar() {
  const initial: SearchInitValues = {searchValue: ''}

    const formik = useFormik({
      initialValues: initial,
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });

  return (
    <div className="w-1/2">
      <form onSubmit={formik.handleSubmit}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            name="searchValue"
            value={formik.values.searchValue}
            onChange={formik.handleChange}
            className="block p-4 pl-10 w-full lg:text-[1.6rem] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 lg:bottom-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg lg:text-[1.6rem] text-sm px-4 py-2 lg:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
