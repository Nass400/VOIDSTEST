const client = require("../../database/connection");


//Dealing with data base operations
class UserRepository {

    async getAllForecastsData() {
        try {
          const query = `SELECT * FROM oneglass.forecasts`;
          const results = await client.query(query);
          if (results.error) {
            throw new Error("Error retrieving forecasts");
          }
          return results.rows;
        } catch (err) {
          console.log(err);
          throw err;
        }
      }
      async getAllForecastsWithLocationData(userInputs) {

        const { location,twoWeeksFromNow,today} = userInputs;

        try {
            const query = `SELECT * FROM oneglass.forecasts WHERE location = '${location}' AND date >= '${today}' AND date <='${twoWeeksFromNow}'`;
            
          const results = await client.query(query);
          if (results.error) {
            throw new Error("Error retrieving forecasts");
          }
          return results.rows;
        } catch (err) {
          console.log(err);
          throw err;
        }
      }
      
      async getForecastsByLocationToday(userInputs) {

        const { location,today} = userInputs;

        try {
            const query = `
                  SELECT "date", "location", "forecasted_sales_quantity"
                  FROM oneglass.forecasts
                  WHERE "location" = '${location}' AND "date" >= '${today}'
                  ORDER BY "date" ASC`;
          const results = await client.query(query);
          if (results.error) {
            throw new Error("Error retrieving forecasts");
          }
          return results.rows;
        } catch (err) {
          console.log(err);
          throw err;
        }
      }
      
    

}

module.exports = UserRepository;