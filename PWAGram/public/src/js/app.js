var deferredPrompt;

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('/sw.js')
             .then(function() {
                 console.log('service worker registered')
             })
             .catch(function(err) {
                console.error("SW registration failed with error "+err);
             });
}


window.addEventListener('beforeinstallprompt', function(event) {
    // beforeinstallprompt Event fired
    console.log('beforeinstallprompt fired')
    event.preventDefault();

    deferredPrompt = event;
    return false;
    // event.userChoice will return a Promise.
    // For more details read: https://developers.google.com/web/fundamentals/getting-started/primers/promises
    // event.userChoice.then(function(choiceResult) {

    //     console.log(choiceResult.outcome);

    //     if(choiceResult.outcome == 'dismissed') {
    //         console.log('User cancelled home screen install');
    //     }
    //     else {
    //         console.log('User added to home screen');
    //     }
    // });
});

var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        // resolve('This is executed after the timer is done');
        reject({code: 500, message: "An error occured!"});
    },3000);
});

promise
    .then(function(text) {
        console.log(text);
        return text;
    }
    // , function(err) {
    //     console.log('the first error');
    //     console.log(err);
    // }
    )
    .then(function(newText) {
        console.log(newText);
    })
    .catch(function(err) {
        console.log('the second error');
        console.log(err);
    });

console.log('This is executed right after setTimeout');

fetch('https://httpbin.org/ip')
    .then(function(response) {
        console.log(response)
        return response.json();
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(err) {
        console.log(err);
    });

fetch('https://httpbin.org/post', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        mode: "cors",
        body: JSON.stringify(
            {
                message: "This is message to post"
            }
        )
    })
    .then(function(response) {
        console.log(response)
        return response.json();
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(err) {
        console.log(err);
    });

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://httpbin.org/ip');
xhr.responseType = 'json';

xhr.onload = function() {
    console.log('use xhr');
    console.log(xhr.response);
};

xhr.onerror = function() {
    console.log('error');
};

xhr.send();
