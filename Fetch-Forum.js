<script>
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
</script>

// fetch is an API that provides a JS interface for accessing and manipulationg parts of the HTTP pipeline.
// this is a simple fetch request to where we are requesting a file and spitting it out to the console.
// we are extracting the json body content from the response object, we use the json() method,
// which returns a second promise that resolves with the result of parsing the response body text as JSON.
