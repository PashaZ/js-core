
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

let http = require('http');
let os = require('os');
let date = new Date();

http.createServer(function (request,response) {
    response.writeHead(200,{'Content-Type':'text/html'})
    response.write('Date of request: '+ date)

    let name = os.userInfo().username;
    let currenthour = new Date().getHours();
    
    if      (5 < currenthour && currenthour < 11){response.write("<h5>Good morning, "+ name +"</h5>")}
    else if (11 < currenthour && currenthour < 17){response.write("<h5>Good day, "+ name +"</h5>")}
    else if (17 < currenthour && currenthour < 23){response.write("<h5>Good evening, "+ name +"</h5>")}
    else(response.write("<h5>Good night, "+ name +"</h5>"));
}).listen(8000, console.log("server is working"))



 