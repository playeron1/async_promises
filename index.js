const waitForMessage = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hello from a JavaScript Promise!");
  }, 1000);
});

waitForMessage
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("Promise failed:", error);
  })
  .finally(() => {
    console.log("Promise finished.");
  });

  console.log(__dirname);
  console.log(__filename);
  
  