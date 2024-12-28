const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: '會員系統 API',
    description: 'autogen 產出 API 文件'
  },
  host: 'localhost:3000'
};

const outputFile = './swagger-output.json';
const routes = ['./app.js'];

swaggerAutogen(outputFile, routes, doc);