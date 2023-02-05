const UserService = require('../services/user-service');
const client = require("../database/connection");
const axios = require('axios');
const moment = require('moment');



module.exports = (app) => {

    
    
const service = new UserService();


/**
 * @swagger
 * /forecasts:
 *  get:
 *    description: returns all the forcasts
 *    tags: ["forecasts"]
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get('/forecasts', async (req,res,next) => {
        
  try {
        const  result  = await service.getAllForecasts(); 
        res.send(result);
    } catch (err) {
        next(err)
    }
});
/**
  * @swagger
  * /forecasts/{location}:
  *  get:
  *   summary: forecasts by location
  *   tags: ["forecasts"]
  *   description: getting forecasts by location
  *   parameters:
  *     - in: path
  *       name: location
  *       
  *   responses:
  *    200:
  *     description: Valid request
  *    401:
  *     description: Invalid request
  * 
  */
app.get('/forecasts/:location', async (req,res,next) => {
  const { location } = req.params;
  try {
        const  result  = await service.getAllForecastsWithLocation({location}); 
        res.send(result);
    } catch (err) {
        next(err)
    }
});

/**
  * @swagger
  * /alerts/{location}:
  *  get:
  *   summary: alerts by location
  *   tags: ["alerts"]
  *   description: getting alerts by location
  *   parameters:
  *     - in: path
  *       name: location
  *       
  *   responses:
  *    200:
  *     description: Valid request
  *    401:
  *     description: Invalid request
  * 
  */
app.get('/alerts/:location', async (req,res,next) => {
  const { location } = req.params;
  try {
        const  alerts  = await service.getAlertsWithLocation({location}); 
        res.send({alerts});
    } catch (err) {
        next(err)
    }
});


  
 /**
  * @swagger
  * /weather/{location}/{start_date}/{end_date}:
  *  get:
  *   summary: weather by location and dates
  *   tags: ["weather"]
  *   description: getting alerts by location and dates
  *   parameters:
  *     - in: path
  *       name: location
  *     - in: path
  *       name: start_date
  *     - in: path
  *       name: end_date
  *   responses:
  *    200:
  *     description: Valid request
  *    401:
  *     description: Invalid request
  * 
  */
  app.get('/weather/:location/:start_date/:end_date', async (req,res,next) => {
        
    try {
      const { location, start_date, end_date } = req.params;
          const { result } = await service.weatherByLocationStartdateEndDate({location, start_date, end_date}); 
          res.send(result.data);
      } catch (err) {
          next(err)
      }
  });


/**
  * @swagger
  * /weather/{location}:
  *  get:
  *   summary: weather by location
  *   tags: ["weather"]
  *   description: getting weather by location
  *   parameters:
  *     - in: path
  *       name: location
  *       
  *   responses:
  *    200:
  *     description: Valid request
  *    401:
  *     description: Invalid request
  * 
  */
app.get('/weather/:location', async (req,res,next) => {
        
    try {
          const { location } = req.params;
          const { result } = await service.weatherByLocation({location}); 
          res.send(result.data);
      } catch (err) {
          next(err)
      }
  });







}