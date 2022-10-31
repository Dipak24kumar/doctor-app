let cacheData = "doctorV1";
this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                "/static/js/bundle.js",
                // "/static/js/main.chunk.js",
                // "/static/js/0.chunk.js",
                "/index.html",
                "/",
                "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap",
                "/manifest.json",
                "/favicon.ico"

            ]);
        })
    )
});

this.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((result) => {
            if (result) {
                return result;
            }
        })
    )
});

