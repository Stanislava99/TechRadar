import {Link} from "@remix-run/react";

import { useOptionalUser } from "~/utils";
import * as React from "react";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-32">
              <img src="/logo.png" alt="tech radar logo here" />
              <p style={{color: "black"}} className="mx-auto mt-6 max-w-lg text-center text-xl text-neutral-400 sm:max-w-3xl">
                Track latest technology trends.
              </p>
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                {user ? (
                  <Link
                    style={{background: "black", color: "white"}}
                    to="/home/table"
                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-neutral-400 shadow-sm hover:bg-yellow-50 sm:px-8"
                  >
                    Go to tech radar
                  </Link>
                ) : (
                  <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                    <Link
                      to="/join"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
                    >
                      Sign up
                    </Link>
                    <Link
                      to="/login"
                      className="flex items-center justify-center rounded-md bg-yellow-500 px-4 py-3 font-medium text-white hover:bg-yellow-600"
                    >
                      Log In
                    </Link>
                  </div>
                )}
              </div>
            </div>

        </div>
      </div>
    </main>
  );
}
