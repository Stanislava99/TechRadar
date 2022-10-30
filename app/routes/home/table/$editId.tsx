// @flow
import * as React from 'react';
import {Form, Link, useActionData, useLoaderData} from "@remix-run/react";
import {ActionFunction, LoaderFunction} from "@remix-run/server-runtime";
import {getUserId} from "~/session.server";
import {addTechnologyToWhereToTryTable, editTechnology, getTechnology} from "~/models/technology.server";
import {json, redirect} from "@remix-run/node";

const inputClassName = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ';

type ActionData =
  | {
  name: null | string;
  linkToTechnology: null | string;
  currentViabilityLevel: null | string;
  description: null | string;
}
  | undefined;

export const action: ActionFunction = async ({request}) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const id = formData.get("id");
  const currentViabilityLevel = formData.get("currentViabilityLevel");
  const linkToTechnology = formData.get("linkToTechnology");
  const description = formData.get("description");
  const whereToTry = formData.getAll("whereToTry");
  const type = formData.get("type");
  const userId = await getUserId(request);

  const errors: ActionData = {
    name: name ? null : "Technology name is required",
    linkToTechnology: linkToTechnology ? null : "Link is required",
    currentViabilityLevel: currentViabilityLevel ? null : "Current viability level is required",
    description: description ? null : "Description is required",
  };
  const hasErrors = Object.values(errors).some(
    (errorMessage) => errorMessage
  );
  if (hasErrors) {
    return json<ActionData>(errors);
  }

  // @ts-ignore
  const editedTechnology = await editTechnology({id, currentViabilityLevel, name, linkToTechnology, enteredBy: {
      connect: {id: userId}
    }, description, type});
  await addTechnologyToWhereToTryTable(whereToTry, editedTechnology.id);
  return redirect("/home/table");

};
export const loader: LoaderFunction = async ({ params }) => {
  const technology = await getTechnology(params.editId);
  return json({ technology });
};


export default function AddForm() {
  const  { technology } = useLoaderData();
  const [technologyName, setTechnologyName] = React.useState(technology.name);
  const [selectedCurrentViabilityLevel, setSelectedCurrentViabilityLevel] =
    React.useState(technology.currentViabilityLevel);
  const [selectedType, setSelectedType] = React.useState(technology.type);

  React.useEffect(() => {
    setTechnologyName(technology.name)
  }, [technology.id, technology.name]);

  const errors = useActionData();

  // @ts-ignore
  return (
    <div className="w-full max-w-xs">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg py-5 px-7 font-bold text-xs text-center text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400 mt-12 mb-1">
        <p>Edit technology</p>
      </div>
      <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="post">
        <p>
          <label className="lock text-gray-700 text-sm font-bold mb-2">
            <input
              style={{visibility: "hidden"}}
              type="text"
              name="id"
              className={inputClassName}
              value={technology.id}
            />
            Technology:{" "}
            {errors?.name ? (
              <em className="text-red-600">{errors.name}</em>
            ) : null}
            <input
              type="text"
              name="name"
              className={inputClassName}
              value={technologyName}
              onChange={(e) => setTechnologyName(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label className="lock text-gray-700 text-sm font-bold mb-2">
            Link:{" "}
            {errors?.linkToTechnology ? (
              <em className="text-red-600">{errors.linkToTechnology}</em>
            ) : null}
            <input
              type="text"
              name="linkToTechnology"
              className={inputClassName}
              value={technology.linkToTechnology}
            />
          </label>
        </p>
        <p>
          <label className="lock text-gray-700 text-sm font-bold mb-2">
            Reasons:{" "}
            {errors?.description ? (
              <em className="text-red-600">{errors.description}</em>
            ) : null}
            <input
              type="text"
              name="description"
              className={inputClassName}
              value={technology.description}
            />
          </label>
          <h3 className="lock text-gray-700 text-sm font-bold mb-1 mt-2">Where to try?</h3>
          <ul
            className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input id="CODE_CAMP" name="whereToTry" type="checkbox" value="CODE_CAMP"
                       className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                <label htmlFor="CODE_CAMP"
                       className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Code Camp</label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input id="INTERNS" type="checkbox" name="whereToTry" value="INTERNS"
                       className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                <label htmlFor="INTERNS"
                       className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Interns</label>
              </div>
            </li>
          </ul>
          <div className="w-full  mb-6 md:mb-0">
            <label className="block tracking-wide text-sm font-bold font-medium text-gray-600 mt-2 mb-1"
                   htmlFor="grid-state">
              Type
            </label>
            <div className="relative">
              <select
                value={selectedCurrentViabilityLevel}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 font-small text-gray-600 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="type"
                name="currentViabilityLevel"
                onChange={(e) => setSelectedCurrentViabilityLevel(e.target.value)}
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
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
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
          Update
        </button>
        <Link to="/home/table">
          <button
            className="mt-4 ß text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 ">
            Close
          </button>
        </Link>
      </Form>
    </div>
  );
};