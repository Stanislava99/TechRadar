// @flow
import * as React from 'react';
import {Form, useActionData} from "@remix-run/react";
import {ActionFunction} from "@remix-run/server-runtime";
import {getUserId} from "~/session.server";
import {addTechnology, addTechnologyToWhereToTryTable} from "~/models/technology.server";
import {redirect} from "@remix-run/node";

const inputClassName = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ';


export const action: ActionFunction = async ({request}) => {
  const formData = await request.formData();

  const name = formData.get("name");
  const linkToTechnology = formData.get("link");
  const description = formData.get("description");
  const whereToTry = formData.get("whereToTry");

  const userId = getUserId(request);
  const type = "TOOLS";
  // @ts-ignore
  const newTechnology = await addTechnology({name, linkToTechnology,userId,description,type});
  await addTechnologyToWhereToTryTable(whereToTry,newTechnology.id);
  return redirect("/home/table");

};


export default function AddForm() {
  const errors = useActionData();

  // @ts-ignore
  return (
    <div className="w-full max-w-xs">
        <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="post">
          <p>
            <label className="lock text-gray-700 text-sm font-bold mb-2">
              Technology:{" "}
              <input
                type="text"
                name="technology"
                className={inputClassName}
              />
            </label>
          </p>
          <p>
            <label className="lock text-gray-700 text-sm font-bold mb-2">
              Link:{" "}
              <input
                type="text"
                name="link"
                className={inputClassName}
              />
            </label>
          </p>
          <p>
            <label className="lock text-gray-700 text-sm font-bold mb-2">
              Reasons:{" "}
              <input
                type="text"
                name="description"
                className={inputClassName}
              />
            </label>
            <h3 className="lock text-gray-700 text-sm font-bold mb-2">Where to try?</h3>
            <ul
              className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center pl-3">
                  <input id="CODE_CAMP" type="checkbox" value=""
                         className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                  <label htmlFor="CODE_CAMP"
                         className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Code Camp</label>
                </div>
              </li>
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center pl-3">
                  <input id="INTERNS" type="checkbox" value=""
                         className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                  <label htmlFor="INTERNS"
                         className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Interns</label>
                </div>
              </li>
            </ul>
          </p>
          <button type="submit"
                  className="mt-2 ß text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Save
          </button>
        </Form>
      </div>
  );
};