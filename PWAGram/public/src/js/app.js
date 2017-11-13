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