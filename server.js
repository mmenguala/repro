#!/bin/env node
const express = require('express')  
const app = express()

//var server_port = process.env.NODE_SERVICE_PORT_8080_TCP || 8081
//var server_ip_address = process.env.NODE_PORT_8080_TCP_ADDR || '127.0.0.1'

console.log("El puerto es : " + server_port);
console.log("La IP es :" + server_ip_address);

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

app.listen(8080, '0.0.0.0', function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});

/*//
for (var prop in process.env){
	console.log(prop + ": " + process.env[prop])
}
*/