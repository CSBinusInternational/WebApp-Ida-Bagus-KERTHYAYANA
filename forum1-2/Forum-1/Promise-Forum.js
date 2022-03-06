<script>
const promise = new Promise(function (resolve, reject) { //creation of the promise
    const string1 = "geeksforgeeks";
    const string2 = "geeksforgeeks";
    if (string1 === string2) { //checking whether string1 is the same as string2
      resolve();
    } else {
      reject();
    }
  });

  promise
    .then(function () { // if correct then the promise is resolved. promise works like promises in real life. it is used to keep track of whether the asynchronous even has been executed or not.
      console.log("Promise resolved successfully");
    })
    .catch(function () { // if incorrect then the promise is rejected.
      console.log("Promise is rejected");
    });
</script>
