function doSomething() {
  return new Promise((resolve, reject) => {
    let error = true;

    if (!error) {
      resolve("successfully executed");
    } else {
      reject("Error Occurred");
    }
  });
}

console.log("Hello 1");
doSomething()
  .then((Response) => console.log(Response))
  .catch((err) => console.log(err));
console.log("Hello 2");




