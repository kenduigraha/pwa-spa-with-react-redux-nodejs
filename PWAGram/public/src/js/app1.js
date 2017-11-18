
var button = document.querySelector('#start-button');
var output = document.querySelector('#output');

button.addEventListener('click', function() {
  // Create a new Promise here and use setTimeout inside the function you pass to the constructor
  var promise = new Promise(function(resolve, rejected) {
    setTimeout(function() { // <- Store this INSIDE the Promise you created!
      // Resolve the following URL: https://swapi.co/api/people/1
      fetch('https://swapi.co/api/people/1')
        .then(function(res) {
          return res.json()
        })
        .then(function(data) {
          return resolve(data);
        })
        .catch(function(err) {
          return rejected(err);
        });
    }, 3000);
  });

  var promise1 = new Promise(function(resolve, rejected) {
    setTimeout(function() {
      resolve('https://swapi.co/api/people/1');
    }, 3000);
  });

  var promiseFinal = new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve('https://httpbin.org/puts');
    }, 3000);
  })
  .then(url => {
    return fetch(url, {
      method: "PUT",
      headers: {
        // "Content-Type": "application/json",
        // "Accept": "application/json"
      },
      body: JSON.stringify({
        name: "ken",
        age: 23
      })
    })
  })
  .then(res => { return res.json() }, (err) => { console.log(err) })
  .then(data => { return data.json.name })
  .catch(err => console.log(err));

  promiseFinal
    .then(data => { output.textContent = data });
  // promise
  //   .then(function(data) {
  //     console.log(data);
  //     output.innerText = data.name;
  //   }, function(err) {
  //     console.log(err);
  //   })

  // promise1
  //   .then(function(data) {
  //     fetch(data)
  //       .then(function(res) {
  //         return res.json();
  //       }, function(err) {
  //         console.log(err);
  //       })
  //       .then(function(data) {
  //         output.innerHTML = data.name;
  //       })
  //       // .catch(function(err) {
  //       //   console.log(err)
  //       // });
  //   });
  // Handle the Promise "response" (=> the value you resolved) and return a fetch()
  // call to the value (= URL) you resolved (use a GET request)

  // Handle the response of the fetch() call and extract the JSON data, return that
  // and handle it in yet another then() block

  // Finally, output the "name" property of the data you got back (e.g. data.name) inside
  // the "output" element (see variables at top of the file)

  // Repeat the exercise with a PUT request you send to https://httpbin.org/put
  // Make sure to set the appropriate headers (as shown in the lecture)
  // Send any data of your choice, make sure to access it correctly when outputting it
  // Example: If you send {person: {name: 'Max', age: 28}}, you access data.json.person.name
  // to output the name (assuming your parsed JSON is stored in "data")

  var promisePut = new Promise(function(resolve, rejected) {
    setTimeout(function() {
      fetch('https://httpbin.org/put', {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        mode: "cors",
        body: JSON.stringify({
          name: "ken",
          age: 23
        })
      })
      .then(function(res) {
        console.log(res);
        return res.json();
      })
      .then(function(data) {
        console.log(data);
        return resolve(JSON.parse(data.data));
      })
      .catch(function(err) {
        return rejected(err);
      });
    }, 3000)
  });

  // promisePut
  //   .then(function(data) {
  //     output.innerHTML = data.name;
  //   }, function(err) {
  //     console.log(err);
  //   });
    
  // To finish the assignment, add an error to URL and add handle the error both as
  // a second argument to then() as well as via the alternative taught in the module
});