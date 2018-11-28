# expressjs
Express Sample Codes

## Basics:

* Express is a Node.js web application framework.

* Express is used to make:

 1. Websites
 2. Web apps
 3. Back Ends

* Pug(earlier known as jade) is used to creating HTML templates.

* Competetors: Rails, Django

* Developed by TJ *Holowaychuk*, maintained by Node.js foundation.

* npm is the package manager for node.

* Packages can be installed using `npm install` command. The installation can be
    of two types, either *local* or  *global*. In local installation the packages
    will be available only with in the directory. While packages in global can be
    acessed throughout the system.

    `npm install -g name_of_package` is the systax for global installation.
    
    For local installation omit the `-g` flag.

* `npm init` is used for creating `package.json` file. This file is used to list down
    the dependencies. So it is good if you generate this file.

* Simple Hello world application

    var express = require('express');
    var app = express();

    app.get('/', function(req, res){
    res.send("Hello world!");
    });

    app.listen(3000);

    
    `app.get(route, callback)`. the `get` can be replaced by any of the HTTP requests.
    The callback function will be called when the client requests that url.

    The callback function has two parameters, request(req) & response(res).

* The HTTP requests are also called `HTTP verbs` at places.

* `route` is an *endpoint* in the url. eg. www.example.com/hello here `/hello` is a route.

* You can have multiple callback methods at the same route. e.g you can have app.get("/", ...), 
app.put("/", ...),  app.get("/", ...), etc.

* You can also use the *all* method to handle all HTTP requests using a single method. This is
benifitial in defining middle wares.

The syntax is: 

    app.all('/hello', function(req, res){
    res.send("This method will handle all the requests.");
    });


## Examples

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
