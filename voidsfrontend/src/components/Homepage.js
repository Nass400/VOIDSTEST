import React from "react";
import Alert from "./alert";

import ForecastTable from './forcasteddata';


   
   
   
   
export default function HomePage() {
    return (
        
   
   <div className="container mx-auto mt-12">
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-1">
            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                <div className="text-sm font-medium text-gray-500 truncate">
                    Use Case :
                </div>
                <p>
                1- As a procurement manager of ONEGLASS.io, I want to see the forecasted sales for
                the next two weeks for each location, so that I can make sure enough sunglasses are
                on stock in each location.
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

        <ForecastTable/>
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
    </div>);
}
