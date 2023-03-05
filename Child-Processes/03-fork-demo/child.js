

// parentProcessInstance.receive()

process.on('message', (data) => {

  console.log("Child process has received a message from parent" + 
    JSON.stringify(data));

  
  process.send({
    id: 1,
    sources: "Child Process",
    message : "Child process sending message to Parent"
  });
  
})