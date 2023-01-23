
const express = require("express");

const course = require("./course.js");


const port = 8888;
const app = express();

app.get("/courses/list", (req, res) => {

  res.send(course.allCourses);
})

app.get("/courses/:courseId", (req, res) => {

  const courseIdInRequest = parseInt(req.params.courseId);
  console.log("Course ID in Request " + courseIdInRequest);

  const identifiedCourseItem = course.allCourses.find( (courseItem) => {

    if (courseItem.id === courseIdInRequest){
      return courseItem;
    }
  })

  if (!identifiedCourseItem){
    // Course is not present

    res.status(404).send(`Course by ${courseIdInRequest} not present in the system`);

  }else{

    // Successful find - 
    // 200
    res.send(identifiedCourseItem);
  }


  // console.log(identifiedCourseItem);

})

app.listen(port, (error) => {
  
  if (error){
    console.log("Server unable to start");
    console.log(error);
  }else{
    console.log("Server started successfully on port " + port);
  }
});

