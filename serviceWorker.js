const staticCremaCoffee ="crema-coffee-site-v1"
const assets =[
    "/",
    "/index.html",
    "/style.css",
    "/app.js",
    "/assets/images/espresso.jpg",
    "/assets/images/americano.jpg",
    "/assets/images/capuccino.jpg",
    "/assets/images/latte.jpg",
    "/assets/images/mocha.jpg",
    "/assets/images/machiato.jpg",
    "/assets/images/breve.jpg",
    "/assets/images/cafeaulait.jpg",
    "/assets/images/ristretto.jpg"
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticCremaCoffee).then(cache =>{
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})