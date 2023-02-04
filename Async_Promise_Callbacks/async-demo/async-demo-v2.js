
console.log("beginning");

const user = getUser(1);
console.log("User object is " + user);

console.log("end");

function getUser(id){

  setTimeout(() => {

    console.log("Fetching user data from database...");

    const user = {id: id, username: 'edureka', displayName: 'Edureka'};

    return user;
  }, 2000)

}