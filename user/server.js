const http = require('http');
const app = require('./app');
const { console } = require('inspector');


const server = http.createServer(app);




server.listen(3001, ()=>{
    console.log('User server is running on port 3001')
});