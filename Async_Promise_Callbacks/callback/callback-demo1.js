
console.log("beginning");

function userResultHandler(user){

  console.log("User object is " + JSON.stringify(user));
}

getUser(1, userResultHandler);

// getUser(1, (user) => {
//   console.log(JSON.stringify(user));
// });


console.log("end");

function getUser(id, callback){

  setTimeout(() => {

    console.log("Fetching user data from database...");

    const user = {id: id, username: 'edureka', displayName: 'Edureka'};
    callback(user);
  }, 2000)

}



//Use-case-1
/*

// Call FB API

Wait for the API results [3 Seconds]

Twiter-API (FB-API-Result.)
*/

//Use-case-2
/*

// Call FB API

// Twiter-API ()
*/

