//var sys = require ('sys'),
var url = require('url'),
http = require('http'),
qs = require('querystring');


var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
server.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});

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
}).listen(8080,'127.0.0.1');