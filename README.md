# expressjs
Express Sample Codes

Express Hello-World Example: myapp
---
* Use the `npm init` command to add package.json file.
* Install *express* using `npm install express`.

Express Generator Hello-World Example: genapp
---
Install the `express-generator` package using: `npm install express-generator -g`

But this will install express-generator globally as you have selected the *global install* options `-g`.

Genreate the app with pug as the view engine. If you want to change the view engine and see other options: `express -h`
`express --view=pug genapp`

`npm start` To start the application.

Open the page `localhost:3000`

Routing
---
Routing simply means what action will be taken when there is a client request on a particular URL & 
a specific HTTP request method.

The key points are:

    1. URL

    2. [HTTP Request Method](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods) (GET, POST, PUT, DELETE, HEAD, OPTIONS)
    
   
You can use [Postman](https://www.getpostman.com/apps) to send HTTP requests you want.

