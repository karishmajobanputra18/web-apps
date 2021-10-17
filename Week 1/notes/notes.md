## Using the Fetch API - ES6

```javascript
fetch(url)
	// Return the response JSON
	.then(response => response.json())
	// Do something with the data
  .then(data => console.log(data))

// ... is equivalent to this ES5 version ...

fetch(url).then(function(repsonse) {
	return response.json();
})
.then(function(data) {
	console.log(data);
})
```

From MDN Web Docs:

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

```javascript
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
```

> The simplest use of fetch() takes one argument — the path to the resource you want to fetch — and does not directly return the JSON response body but instead returns a promise that resolves with a Response object.

> The Response object, in turn, does not directly contain the actual JSON response body but is instead a representation of the entire HTTP response. So, to extract the JSON body content from the Response object, we use the json() method, which returns a second promise that resolves with the result of parsing the response body text as JSON.


## Arrow functions

From https://www.w3schools.com/Js/js_arrow_function.asp:

> If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword.


## ASync functions

From https://javascript.info/async-await

> The word "async" before a function means that the function should returns a promise. Other values returned are wrapped in a resolved promise automatically.

