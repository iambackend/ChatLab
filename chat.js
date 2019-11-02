const mongo = require('mongodb').MongoClient;
const client = require('socket.io').listen(4000).sockets;
// this code was copypasted from stackoverflow
const http = require('http');
const fs = require('fs');
const format = require('util').format;

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(80);
});

// this code was copypasted from bradtraversy/mongochat
// Connect to mongo
var url = format("mongodb://%s,%s,%s/%s?replicaSet=%s&readPreference=%s"
  , "172.31.36.100:27017"
  , "172.31.46.56:27017"
  , "172.31.41.247:27017"
  , "mongochat"
  , "rs0"
  , "secondaryPreferred");
mongo.connect(url, function(err, db){
    if(err){
        throw err;
    }

    console.log('MongoDB connected...');

    // Connect to Socket.io
    client.on('connection', function(socket){
        let chat = db.collection('chats');
	
	//return 0;

        // Create function to send status
        sendStatus = function(s){
            socket.emit('status', s);
        }

        // Get chats from mongo collection
        chat.find().limit(100).sort({_id:1}).toArray(function(err, res){
            if(err){
                throw err;
            }

            // Emit the messages
            socket.emit('output', res);
        });

        // Handle input events
        socket.on('input', function(data){
            let name = data.name;
            let message = data.message;

            // Check for name and message
            if(name == '' || message == ''){
                // Send error status
                sendStatus('Please enter a name and message');
            } else {
                // Insert message
                chat.insert({name: name, message: message}, function(){
                    client.emit('output', [data]);

                    // Send status object
                    sendStatus({
                        message: 'Message sent',
                        clear: true
                    });
                });
            }
        });

        // Handle clear
        socket.on('clear', function(data){
            // Remove all chats from collection
            chat.remove({}, function(){
                // Emit cleared
                socket.emit('cleared');
            });
        });
    });
});
