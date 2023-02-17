
const express = require("express");
const { authenticationCheck } = require("../authentication/middleware.js");

// const tasksController = require("./controller.js")

const {getAllTasks, getTask} = require("./controller.js")


const taskRouter = express.Router();

// taskRouter.get("/tasks", logging, timeCalculation, f3);

// Cross-cutting concerns
// Middlware
// Secondaay functions - loging, montioring, authentication, authorization
taskRouter.get("/tasks", authenticationCheck, getAllTasks)
taskRouter.get("/tasks/:taskId", getTask);

module.exports = {taskRouter}

