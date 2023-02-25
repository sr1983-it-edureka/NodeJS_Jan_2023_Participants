
const express = require("express");

const course = require("./course.js");


const port = 8888;
const app = express();

app.use(express.json());

app.get("/courses/list", (req, res) => {

  res.send(course.allCourses);
})

app.get("/courses/:courseId", (req, res) => {

  const identifiedCourseItem = findCourseObject(req);
  console.log(identifiedCourseItem);

  if (!identifiedCourseItem){
    // Course is not present

    res.status(404).send(`Course by ${req.params.courseId} not present in the system`);

  }else{

    // Successful find - 
    // 200
    res.send(identifiedCourseItem);
  }


  // console.log(identifiedCourseItem);

})

// Create a new course
app.post("/courses", (req, res) => {

  const reqBody = req.body;
  console.log("Req Body ->" + reqBody);

  const newCourse = {
    id: course.allCourses.length + 1,
    name: reqBody.name,
    duration: reqBody.duration,
    rating : reqBody.rating
  }

  course.allCourses.push(newCourse);

  res.send({
    message: "INSERTED SUCCESSFULLY",
    course: newCourse
  });
})

// Delete 

app.delete("/courses/:courseId", (req, res) => {

  // [1, 2, 3, 4, 5]

  const identifiedCourseItem = findCourseObject(req);

  if (!identifiedCourseItem){
    // Course is not present

    res.status(404).send(`Course by ${req.params.courseId} not present in the system`);

  }else{

    console.log("Course object ->" + JSON.stringify(identifiedCourseItem));

    const courseIndex = course.allCourses.indexOf(identifiedCourseItem);
    console.log("Course Index in the array ->" + courseIndex);

    course.allCourses.splice(courseIndex, 1);

    res.send({
      message : "DELETED SUCCESSFULLY"
    });
  }
})

// Updating a course
app.put("/courses/:courseId", (req, res) => {

  const identifiedCourseItem = findCourseObject(req);

  if (!identifiedCourseItem){
    // Course is not present

    res.status(404).send(`Course by ${req.params.courseId} not present in the system`);

  }else{

    let responseCourse = null;

    course.allCourses.forEach( (arrayCourseItem) => {

      if (arrayCourseItem.id === identifiedCourseItem.id){

        arrayCourseItem.name = req.body.name;
        arrayCourseItem.duration = req.body.duration;
        arrayCourseItem.rating = req.body.rating;

        responseCourse = arrayCourseItem;
      }
    })

    res.send({
      message: "UPDATED SUCCESSFULLY",
      course: responseCourse
    });    
  }

})

function findCourseObject(req){

  const courseIdInRequest = parseInt(req.params.courseId);
  console.log("Course ID in Request " + courseIdInRequest);

  const identifiedCourseItem = course.allCourses.find( (courseItem) => {

    if (courseItem.id === courseIdInRequest){
      return courseItem;
    }
  })  

  return identifiedCourseItem;
}

app.listen(port, (error) => {
  
  if (error){
    console.log("Server unable to start");
    console.log(error);
  }else{
    console.log("Server started successfully on port " + port);
  }
});

module.exports = app

