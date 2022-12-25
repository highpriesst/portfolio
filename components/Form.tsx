import React from "react";

function Form() {
  return (
    <form action="#" className="space-y-8">
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="name@mail.com"
          required
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="Let me know how we can help you"
          required
        />
      </div>
      <div className="sm:col-span-2">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
          Your message
        </label>
        <textarea
          id="message"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Leave a comment..."></textarea>
      </div>
      <button
        type="submit"
        className="py-3 px-5 text-sm font-medium text-center rounded-lg bg-gray-50 sm:w-fit border bordar-gray-300 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-800 dark:border-gray-700">
        Send message
      </button>
    </form>
  );
}

export default Form;
