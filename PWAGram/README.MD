# Progressive Web Apps - Complete Guide
This source code is part of Maximilian Schwarzmüller's "Progressive Web Apps - Complete Guide" course on udemy.com.

# How to Use
You need [Node.js](https://nodejs.org) installed on your machine. Simply download the installer from [nodejs.org](https://nodejs.org) and go through the installation steps.

Once Node.js is installed, open your command prompt or terminal and **navigate into this project folder**. There, run `npm install` to install all required dependencies.

Finally, run `npm start` to start the development server and visit [localhost:8080](http://localhost:8080) to see the running application.


```javascript
{
    "name": "PWAGram - Look Like Instagram, but it's PWA",
    "short_name": "PWAGram",
    "start_url": "/index.html",
    "scope": ".", //. mean all public folders include in this PWA app 
    "display": "standalone", // standalone -> no url bar
    "background_color": "#000", // background color when spash screen
    "theme_color": "#3F51B5", // top bar in task switcher
    "description": "PWAGram - Take a photo anything, anywhere",
    "dir": "ltr", // left to right
    "lang": "id-ID",
    "orientation": "portrait-primary", // it can be landscape
    "icons": [
        {
            "src": "/src/images/icons/app-icon-48x48.png",
            "type": "image/png",
            "sizes": "48x48"
        },
        {
            "src": "/src/images/icons/app-icon-96x96.png",
            "type": "image/png",
            "sizes": "96x96"
        },
        {
            "src": "/src/images/icons/app-icon-144x144.png",
            "type": "image/png",
            "sizes": "144x144"
        },
        {
            "src": "/src/images/icons/app-icon-192x192.png",
            "type": "image/png",
            "sizes": "192x192"
        }
    ],
    "related_applications": [
        {
            "platform": "play",
            "url": "https://play.google.com/store/apps/details?id=pwgram.mobile.app&hl=id",
            "id": "com.example.pwgram"
        }
    ]
}

```