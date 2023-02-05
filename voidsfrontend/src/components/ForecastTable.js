import React, { useState, useEffect } from "react";

const ForecastTable = ({ data, locationFilter }) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(
      data.filter(
        forecast => forecast.location === locationFilter || !locationFilter
      )
    );
  }, [data, locationFilter]);

  return (
    <div className="w-full overflow-y-scroll" style={{ maxHeight: "500px" }}>
      <table className="table-auto w-full text-left mt-4">
        <thead>
          <tr className="bg-gray-200 sticky top-0">
            <th className="sticky top-0 px-4 py-2">Date</th>
            <th className="sticky top-0 px-4 py-2">Location</th>
            <th className="sticky top-0 px-4 py-2">Forecasted Sales Quantity</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(forecast => (
            <tr key={forecast.date} className="bg-white">
              <td className="border px-4 py-2">{forecast.date.slice(0, 10)}</td>
              <td className="border px-4 py-2">{forecast.location}</td>
              <td className="border px-4 py-2">
                {forecast.forecasted_sales_quantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ForecastTable;
