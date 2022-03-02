<script>
  const helperPromise = function () {
    const promise = new Promise(function (resolve, reject) { // creation of promise
      const x = "geeksforgeeks";
      const y = "geeksforgeeks";
      if (x === y) {
        resolve("Strings are same");
      } else {
        reject("Strings are not same");
      }
    });

    return promise;
  };

  async function demoPromise() {
    try {
      let message = await helperPromise();
      console.log(message);
    } catch (error) {
      console.log("Error: " + error);
    }
  }

  demoPromise();
</script>

//Async/Await is used to work with promises in asynchronous functions.
//It is basically syntactic sugar for promises. It is just a wrapper to restyle code and make promises easier to read and use.
//It makes asynchronous code look more like synchronous/procedural code, which is easier to understand.
