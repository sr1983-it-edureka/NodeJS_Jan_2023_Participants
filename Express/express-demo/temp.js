// Root Context Path 
app.get("/", (req, res) => {

  res.send("Hello World");
})

app.get("/welcome", (req, res) => {

  res.send("Welcome User");
})

app.get("/home-page", (req, res) => {

  res.send("This is the home page for the application");
})



const port2 = 8888;
app.listen(port2, (error) => {
  
  if (error){
    console.log("Server unable to start");
    console.log(error);
  }else{
    console.log("Server started successfully on port " + port2);
  }
})
