
const express = require("express");

// const router = require("./task/router.js");
const {taskRouter} = require("./task/router.js");
const userRouter = require("./user/router.js");


const app = express();

// app.use(router.taskRouter);
app.use(taskRouter);
app.use(userRouter.userRouter);

const PORT = 8888;
app.listen(PORT, () => {
  console.log(`Server started and running at port ${PORT}`);
})


fetch("")
.then()
.catch()

const p1 = {
  id: 1,
  name: ""
}

const p2 = {
  id: 2,
  name: ""
}

const p3 = {
  id: 3,
  name: ""
}

const e1 = {
  eid: 1,
  ename: '',
  projects: [
    p1, p2
  ]  
}

const e2 = {
  eid: 2,
  ename: '',
  projects: [
    p1, p3
  ]  
}

const allEmployes = [e1, e2];

find
