const express = require('express');
const actionsRouter = require('./actions/actionsRouter');
const projectsRouter = require('./projects/projectsRouter');

const app = express();

app.use(express.json());


app.use("/api/projects", projectsRouter);
app.use("/api/actions", actionsRouter);

module.exports = app;