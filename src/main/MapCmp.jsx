import * as React from 'react';
import mapPositionInfo from "../utils/data";
import FormaSearch from "../FormaSearch";


class MapCmp extends React.Component {
    wasRender = false;

    map = null;
    position = {
        lat: 0,
        lon: 0
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (!this.wasRender) {
            console.log("this.wasRender: " + this.wasRender);
            return true;
        }

        return false;
    }

    render() {

        // console.log(mapPositionInfo.dataMapobjects);
        console.log(this.wasRender);
        this.wasRender = true;

        return (
            <section className="map">

                {/*Блок для вставки карты*/}
                <div className="map__canvas" id="map-canvas"></div>

                {/*Фильтрация объявлений*/}
                <FormaSearch/>
            </section>
        );
    }

    componentDidMount() {
       /*setTimeout(function () {
           if (this.map === null) {
               this.map = window.L.map('map-canvas').setView(this.position, 15)
           } else {
               // перемещение к следующей позиции
               return;
           }

           window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
               attribution:
                   '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
           }).addTo(this.map)
       }, 1000)*/
    }
}

export default MapCmp;