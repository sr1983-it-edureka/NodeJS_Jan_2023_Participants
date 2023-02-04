
console.log("Beginning...");

maintainExecutionOrder();

doReporting();

async function maintainExecutionOrder(){

  await displayBatches(); // Step-1
  await processStudent(); // Step-2

}

function doReporting(){
  console.log("Do Reporting...")
}

async function maintainNoExecutionOrder(){

  displayBatches(); // Step-1 [3 sub-steps]
  processStudent(); // Step-2 [2 sub-steps]

  // Run-1
    // step-1 , sub-step-1
    // step-1, sub-step-2
    // step-2, sub-step-1,
    // step-1, sub-step-3
    // step-2, sub-step-2

}

async function displayBatches(){

  try{
    console.log("START-getUser execution")
    const user = await getUser(1);
    const courses = await getCourses(user.username);
    const batches = await getBatches(courses[0].name);
    console.log("Batches -> " + JSON.stringify(batches));      

  }catch (error){
    console.log("Error is " + error);
  }

}

async function processStudent(){

  console.log("Processing Student information....");

  const courses = await getCourses("student-1");
  console.log("Courses for the student " + courses);

}


/*
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
  */


function getUser(id){


  return new Promise((resolve, reject) => {

    setTimeout(() => {

      console.log("END - getUser -> Fetching user data from database...");
  
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

