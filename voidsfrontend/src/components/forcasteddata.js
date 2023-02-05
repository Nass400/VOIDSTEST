import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastTable from "./ForecastTable";

const Forecasts = () => {
  const [data, setData] = useState([]);
  const [locationFilter, setLocationFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3000/forecasts");
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="mt-4 flex flex-col items-center">
      <div className="mb-4">
        <label className="font-bold" htmlFor="location-filter">
          Filter by location:
        </label>
        <select
          id="location-filter"
          className="ml-2 p-2 rounded"
          value={locationFilter}
          onChange={e => setLocationFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="Munich">Munich</option>
          <option value="Hamburg">Hamburg</option>
        </select>
      </div>
      <ForecastTable data={data} locationFilter={locationFilter} />
    </div>
  );
};

export default Forecasts;
