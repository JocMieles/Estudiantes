const dotenv = require('dotenv').config();

export default {
    
    database: {
        user: process.env.DB_USER ||'base',
        password: process.env.DB_PASS || 'base',
        server: process.env.DB_HOST || 'localhost',
        database: process.env.DB_NAME || 'pruebaTe',
        options: {
            encrypt : true,
            trustServerCertificate: true,
        },
    }
}