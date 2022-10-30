// @flow
import * as React from 'react';
import {Form, Link, useActionData} from "@remix-run/react";
import {ActionFunction} from "@remix-run/server-runtime";
import {getUserId} from "~/session.server";
import {addTechnology, addTechnologyToWhereToTryTable} from "~/models/technology.server";
import {redirect} from "@remix-run/node";
import {prisma} from "~/db.server";

const inputClassName = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ';

export const action: ActionFunction = async ({request}) => {
  const formData = await request.formData();

  const name = formData.get("name");
  const linkToTechnology = formData.get("link");
  const currentViabilityLevel = formData.get("currentViabilityLevel");
  const description = formData.get("description");
  const whereToTry = formData.getAll("whereToTry");
  const type = formData.get("type");

  const userId = await getUserId(request);
  const user = await prisma.user.findUnique({where: {id: userId}});
  // @ts-ignore
  const newTechnology = await addTechnology({name, currentViabilityLevel, linkToTechnology, enteredBy: {
    connect: {id: userId}
    }, description, type});
  await addTechnologyToWhereToTryTable(whereToTry, newTechnology.id);
  return redirect("/home/table");

};

export default function AddForm() {

  // @ts-ignore
  return (
    <div className="w-full max-w-xs">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg py-5 px-7 font-bold text-xs text-center text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400 mt-12 mb-1">
        <p>Add new technology</p>
      </div>
        <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="post">
          <p>
            <label className="lock text-gray-700 text-sm font-bold mb-2">
              Technology:{" "}
              <input
                type="text"
                name="name"
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
            <h3 className="lock text-gray-700 text-sm font-bold mb-1 mt-2">Where to try?</h3>
            <ul
              className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li className="w-full dark:border-gray-600">
                <div className="flex items-center pl-3">
                  <input id="CODE_CAMP" name="whereToTry" type="checkbox" value="CODE_CAMP"
                         className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                  <label htmlFor="CODE_CAMP"
                         className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Code Camp</label>
                </div>
              </li>
              <li className="w-full dark:border-gray-600">
                <div className="flex items-center pl-3">
                  <input id="INTERNS" type="checkbox" name="whereToTry" value="INTERNS"
                         className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                  <label htmlFor="INTERNS"
                         className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Interns</label>
                </div>
              </li>
              <li className="w-full dark:border-gray-600">
                <div className="flex items-center pl-3">
                  <input id="PROJECT" type="checkbox" name="whereToTry" value="PROJECT"
                         className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                  <label htmlFor="PROJECT"
                         className="py-3 ml-2 mr-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Project</label>
                </div>
              </li>
            </ul>
            <div className="w-full  mb-6 md:mb-0">
              <label className="block tracking-wide text-sm font-bold font-medium text-gray-600 mt-2 mb-1"
                     htmlFor="grid-state">
                Viability Level
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 font-small text-gray-600 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="type"
                  name="currentViabilityLevel"
                >
                  <option>ADOPT</option>
                  <option>TRIAL</option>
                  <option>ASSESS</option>
                  <option>HOLD</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full  mb-6 md:mb-0">
              <label className="block tracking-wide text-sm font-bold font-medium text-gray-600 mt-2 mb-1"
                     htmlFor="grid-state">
                Type
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 font-small text-gray-600 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="type"
                  name="type"
                >
                  <option>LANGUAGES</option>
                  <option>TOOLS</option>
                  <option>PLATFORMS</option>
                  <option>TECHNIQUES</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </div>
          </p>
          <button type="submit"
                  className="mt-4 ß text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 ">
            Save
          </button>
          <Link to="/home/table">
            <button type="button"
                    className="mt-4 ß text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 ">
              Close
            </button>
          </Link>
        </Form>
      </div>
  );
};