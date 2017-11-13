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