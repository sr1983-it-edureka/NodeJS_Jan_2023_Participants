
console.log("Beginning...");

// Variation 1

getUser(1)
  .then( (user) => {
    return getCourses(user.username)
  })
  .then( (courses) => {
      return getBatches(courses[0].name);
  })
  .then( (batches) => {
    console.log("Batches ->" + JSON.stringify(batches));
  })
  .catch( (error) => {
    console.log("Error is " + error);
  })
  


// Variation 2

/*
getUser(1)
  .then( (user) => getCourses(user.username))
  .then( (courses) => getBatches(courses[0].name))
  .then( (batches) => console.log("Batches ->" + JSON.stringify(batches)))
  .catch( (error) => console.log("Error is " + error))
*/

function getUser(id){

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      console.log("Fetching user data from database...");
  
      const user = {id: id, username: 'edureka', displayName: 'Edureka'};
      resolve(user);
    }, 2000)
  
  })

}


function getCourses(username){

  return new Promise( (resolve, reject) => {

    setTimeout(() => {

      console.log(`Fetching courses for the user ${username}`);
  
      const courses = [
        {id: 1, name: 'Java FSD'},
        {id: 2, name : 'MERN'}
      ]
  
      resolve(courses);
    }, 2000)    

  })

}


function getBatches(coursename){

  return new Promise( (resolve, reject) => {

    setTimeout( () => {

      console.log(`Fetching batch details for the given course ${coursename}`);
  
      const batches = [
        {id: 1, name : 'Jan-2023 Batch', noOfParticipants: 25},
        {id: 2, name : 'Feb-2023 Batch', noOfParticipants: 20}
      ]
  
      resolve(batches, "PROCESSING_COMPLETELY_DONE");
    }, 2000);

  })


}

