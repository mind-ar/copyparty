
"use strict";


self.addEventListener('install', function () {
    console.log('copyparty service worker installed');
});

self.addEventListener('activate', function (event) {
    event.waitUntil(self.clients.claim());

    console.log('copyparty service worker activated');

});

self.addEventListener('fetch', function (event) {
    console.log('fetch:', event.request.url);
});

