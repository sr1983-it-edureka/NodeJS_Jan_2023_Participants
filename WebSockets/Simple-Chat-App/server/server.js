
const WebSocket = require("ws");
const uuid = require("uuid");


const PORT = 9999;

const server = new WebSocket.Server({
  port: PORT
}, () => {
  console.log(`Server started and listening at port ${PORT}`);
})

server.on("connection", (client) => {

  client.id = uuid.v4();
  console.log(`New Client has connected to Server, ${client.id}`);

  client.onmessage = (messageEvent) => {

    const data = messageEvent.data;
    console.log(`Message received ${data}`);


    const clients = server.clients;
    clients.forEach( (memberClient) => {

      if (memberClient !== client){
        memberClient.send(data);
      }
    })

    
  }



})