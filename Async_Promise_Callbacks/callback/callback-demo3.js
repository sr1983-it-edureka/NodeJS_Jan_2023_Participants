
console.log("Beginning...");

getUser(1, processUser);


function processUser(user){

  console.log("User object is " + JSON.stringify(user));

  getCourses(user.username, processCourses)
}

function processCourses(courses){

  console.log("Courses -> " + JSON.stringify(courses));

  const course = courses[0];
  getBatches(course.name, processBatches)
}

function processBatches(batches, status){

  console.log("Status ->" + status);
  console.log("Batches ->" + JSON.stringify(batches));
}

function getUser(id, callback){

  setTimeout(() => {

    console.log("Fetching user data from database...");

    const user = {id: id, username: 'edureka', displayName: 'Edureka'};
    callback(user);
  }, 2000)

}


function getCourses(username, callback){

  setTimeout(() => {

    console.log(`Fetching courses for the user ${username}`);

    const courses = [
      {id: 1, name: 'Java FSD'},
      {id: 2, name : 'MERN'}
    ]

    callback(courses);
  }, 2000)

}


function getBatches(coursename, callback){

  setTimeout( () => {

    console.log(`Fetching batch details for the given course ${coursename}`);

    const batches = [
      {id: 1, name : 'Jan-2023 Batch', noOfParticipants: 25},
      {id: 2, name : 'Feb-2023 Batch', noOfParticipants: 20}
    ]

    callback(batches, "PROCESSING_COMPLETELY_DONE");
  }, 2000);
}

