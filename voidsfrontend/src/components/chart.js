import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);






const ChartComponent = () => {

  const [location, setLocation] = useState("Munich");
  const [forecastData, setForecastData] = useState([]);
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/forecasts/${location}`)
      .then(res => res.json())
      .then(data => setForecastData(data));

    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&aggregateHours=24&contentType=json&key=3WWEVYKLNRDJ4DHHK7ASL5XFF`)
      .then(res => res.json())
      .then(data => setWeatherData(data));

  }, [location]);

  const labels = forecastData.map(d => d.date.slice(0, 10));
  const options = {
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };
   const data = {
    labels,
    datasets: [
      {
        label: "forecastData",
        data: forecastData.map(d => d.forecasted_sales_quantity),
        backgroundColor: "#2196F3",
        borderColor: "#2196F3",
      },
      // { label: "weatherData", data: weatherData.days.map(d => d.temp), backgroundColor: "#FFCA29", borderColor: "#FFCA29", }
     
    ],
  };
  return (
    <div className="container mx-auto mt-12 items-center">
      <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-1">
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                <div className="text-sm font-medium text-gray-500 truncate">
                    Use Case :
                </div>
                <p>
                  2- As a procurement manager of ONEGLASS.io, I want to be able compare the
                  forecasted weather data for the next two weeks with VOIDS sales quantity forecast
                  for each location, so that I can make manual adjustments in the case of unexpected
                  weather changes
                </p>
                
            </div>
        </div>
        
        <select className="ml-2 p-2 rounded " value={location} onChange={e => setLocation(e.target.value)}>
          <option value="Munich">Munich</option>
          <option value="Hamburg">Hamburg</option>
        </select>
      <div style={{ width: 1500, height: 750 }}>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default ChartComponent;
