
const { Client } = require('pg');
const client = new Client({
    user: 'postgres_ro',
    password: '0123456789',
    host: 'voids-jobs.c2wwnfcaisej.eu-central-1.rds.amazonaws.com',
    database: 'postgres',
    schema: 'oneglass'
  });



    
    
    try {
            client.connect()
        .then(() => console.log('Connected to the database.'))
        .catch(err => console.error('Failed to connect to the database.', err));
    } catch (error) {
        console.log('Error ============')
        console.log(error);
        process.exit(1);
    }

module.exports = client;

