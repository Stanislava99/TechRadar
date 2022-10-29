// @flow
import * as React from 'react';
import {getTechnologies, getWhereToTry} from "~/models/technology.server";
import {json, redirect} from "@remix-run/node";
import {Link, Outlet, useLoaderData, useNavigate} from "@remix-run/react";

type LoaderData = {
  technologies: Awaited<ReturnType<any>>,
};

export const loader = async (id: string) => {
  console.log("loader")
  return json<LoaderData>({
    technologies: await getTechnologies()
  });
};

export default function Table() {
  const {technologies} = useLoaderData() as unknown as LoaderData;
  // @ts-ignore
  return (
    <div>
      <div className="m-12">
        <h2 className="text-5xl"> Radar Table</h2>
        <p className="underline underline-offset- decoration-sky-500">Take a look at the trending technologies </p>
      </div>

      <div className="m-12">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-xs text-center text-gray-700 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Entry Date
              </th>
              <th scope="col" className="py-3 px-6">
                Technology
              </th>
              <th scope="col" className="py-3 px-6">
                Link
              </th>
              <th scope="col" className="py-3 px-6">
                Originator
              </th>
              <th scope="col" className="py-3 px-6">
                Reasons
              </th>
              <th scope="col" className="py-3 px-6">
                Where to try
              </th>

              <th scope="col" className="py-3 px-6">

              </th>
            </tr>
            </thead>
            <tbody>
            {technologies.map((technology) => (
              <tr key={technology.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="py-2 px-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {technology.entryDate}
                </th>
                <td className="py-4 px-6 text-center text-blue-600 text-base tex">
                  {technology.name}
                </td>
                <td className="py-4 px-6">
                  {technology.linkToTechnology}
                </td>
                <td className="py-4 px-6">
                  {technology.userId}
                </td>
                <td className="py-2 px sm:font-sm text-center">
                  {technology.description}
                </td>
                <td className="py-4 px-1">
                  {technology.whereToTryList.map((where: string) => {
                    if ("CODE_CAMP" == where.toString()) {
                      const code_camp = "Code Camp"
                      return (
                        <div className="border-solid border-2 border-color: rgb(219 39 119) bg-lime-200	 text-center mb-2">
                          <p>{code_camp}</p>
                        </div>
                      )
                    }
                    else {
                      const intents = "Inters"
                      return (
                        <div className="border-solid border-2 border-color: rgb(234 179 8) bg-blue-100 text-center">
                          <p>{intents}</p>
                        </div>
                      )
                    }
                  })}
                </td>
                <td className="py-4 px-6">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
              </tr>
            )) }


            </tbody>
          </table>
        </div>

        <button type="button"
                className="mt-2 ß text-white bg-gradient-to-br from-blue-600 to-green-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
         <Link to="addForm">
             Add new
         </Link>
        </button>
        <Outlet/>
      </div>

    </div>
  );
};