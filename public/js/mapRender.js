
(function () {

    let noticeTemplate = null;
    let map = null;
    let mapPositionObjects = null;

    function clearMap() {

        map.eachLayer((layer) => {
            if (layer instanceof L.Marker) {
                layer.remove();
            }
        });

        // map._panes.markerPane.remove();
        /*debugger;
        const markers = L.markerClusterGroup();
        markers.clearLayers();*/
    }

    function onDataMapFiltered(filter) {
        console.log("onDataMapFiltered");
        console.log(filter);

        clearMap()

        renderMarkers(mapPositionObjects, filter);
    }

    function isAllowByFilter(mapObject, filter) {
        if (!filter) {
            return true;
        }

        // houseType
        if (filter.housingType !== "any" && mapObject.offer.type && mapObject.offer.type !== filter.housingType ) {
            return false;
        }

        switch (filter.housingPrice) {
            case "any":
                break;
            case "middle":
                if (+mapObject.offer.price > 50_000 || +mapObject.offer.price < 10_000){
                    return false;
                }
                break;
            case "low":
                if (+mapObject.offer.price > 10_000){
                    return false;
                }
                break;
            case "high":
                if (+mapObject.offer.price < 50_000){
                    return false;
                }
                break;
        }

        /*if (filter.housingPrice !== "any" && mapObject.offer.type && mapObject.offer.type !== filter.housingPrice ) {
            return false;
        }*/
        if (filter.housingRooms !== "any" && mapObject.offer.type && mapObject.offer.type !== filter.housingRooms ) {
            return false;
        }
        if (filter.housingGuests !== "any" && mapObject.offer.type && mapObject.offer.type !== filter.housingGuests) {
            return false;
        }


        // wifi
        if (filter.wifi && mapObject.offer.features && mapObject.offer.features.indexOf("wifi") === -1) {
            return false;
        }

        if (filter.washer && mapObject.offer.features && mapObject.offer.features.indexOf("washer") === -1) {
            return false;
        }
        if (filter.parking && mapObject.offer.features && mapObject.offer.features.indexOf("parking") === -1) {
            return false;
        }
        if (filter.dishwasher && mapObject.offer.features && mapObject.offer.features.indexOf("dishwasher") === -1) {
            return false;
        }
        if (filter.elevator && mapObject.offer.features && mapObject.offer.features.indexOf("elevator") === -1) {
            return false;
        }
        if (filter.conditioner && mapObject.offer.features && mapObject.offer.features.indexOf("conditioner") === -1) {
            return false;
        }

        return true;
    }

    function renderMarkers (mapPositionInfo, filter) {
        for (let i = 0; i < mapPositionInfo.dataMapObjects.length; i++) {
            if (!isAllowByFilter(mapPositionInfo.dataMapObjects[i], filter)) {
                continue;
            }

            let features = mapPositionInfo.dataMapObjects[i].offer.features;

            let featureObj;
            if(!features) {
                featureObj = {
                    wifi: false,
                    conditioner:  false,
                    elevator:  false,
                    washer:  false,
                    parking:  false,
                    dishwasher:  false
                };

            }
            else {
                featureObj = {
                    wifi: mapPositionInfo.dataMapObjects[i].offer.features.indexOf("wifi") !== -1,
                    conditioner: mapPositionInfo.dataMapObjects[i].offer.features.indexOf("conditioner") !== -1,
                    elevator: mapPositionInfo.dataMapObjects[i].offer.features.indexOf("elevator") !== -1,
                    washer: mapPositionInfo.dataMapObjects[i].offer.features.indexOf("washer") !== -1,
                    parking: mapPositionInfo.dataMapObjects[i].offer.features.indexOf("parking") !== -1,
                    dishwasher: mapPositionInfo.dataMapObjects[i].offer.features.indexOf("dishwasher") !== -1
                };
            }

            let data = Object.assign({featureObj: featureObj}, mapPositionInfo.dataMapObjects[i]);
            // console.log(data);
            L.marker({
                    lon: mapPositionInfo.dataMapObjects[i].location.lng,
                    lat:mapPositionInfo.dataMapObjects[i].location.lat
                }
            ).bindPopup(noticeTemplate({
                data: data,
            })).addTo(map);
        }
    }

    document.addEventListener("DOMContentLoaded", function () {

        window.dataMapServer
            .then((mapPositionInfo) => {
                mapPositionObjects = mapPositionInfo;
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
                    setTimeout(function () {
                        renderMarkers(mapPositionInfo)
                    }, 100);
                } else {
                    renderMarkers(mapPositionInfo);
                }
            })
    });

    fetch("/template/templates.html", {
        method: "GET"
    }).then(function (resp) {
        return resp.text();
    }).then(function (templates) {
        const doc = new DOMParser().parseFromString(templates, "text/html");

        noticeTemplate = _.template(doc.body.querySelector("#card").innerHTML);
    });

    window.onDataMapFiltered = onDataMapFiltered;
})();
