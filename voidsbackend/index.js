const express = require('express');
const expressApp = require('./express-app');


const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const app = express();
app.use(express.json());
const StartServer = async() => {
    // await databaseConnection();
    
    await expressApp(app);
    const swaggerOptions={
        definition:{
            openapi:'3.0.0',
            info:{
                title:'VOIDS Backend',
                version:'1.0.0',
                description:'Backend APIs for VOIDS TEST',
                contact:{
                    name:'nassim nabi',
                    email:'nassimnabi@outlook.com'
                },
                servers:["http://localhost:3000"]
            },
            components: {
              securitySchemes: {
                bearerAuth: {
                  type: 'http',
                  scheme: 'bearer',
                  bearerFormat: 'JWT',
                }
              }
            },
            security: [{
              bearerAuth: []
            }]

        },
        apis:["./api/*.js"]
    }
    const swaggerDocs=swaggerJSDoc(swaggerOptions);
    app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));



    app.get('/ok', (req,res)=>{
    res.status(200).send('hello Word');
});


const port = process.env.PORT;

app.listen(port,()=> console.log('listening.......'));



}

StartServer();

module.exports = app;



