// @flow
import * as React from 'react';
import {Link, Outlet} from "@remix-run/react";

type Props = {

};

export default function Home(props: Props) {
  return (
    <div>
      <div className="container flex flex-wrap m-5 justify-between items-center mx-auto border-b">
        <Link to="table" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white">
          Go to table
        </Link>
        <Link to="radar" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white">
          Go to radar
        </Link>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>


  );
};