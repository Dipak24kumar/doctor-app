let cacheData = "doctorV1";
this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                "/static/js/bundle.js",
                "/static/js/main.chunk.js",
                "/static/js/0.chunk.js",
                "/index.html",
                "/",
                "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap",
                "/manifest.json",
                "/favicon.ico",
                "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css",
                "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js",
                "https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js",
                "/static/media/home-screen.bc8948cc0d4703313bd7.png",
                "/static/media/heart-img.78e4d929b4fe7a4ca9a6.png",
                "/static/media/heart.881514d5e3a63b4317b1.png",
                "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2",
                "https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecg.woff2",
                "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2",
                "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2",
                "/static/media/breathing.bcbe5aefdcad7c792905.png",
                "/static/media/clock.ce4affe6aa1188835afd.png",
                "/static/media/hand.3824e11620acba2425ef.png",
                "/static/media/satyamave.081700900b55c9870577.png",
                "/assets/css/Reset.css",
                "/assets/css/global.css",
                "/Page_2",
                "/Page_3",
                "/Page_4",
                "/Page_5",
                "/Page_6",
                "/Page_7",
                "/Page_8",
                "/Page_9",
                "/Page_10",
                "/Page_11"
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

