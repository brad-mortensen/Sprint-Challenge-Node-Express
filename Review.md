# Review Questions

## What is Node.js?
 A JS runtime environment that allows developers to use javascript outside of the browser.
 ## What is Express?
 A lightweight and unopinionated framework for Node that adds functionality for things like middleware and routing.
 ## Mention two parts of Express that you learned about this week.
Server-side Routing and Middleware.
 ## What is Middleware?
 Middleware are functions that are either created by the developer or built into Express to increase Express' functionality. They are executed in the order they are introduced like a recipe. 
 ## What is a Resource?
 In the RESTful API paradigm, everything is a resource. Resources each have unique URI, can have multiple representations, and are managed through HTTP methods.
 ## What can the API return to help clients know if a request was successful?
A success code, like 200 or 201, and a string telling them it was successful.
 ## How can we partition our application into sub-applications?
 With Express' built in routing and through `modules.export`
 ## What is express.json() and why do we need it?
`express.json()` is Express' built in body-parser that parses incoming requests as a readable JSON object.