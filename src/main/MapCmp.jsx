import * as React from 'react';
import mapPositionInfo from "../utils/data";


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
                <div className="map__filters-container">
                    <form action="#" className="map__filters" autoComplete="off">
                        <select name="housing-type" id="housing-type" className="map__filter">
                            <option value="any" selected>Любой тип жилья</option>
                            <option value="palace">Дворец</option>
                            <option value="flat">Квартира</option>
                            <option value="house">Дом</option>
                            <option value="bungalow">Бунгало</option>
                        </select>
                        <select name="housing-price" id="housing-price" className="map__filter">
                            <option value="any" selected>Любая</option>
                            <option value="middle">10000 - 50000&#x20bd;</option>
                            <option value="low">до 10000&#x20bd;</option>
                            <option value="high">от 50000&#x20bd;</option>
                        </select>
                        <select name="housing-rooms" id="housing-rooms" className="map__filter">
                            <option value="any" selected>Любое число комнат</option>
                            <option value="1">Одна комната</option>
                            <option value="2">Две комнаты</option>
                            <option value="3">Три комнаты</option>
                        </select>
                        <select name="housing-guests" id="housing-guests" className="map__filter">
                            <option value="any" selected>Любое число гостей</option>
                            <option value="2">Два гостя</option>
                            <option value="1">Один гость</option>
                            <option value="0">Не для гостей</option>
                        </select>
                        <fieldset id="housing-features" className="map__features">
                            <input type="checkbox" name="features" value="wifi" id="filter-wifi"
                                   className="map__checkbox visually-hidden"/>
                            <label className="map__feature map__feature--wifi" htmlFor="filter-wifi">Wi-Fi</label>
                            <input type="checkbox" name="features" value="dishwasher" id="filter-dishwasher"
                                   className="map__checkbox visually-hidden"/>
                            <label className="map__feature map__feature--dishwasher" htmlFor="filter-dishwasher">Посудомоечная
                                машина</label>
                            <input type="checkbox" name="features" value="parking" id="filter-parking"
                                   className="map__checkbox visually-hidden"/>
                            <label className="map__feature map__feature--parking" htmlFor="filter-parking">Парковка</label>
                            <input type="checkbox" name="features" value="washer" id="filter-washer"
                                   className="map__checkbox visually-hidden"/>
                            <label className="map__feature map__feature--washer" htmlFor="filter-washer">Стиральная машина</label>
                            <input type="checkbox" name="features" value="elevator" id="filter-elevator"
                                   className="map__checkbox visually-hidden"/>
                            <label className="map__feature map__feature--elevator" htmlFor="filter-elevator">Лифт</label>
                            <input type="checkbox" name="features" value="conditioner" id="filter-conditioner"
                                   className="map__checkbox visually-hidden"/>
                            <label className="map__feature map__feature--conditioner" htmlFor="filter-conditioner">Кондиционер</label>
                        </fieldset>
                    </form>
                </div>
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