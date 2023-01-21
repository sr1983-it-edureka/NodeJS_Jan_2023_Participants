
import {createServer} from "http";

const port = 80;

const listenHandler = function(error){

  if (error){
    console.log(`Unable to start the server on port ${port}`);
    console.log(error);
  }else{
    console.log(`Server started and listening at port ${port}`);
  }

}

const helloWorldHandler = function (request, response){

  // Section 1
  // Getting content from External API
  // Send weather information
  // 0.25 s

  // Section 2
  // Getting content from database
  // 0.75 s

  response.write("Hello world from Server");
  response.end();

  // return "abc";
}


// helloWorldHandler(req, res);

const serverApp = createServer(helloWorldHandler).listen(
  port, listenHandler);

serverApp.on('error', listenHandler);

serverApp.on('connected123', function(){
  console.log('Connected 123')
})

serverApp.on('listening', function(){
  console.log('Server listening for active client requests');
})


serverApp.on('connect', function(){
  console.log('Client App (BRowser) has connected...');
})



