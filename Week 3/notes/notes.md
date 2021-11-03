# Web Apps Week 3 - Notes

## Topics Covered

* Routing
* Requests and responses with Fetch and Express
* Passing data with a request
* Retrieving and sending JSON data

## Routing

'Routing' is the term used to describe mapping URLs (and HTTP methods) to code. A 'route' is a single end-point (a single URL + method) that maps to some code. When the route is called with a request, the code for that route processes the request and sends a response (see the Week 2 slides on Web Theory).

The way we describe routes in our application (using Express) is described in more detail here:

[http://expressjs.com/en/starter/basic-routing.html](http://expressjs.com/en/starter/basic-routing.html)

## Requests and responses with Fetch and Express

### Sending GET requests with Fetch

The [fetch function can take a second optional 'init' parameter](https://developer.mozilla.org/en-US/docs/Web/API/fetch#syntax). Using fetch without this will make a GET request. We use a GET request when we want the server (our API) to return some data and not make any changes to the data on the server.

```javascript
function callApi(url) {
    return fetch(url).then(
        response => response.json()
    )
}

callApi('/api/route').then(response => {
    console.log('Got response: ' + response)
})
```

### Sending POST requests with Fetch

To send a POST request, we use the same fetch API, but we need to pass some additional options to the function when we call it.

```javascript
function callApi(url) {
    let options = {
        method: "POST"
    }

    return fetch(url, options).then(
        response => response.json()
    )
}
```

### Passing data with a request

Making GET and POST requests with fetch usually require that we send some data to the API we're calling. To do this, we need to take our FormData and pass it to the fetch API.

#### GET

When making a GET request, we want to append the data to the end of the URL as a 'query string'. These are the strings you see in the URL in the browser when submitting a form normally. E.g:

```
https://localhost:8000/search?q=My%20Query
```

The query string is the part after the questionmark. In this example, we're sending a parameter of 'q' with the value "My Query" (the space is 'escaped' and shown as %20 when entered in the URL). More info about escaped characters / spaces in URLs can be found here:

[https://stackoverflow.com/questions/497908/is-a-url-allowed-to-contain-a-space
](https://stackoverflow.com/questions/497908/is-a-url-allowed-to-contain-a-space)

To send some data using a GET request, we can do something like the following, and just include the query string on the end of the URL:

```javascript
// url should include a query string, i.e. '?q=query'
function apiGetRequest(url) {
    return fetch(url).then(
        response => response.json()
    )
}
```

To save ourselves typing out the query string each time, we can create something called a `URLSearchParams` object. This can be used to transform a `FormData` object to a query string that we can just append to the end of the URL. For example:

```javascript
// Get the form element object from the from DOM
let myForm = document.getElementById('myForm')

// Get the data contained in the form
let data = FormData(myForm)

// Append it to the URL as a
let url = '/api/end-point?' + new URLSearchParams(data)

apiGetRequest(url, data).then(response => {
    console.log('Got response:', response)
}
```

#### POST

When making a POST request, we need to send the data in the request body. We can do this as follows:

```javascript
function apiPostRequest(url, data) {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    return fetch(url, options).then(
        response => response.json()
    )
}
```

In this case, there's no need to convert a `FormData` object to a query string (via `URLSearchParams`). We just pass our `FormData` object as the body of the request.

### Retrieving and sending JSON data

When we make a request to a URL that matches a route in our Express application, a function is called that looks something like this:

```javascript
function(req, res) {
    // Do something...
}
```

The `req` parameter is a request object and contains all the information that was sent from the front-end, and the `res` parameter is a response object, which details what we're going to reply with.

To get the JSON that was sent to us (in the `req` object), we can use:

```javascript
// Enable parsing content-type application/json
app.use(express.json())

app.post('/login', function(req, res) {
    console.log(req.body)
})
```

To return some JSON to the caller, we can use:

```javascript
app.post('/login', function(req, res) {
    res.json({
        username: "grenes",
        user_id: 1
    })
})
```

> Note: We don't have to return the `res` parameter, just call a method on it. Javascript objects are passed by reference (actually a copy of a reference), so calling `res.json(...)` affects the `res` object without us needing to return it. See here for the [gory details](https://stackoverflow.com/questions/13104494/does-javascript-pass-by-reference#13104500).

## References

* [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/fetch)
* [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)
* [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
* [Percent Encoding](https://en.wikipedia.org/wiki/Percent-encoding)
