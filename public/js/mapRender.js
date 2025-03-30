
(function () {

    let noticeTemplate = null;
    let map = null;

    function renderMarkers () {
        for (let i = 0; i < mapPositionInfo.dataMapObjects.length; i++) {
            const featureObj = {
                wifi: mapPositionInfo.dataMapObjects[i].offer.features.indexOf("wifi") !== -1,
                conditioner: mapPositionInfo.dataMapObjects[i].offer.features.indexOf("conditioner") !== -1,
                elevator: mapPositionInfo.dataMapObjects[i].offer.features.indexOf("elevator") !== -1,
                washer: mapPositionInfo.dataMapObjects[i].offer.features.indexOf("washer") !== -1,
                parking: mapPositionInfo.dataMapObjects[i].offer.features.indexOf("parking") !== -1,
                dishwasher: mapPositionInfo.dataMapObjects[i].offer.features.indexOf("dishwasher") !== -1
            };

            let data = Object.assign({featureObj: featureObj}, mapPositionInfo.dataMapObjects[i]);
            console.log(data);
            L.marker({
                    lon: mapPositionInfo.dataMapObjects[i].location.x,
                    lat:mapPositionInfo.dataMapObjects[i].location.y
                }
            ).bindPopup(noticeTemplate({
                data: data,
            })).addTo(map);
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(function () {
            console.log(mapPositionInfo);

            let mapCanvas = document.getElementById("map-canvas");
            if (!mapCanvas) {
                console.log("not mapCanvas");
            }
            // центральная точка на карте
            map = L.map('map-canvas').setView({
                    lon: mapPositionInfo.mapPositionInfo.centerLon,
                    lat:mapPositionInfo.mapPositionInfo.centerLat},
                12);

            // add the OpenStreetMap tiles реклама, без которой карта не будет работать
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
            }).addTo(map);

            // show the scale bar on the lower left corner
            L.control.scale().addTo(map);

            //отрисовка маркеров объектов недвижимости на карте
            if (!noticeTemplate) {
                setTimeout(renderMarkers, 100);
            } else {
                renderMarkers();
            }


        }, 0)
    });

    fetch("/template/templates.html", {
        method: "GET"
    }).then(function (resp) {
        return resp.text();
    }).then(function (templates) {
        const doc = new DOMParser().parseFromString(templates, "text/html");

        noticeTemplate = _.template(doc.body.querySelector("#card").innerHTML);
    });


})();
