![Travlr Getaways]

## Table of Contents
1. [Overview](#project-overview)
    - [Key Features](#key-features)
    - [Technologies](#technologies)
2. [Getting Started](#getting-started)
3. [Usage](#usage)
4. [Course Reflection](#course-reflection)

## Project Overview

This is a full stack travel booking web application built during my SNHU CS 465: Full Stack Development I course. This project uses the MEAN stack to provide a customer-facing website, RESTful API, MongoDB database, and Angular-based administrator single page application (SPA).

Travlr Getaways allows users to browse travel packages and trip information. Admins can log in to a secure Angular SPA to manage travel package information.

## Key Features 

- Customer-facing website using Express and Handlebars
- MVC designed server architecture
- MongoDB database with Mongoose
- RESTful API for application data
- Angular Admin SPA
- CRUD operations for travel package information
- JSON Web Tokens (JWT) authentication and protected endpoints
- Responsive and dynamic web interface

## Technologies 

- **Node.js/ Express.js** for backend and RESTful API
- **MongoDB/ Mongoose** for database and data models
- **Angular** for admin SPA
- **Handlebars** for server side page templates
- **JavaScript, HTML, CSS** for frontend development
- **JWT** for authentication and authorization

## Getting Started 

**Prerequisites**
- [MongoDB](https://www.mongodb.com/docs/manual/installation/)
- [Express](https://expressjs.com/en/5x/starter/installing/)
- [Angular](https://angular.dev/installation)
- [Node.js](https://nodejs.org/en/download)
- [Visual Studio Code](https://code.visualstudio.com/#alt-downloads)
- [Git](https://git-scm.com/install/)

**Installation**

Ensure you have all frameworks installed under [Prerequisites](#getting-started).

1. Then, open terminal/powershell or shell of choice and clone the repository

    ```git clone https://github.com/PeacefulDivide/cs465-fullstack.git```

2. Open project folder in Visual Studio Code

3. Navigate to 'app_admin' folder by changing directory using the cd command

    ```cd app_admin```

4. Install NPM packages

    ```npm install```

5. Open a second instance of termal/powershell and navigate to 'app_server' folder

    ```cd app_server```

6. While in the 'app_server' folder run the following command to start the server

    ```npm start```

7. While in the 'app_admin' folder run the following command to start admin server

    ```ng serve```

8. Open a browser tab and go to ```http://localhost:3000``` to access the customer-facing website

9. Open another browser tab and go to ```http://localhost:4200``` to access the admin SPA

## Usage ##

Ensure you followed all steps to get both servers up and running in the [Installation](#getting-started) step.

### Customer-facing website

![Travel Page]

### Admin SPA

![Homepage]
![Login Screen]
![Homepage after Login]
![Editing a Trip]

## Course Reflection 

### Architecure 

This project has given valuable experience with multiple frontend approaches. The customer website uses Express, HTML, JavaScript, and Handlebars to dynamically render pages on the server. The Angular SPA provides a more interactive experience by allowing admins to use components and services to communicate with the Express API without needing full page reloads.

MongoDB was used because its flexible NoSQL document structure works well for storing travel information. Mongoose provided schemas and models that made it easier for the Express backend to interact with the database.

### Functionality 

JSON connects the frontend and backend together and provides a standard format for transfering data. JavaScript is used for application logic, while JSON represents the data exchanged thorugh the RESTful API.

Throughout development, I refactored the application by converting static HTML into reusable Handlebars templates, organizing the backend using MVC, and connecting Angular services to the RESTful API. These changes improve maintainability and reduced duplicated code. Reusable UI components provide similar benefits by allowing functionality and interface elements to be created once and utilized in multiple places throughout the app. 

### Testing 

I tested the RESTful API using GET, PUT, POST, and DELETE requests to verify that data could be retrieved, updated, and removed correctly. I also tested communication between the Angular SPA, Express API, and MongoDB to ensure changes persisted. 

After implementing JWT, I tested both authorized and unauthorized requests to verify that protected endpoints could only be accessed by authenticated users. This demonstrated the imortance of testing both the apps funcationality and security.

### Reflection 

This course has strengthened my understanding of how frontend, backend, API, database, and authentication components work together in a fully complete application. I gained experience with Node.js, Express, MongoDB, Angular, RESTful APIs, JSON, and JWT. 

This course has helped prepare me for my goal of working as a software engineer by improving my ability to design application architecture, integrate different technologies, troubleshoot across application layers, and develop maintainable and secure software. 

Ultimately, this course has given me foundational and practical experience in full stack software development. With this newfound knowledge I can now create my own full stack web app from scratch to continue learning and building these skills.

