const { UserRepository } = require("../database");
const axios = require('axios');
const moment = require('moment');

// All Business logic will be here
class UserService {

    constructor(){
        this.repository = new UserRepository();
    }
    
    async weatherByLocation(userInputs){

        const { location } = userInputs;
        
        try {
            const Now = moment().format('YYYY-MM-DD');
            console.log(Now)
            const twoWeeksFromNow = moment().add(14, 'days').format('YYYY-MM-DD');
            const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?startDate=${Now}&endDate=${twoWeeksFromNow}&unitGroup=metric&aggregateHours=24&contentType=json&key=3WWEVYKLNRDJ4DHHK7ASL5XFF`;
            const result = await axios.get(url);

            return (result.data.days)
        } catch (err) {
            console.log(err)
        }

       
    }
    async weatherByLocationStartdateEndDate(userInputs){

        const { location, start_date, end_date } = userInputs;
        
        try {
            const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?startDate=${start_date}&endDate=${end_date}&unitGroup=metric&aggregateHours=24&contentType=json&key=3WWEVYKLNRDJ4DHHK7ASL5XFF`;
            const result = await axios.get(url);
            return ({result})
        } catch (err) {
            console.log(err)
        }

       
    }
    async getAllForecasts(){

        try {

            const result = await this.repository.getAllForecastsData();
            console.log(result)
            return (result)
        } catch (err) {
            console.log(err)
        }

       
    }

    async getAlertsWithLocation(userInputs){

        const { location } = userInputs;
        try {
            const today = new Date().toISOString().slice(0,10);
            
            const forecasts = await this.repository.getForecastsByLocationToday({location,today});

            const weatherData = await axios.get(
                `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&aggregateHours=24&contentType=json&key=3WWEVYKLNRDJ4DHHK7ASL5XFF`
            );
          
            // Create an array of alerts
            let alerts = [];
          
            let currentClose = 0;
            for (let i = 0; i < weatherData.data.days.length - 2; i++) {
            
        
            if ((forecasts[i].forecasted_sales_quantity + forecasts[i + 1].forecasted_sales_quantity + forecasts[i + 2].forecasted_sales_quantity ) < 1000) {
                if (currentClose < 3) {
                    currentClose++;
                    alerts.push(`${forecasts[i].date.toLocaleDateString()} : Close the Store sales under 1000 for three subsequent days`);
                } else {
                    currentClose = 0;
                }
            }
            else if ((weatherData.data.days[i].temp < 5) && (weatherData.data.days[i + 1].temp < 5) && (weatherData.data.days[i + 2].temp < 5)) {
                let sales = forecasts[i].forecasted_sales_quantity + forecasts[i + 1].forecasted_sales_quantity + forecasts[i + 2].forecasted_sales_quantity;
                if (sales > 1500) {
                    continue;
                } else {
                    
                    if (currentClose < 3) {
                        currentClose++;
                        alerts.push(`${forecasts[i].date.toLocaleDateString()} : Close the store temperature is <5 for 3 days in a row`);
                    } else {
                        currentClose = 0;
                    }
                }
            } else {
                currentClose = 0;
            }
            
        }
        return (alerts)
        } catch (err) {
            console.log(err)
        }

       
    }

    
    async getAllForecastsWithLocation(userInputs){

        const { location } = userInputs;
        try {
            const twoWeeksFromNow = moment().add(14, 'days').format('YYYY-MM-DD');
            const today = new Date().toISOString().slice(0,10);
            
            const result = await this.repository.getAllForecastsWithLocationData({location,twoWeeksFromNow,today});
            console.log(result)
            return (result)
        } catch (err) {
            console.log(err)
        }

       
    }
    


}
module.exports = UserService;
