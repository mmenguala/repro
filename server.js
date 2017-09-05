#!/bin/env node
/*
//var sys = require ('sys'),
var url = require('url'),
http = require('http'),
qs = require('querystring');


var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

function checkArray(json)
{
    for(var i = 0; i < json.length; i++) {
        var obj = json[i];

        console.log(obj);
    }
}


http.createServer(function (req, res)
{
    if(req.method=='POST')
    {
            var body='';
            req.on('data', function (data)
            {
                body +=data;
            });
            req.on('end',function()
            {
                var POST =  JSON.parse(body);
                console.log(POST);
                res.end();
            });
    }
    else if(req.method=='GET') {
        var url_parts = url.parse(req.url,true);
        console.log(url_parts.query);
    }
}).listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});
*/

const express = require('express')  
const app = express()

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

app.use((request, response, next) => {  
  console.log(request.headers)
  next()
})

app.use((request, response, next) => {  
  request.chance = Math.random()
  next()
})

app.get('/', (request, response) => {  
  response.json({
    chance: request.chance
  })
})

app.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});