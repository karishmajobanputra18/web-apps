# Web Apps Week 2 - Notes

## NodeJS

NodeJS is Javascript outside of (and without) a browser. To install NPM and Node on your local machine, you'll need to download and install the correct version from [here](https://nodejs.dev/).


## NPM

NPM is the NodeJS package manager. To install a new package, you use the command:

```sh
npm install package-name
```

For example, to install [Express](https://www.npmjs.com/package/express), you would enter:

```sh
npm install express
```

To create a `package.json` file and add packages to it, you can use:

```sh
npm init
npm install --save package-name
```

From the NodeJS site:

> The package.json file is kind of a manifest for your project. It can do a lot of things, completely unrelated. It's a central repository of configuration for tools, for example. It's also where npm and yarn store the names and versions for all the installed packages.

You should read the NodeJS ['Learn'](https://nodejs.dev/learn) section of the website for more details about NodeJS and [package.json](https://nodejs.dev/learn/the-package-json-guide).


## Express

Express is a NodeJS package that we'll be using as a web server to serve up the front-end and back-end of our web app. For now, just getting the minimal example from it's NPM page is enough:

```javascript
// index.js

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
```

This will start Express running at http://localhost:3000/


## Element.insertAdjacentHTML

Use this to insert HTML into an existing DOM element

[https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)


## Template strings / string interpolation

The latest version of Javascript supports string subsitutions (called [string interpolation](https://en.wikipedia.org/wiki/String_interpolation#JavaScript) in most other languages):

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

Example:

```javascript
// ES6
let string = "world!";
console.log(`Hello, ${string}`);
```

The old way...

```javascript
// ES5
let string = "world!";
console.log("Hello, " + string);
```

You can also create multi-line strings (useful for putting HTML strings together):

```javascript
// Example from the Week 2 Weather App code
output.insertAdjacentHTML('beforeend', `
  <h3>${response.current.condition.text}</h3>
  <p>${response.current.temp_c}&#176;C</p>
`);
```