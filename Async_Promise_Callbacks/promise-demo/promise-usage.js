
let simulatedError = false;

const demoPromise = 
  new Promise( (resolve, reject) => {

    setTimeout(() => {

      if (simulatedError){

        const error = new Error("Unable to retrive the user");
        reject(error);
      }else{

        const user = {id: 1, username : 'edureka'};
        resolve(user);  
      }

    }, 2000)
  } 
)


demoPromise
  .then( (user) => {
    console.log("User is " + JSON.stringify(user));
  })
  .catch( (error) => {
    console.log("Error Scenario " + error);
  })
