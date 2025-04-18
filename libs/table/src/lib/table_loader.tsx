import React from 'react';

const TableLoader: React.FC = () => {
  const rows = 5;

  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full table-auto border border-gray-100 rounded-md">
        <thead className="rounded-md">
          <tr className="border-b border-gray-100">
            <th className="px-1 py-2 text-left">
              <div className="w-full h-8 rounded-sm bg-gray-200 animate-pulse"></div>
            </th>
            <th className="px-1 py-2 text-left">
              <div className="w-full h-8 rounded-sm bg-gray-200 animate-pulse"></div>
            </th>
            <th className="px-1 py-2 text-left">
              <div className="w-full h-8 rounded-sm bg-gray-200 animate-pulse"></div>
            </th>
            <th className="px-1 py-2 text-left">
              <div className="w-full h-8 rounded-sm bg-gray-200 animate-pulse"></div>
            </th>
          </tr>
        </thead>
        <tbody className="py-8">
          {Array.from({ length: rows }).map((_, index) => (
            <tr key={index} className="border-b border-gray-50 ">
              <td className="pt-2 my-0 px-1">
                <div className="w-full rounded-sm  h-8 bg-gray-200 animate-pulse"></div>
              </td>
              <td className="pt-2 px-1">
                <div className="w-full rounded-sm h-8 bg-gray-200 animate-pulse"></div>
              </td>
              <td className="pt-2 px-1">
                <div className="w-full rounded-sm h-8 bg-gray-200 animate-pulse"></div>
              </td>
              <td className="py-2 px-1">
                <div className="w-full rounded-sm h-8 bg-gray-200 animate-pulse"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableLoader;
