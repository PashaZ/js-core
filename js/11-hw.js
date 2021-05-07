
 // task1

const http = require('http')
const os = require('os');
const { dirname } = require('path');
const path = require('path')

http.createServer(function (request,response) {
    response.writeHead(200,{'Content-Type':'text/html'})
    response.write('<h1>System information</h1>')
    response.write('<h4>Current user name: '+ os.userInfo().username +'</h4>')
    response.write('<h4>OS type: '+ os.type() +'</h4>')
    response.write('<h4>System work time: '+ ((os.uptime())/60).toFixed(2) +'minutes</h4>')
    response.write('<h4>Current work directory: '+ __dirname +'</h4>')
    response.end(('<h4>Server file name: '+ path.basename(__dirname) +'</h4>'));
}).listen(5000, function(){console.log("server is working...")});

// task2

const http = require("http");
const os = require('os');
const personalmodule = require('./personalmodule.js');

http.createServer(function (request, response) {
    let name = os.userInfo().username;
    let date = new Date();

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write("<p> Date of request: " + date + "</p>");
    response.write("<p>" + personalmodule.greetUser(name, date) + "</p>");
}).listen(8000, console.log("server is working"));


 