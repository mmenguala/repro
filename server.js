#!/bin/env node
//var sys = require ('sys'),
var url = require('url'),
http = require('http'),
qs = require('querystring');


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
}).listen(8080, "0.0.0.0");