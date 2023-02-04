
const getAllUsers = (req, res) => {

  res.send([
    {id: 1, username: 'user1', password: 'mypassword'},
    {id: 2, username: 'user2', password: 'mypassword'},
  ]);

}

module.exports = {getAllUsers};
