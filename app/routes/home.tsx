// @flow
import * as React from 'react';
import {Link, Outlet} from "@remix-run/react";


export default function Home() {
  return (
    <div >
      <nav className="border border-gray-300 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a  className="flex items-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ05f9YsTCyTo-4UwmZRJb3LLtJ58WuKP7B4daI56QWzA&s" className="mr-3 h-6 sm:h-9" alt="Tech Radar"/>
          </a>

          <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
            <ul
              className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="table" >
                  <a href="/table"
                     className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ">Table</a>
                </Link>
              </li>
              <li>
                <Link to="radar">
                  <a
                     className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Radar</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav >
      <Outlet/>
    </div>
);
};