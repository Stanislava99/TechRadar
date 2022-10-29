// @flow
import * as React from 'react';

type Props = {

};

export default function Table(props: Props) {
  return (
    <div>
      <div className="m-10">
        <h2 className="text-5xl"> Radar Table</h2>
        <p>Take a look at the trending technologies </p>
      </div>
      <div className="m-10">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                Results
              </th>
              <th scope="col" className="py-3 px-6">

              </th>
            </tr>
            </thead>
            <tbody>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                02 Jun 2022
              </th>
              <td className="py-4 px-6">
                Blazor
              </td>
              <td className="py-4 px-6">
                https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor
              </td>
              <td className="py-4 px-6">
                Zdravko Nikolovski
              </td>
              <td className="py-4 px-6">
                Successor to Xamarin.Forms, but supports more platforms. Should be explored if the drawbacks of Xamarin are still there or not.
              </td>
              <td className="py-4 px-6">
                CodeCamp / Interns
              </td>
              <td className="py-4 px-6">
                CODE CAMP
                16 Sep 2022 SNF: Used in code camp (CodeCamp CH 2022 Fall - Web application with Blazor Webassembly).
              </td>
              <td className="py-4 px-6">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                02 Jun 2022
              </th>
              <td className="py-4 px-6">
                Blazor
              </td>
              <td className="py-4 px-6">
                https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor
              </td>
              <td className="py-4 px-6">
                Zdravko Nikolovski
              </td>
              <td className="py-4 px-6">
                Successor to Xamarin.Forms, but supports more platforms. Should be explored if the drawbacks of Xamarin are still there or not.
              </td>
              <td className="py-4 px-6">
                CodeCamp / Interns
              </td>
              <td className="py-4 px-6">
                CODE CAMP
                16 Sep 2022 SNF: Used in code camp (CodeCamp CH 2022 Fall - Web application with Blazor Webassembly).
              </td>
              <td className="py-4 px-6">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                02 Jun 2022
              </th>
              <td className="py-4 px-6">
                Blazor
              </td>
              <td className="py-4 px-6">
                https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor
              </td>
              <td className="py-4 px-6">
                Zdravko Nikolovski
              </td>
              <td className="py-4 px-6">
                Successor to Xamarin.Forms, but supports more platforms. Should be explored if the drawbacks of Xamarin are still there or not.
              </td>
              <td className="py-4 px-6">
                CodeCamp / Interns
              </td>
              <td className="py-4 px-6">
                CODE CAMP
                16 Sep 2022 SNF: Used in code camp (CodeCamp CH 2022 Fall - Web application with Blazor Webassembly).
              </td>
              <td className="py-4 px-6">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <button type="button"
                className="mt-2 ß text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Add new
        </button>
      </div>

    </div>
  );
};