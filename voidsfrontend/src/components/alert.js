import React, { useState, useEffect } from "react";

   
   
   
   
export default function Alert() {
        
    const [locationFilter, setLocationFilter] = useState("Munich");
    const [alerts, setAlerts] = useState([]);
  
    useEffect(() => {
      const fetchAlerts = async () => {
        const response = await fetch(`http://localhost:3000/alerts/${locationFilter}`);
        const data = await response.json();
        setAlerts(data.alerts);
      };
  
      fetchAlerts();
    }, [locationFilter]);
  
    return (
      <div className="container mx-auto mt-12">
      <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-1">
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                <div className="text-sm font-medium text-gray-500 truncate">
                    Use Case :
                </div>
                <p>
                4- As a managing director of ONEGLASS.io, I want to have the ability to press a button
                  that will generate a list of alerts on which future days I need to close our store due to
                  bad weather conditions, so that we decrease our fixed costs on unprofitable days.
                </p>
                
                
            </div>
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                <div className="text-sm font-medium text-gray-500 truncate">
                    Use Case :
                </div>
                <p>
                3- As a procurement manager of ONEGLASS.io, I want to be able to switch between
                    locations with an interactive button that changes the data visualized in the UI, so
                    that I can focus on one store at a time. 
                </p>
                
                
            </div>
        </div>
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
            <option value="Munich">Munich</option>
            <option value="Hamburg">Hamburg</option>
          </select>
        </div>
        {alerts.map(alert => (
          <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            <span className="font-medium">ALERT : </span> {alert}
          </div>
        ))}
      </div>
    );
  };
       
