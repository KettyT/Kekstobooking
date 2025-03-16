
(function () {

    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(function () {

            let mapCanvas = document.getElementById("map-canvas");
            if (!mapCanvas) {
                console.log("not mapCanvas");
            }

            var map = L.map('map-canvas').setView({lon: 0, lat: 0}, 2);

            // add the OpenStreetMap tiles
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
            }).addTo(map);

            // show the scale bar on the lower left corner
            L.control.scale().addTo(map);

            // show a marker on the map
            L.marker({lon: 0, lat: 0}).bindPopup('The center of the world').addTo(map);
        }, 0)
    })


})();
