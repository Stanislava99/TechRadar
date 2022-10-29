// @flow
import * as React from 'react';
import {Link, Outlet} from "@remix-run/react";

type Props = {

};

export default function Navbar(props: Props) {
  return (
    <div>
      <Link to="radar" className="text-red-600 underline">
      Go to radar
      </Link>
      <Link to="table" className="text-red-600 underline">
        Go to table
      </Link>
      <Outlet />
    </div>
  );
};