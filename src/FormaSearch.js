import * as React from 'react';


class FormaSearch extends React.Component {

    constructor() {
        super();

        this.filter = {
            housingType: "any",
            housingPrice:  "any",
            housingRooms:  "any",
            housingGuests:  "any",
            wifi: false,
            dishwasher: false,
            parking: false,
            washer: false,
            elevator: false,
            conditioner: false
        };
    }

    updateMapFiltration(filter) {
        window.onDataMapFiltered(filter);
    }

    onChangeHousingType(evt) {
        this.filter = Object.assign(this.filter, {
            housingType: evt.target.value
        });

        this.updateMapFiltration(this.filter);

        this.setState(this.filter);
    }

    onChangeHousingPrice(evt) {
        this.filter = Object.assign(this.filter, {
            housingPrice: evt.target.value
        });

        this.updateMapFiltration(this.filter);
        this.setState(this.filter);
    }

    onChangeHousingRooms(evt) {
        this.filter = Object.assign(this.filter, {
            housingRooms: evt.target.value
        });

        this.updateMapFiltration(this.filter);
        this.setState(this.filter);
    }
    onChangeHousingGuests(evt) {
        this.filter = Object.assign(this.filter, {
            housingGuests: evt.target.value
        });

        this.updateMapFiltration(this.filter);
        this.setState(this.filter);
    }

    onChangeWifi(evt) {
        const currentWifi = this.filter.wifi;
        this.filter = Object.assign(this.filter, {
            wifi: !currentWifi
        });

        this.updateMapFiltration(this.filter);
    }

    onChangeDishwasher(evt) {
        const currentDishwasher = this.filter.dishwasher;

        this.filter = Object.assign(this.filter, {
            dishwasher: !currentDishwasher
        });

        this.updateMapFiltration(this.filter);
    }

    onChangeParking(evt) {
        const currentParking = this.filter.parking;

        this.filter = Object.assign(this.filter, {
            parking: !currentParking
        });

        this.updateMapFiltration(this.filter);
    }

    onChangeWasher(evt) {
        const currentWasher = this.filter.washer;

        this.filter = Object.assign(this.filter, {
            washer: !currentWasher
        });

        this.updateMapFiltration(this.filter);
    }

    onChangeElevator(evt) {
        const currentElevator = this.filter.elevator;

        this.filter = Object.assign(this.filter, {
            elevator: !currentElevator
        });

        this.updateMapFiltration(this.filter);
    }

    onChangeConditioner(evt) {
        const currentConditioner = this.filter.conditioner;

        this.filter = Object.assign(this.filter, {
            conditioner: !currentConditioner
        });

        this.updateMapFiltration(this.filter);
    }


   render() {
        const self = this;

        const wifiChange = function (evt) {
            console.log("wifiChange");
            return self.onChangeWifi.call(self, evt);
        }

        const dishwasherChange = function (evt) {
            return self.onChangeDishwasher.call(self, evt);
        }

       const parkingChange = function (evt) {
           return self.onChangeParking.call(self, evt);
       }

       const washerChange = function (evt) {
           return self.onChangeWasher.call(self, evt);
       }

       const elevatorChange = function (evt) {
           return self.onChangeElevator.call(self, evt);
       }

       const conditionerChange = function (evt) {
           return self.onChangeConditioner.call(self, evt);
       }


        return (
            <div className="map__filters-container">
                <form action="#" className="map__filters" autoComplete="off">
                    <select onChange={function (evt) {
                        return self.onChangeHousingType.call(self, evt);
                    }}
                            name="housing-type"
                            id="housing-type"
                            className="map__filter"
                            value={this.filter.housingType}
                    >
                        <option value="any" selected>Любой тип жилья</option>
                        <option value="palace">Дворец</option>
                        <option value="flat">Квартира</option>
                        <option value="house">Дом</option>
                        <option value="bungalow">Бунгало</option>
                    </select>



                    <select onChange={function (evt) {
                        return self.onChangeHousingPrice.call(self, evt);
                    }}
                            value={this.filter.housingPrice}
                        name="housing-price" id="housing-price" className="map__filter">
                        <option value="any" selected>Любая</option>
                        <option value="middle">10000 - 50000&#x20bd;</option>
                        <option value="low">до 10000&#x20bd;</option>
                        <option value="high">от 50000&#x20bd;</option>
                    </select>



                    <select onChange={function (evt) {
                        return self.onChangeHousingRooms.call(self, evt);
                    }}
                            value={this.filter.housingRooms}
                        name="housing-rooms" id="housing-rooms" className="map__filter">
                        <option value="any" selected>Любое число комнат</option>
                        <option value="1">Одна комната</option>
                        <option value="2">Две комнаты</option>
                        <option value="3">Три комнаты</option>
                    </select>


                    <select onChange={function (evt) {
                        return self.onChangeHousingGuests.call(self, evt);
                    }}
                            value={this.filter.housingGuests}
                        name="housing-guests" id="housing-guests" className="map__filter">
                        <option value="any" selected>Любое число гостей</option>
                        <option value="2">Два гостя</option>
                        <option value="1">Один гость</option>
                        <option value="0">Не для гостей</option>
                    </select>

   {/*_____________________________________________________________*/}
                    <fieldset id="housing-features" className="map__features">

                        <input onChange={wifiChange} type="checkbox" name="filter-wifi" value="wifi" id="filter-wifi"
                               className="map__checkbox visually-hidden" />
                        <label htmlFor="filter-wifi" className="map__feature map__feature--wifi"
                               htmlFor="filter-wifi">Wi-Fi</label>
                        <input onChange={dishwasherChange} type="checkbox" name="filter-dishwasher" value="dishwasher" id="filter-dishwasher"
                               className="map__checkbox visually-hidden"/>
                        <label htmlFor="filter-dishwasher" className="map__feature map__feature--dishwasher"
                               htmlFor="filter-dishwasher">Посудомоечная
                            машина</label>
                        <input onChange={parkingChange} type="checkbox" name="ilter-parking" value="parking" id="filter-parking"
                               className="map__checkbox visually-hidden"/>
                        <label htmlFor="filter-parking" className="map__feature map__feature--parking"
                               htmlFor="filter-parking">Парковка</label>
                        <input onChange={washerChange} type="checkbox" name="ilter-washer" value="washer" id="filter-washer"
                               className="map__checkbox visually-hidden"/>
                        <label htmlFor="filter-washer" className="map__feature map__feature--washer"
                               htmlFor="filter-washer">Стиральная машина</label>
                        <input  onChange={elevatorChange} type="checkbox" name="filter-elevator" value="elevator" id="filter-elevator"
                               className="map__checkbox visually-hidden"/>
                        <label htmlFor="filter-elevator" className="map__feature map__feature--elevator"
                               htmlFor="filter-elevator">Лифт</label>
                        <input onChange={conditionerChange} type="checkbox" name="filter-conditioner" value="conditioner" id="filter-conditioner"
                               className="map__checkbox visually-hidden"/>
                        <label for="filter-conditioner" className="map__feature map__feature--conditioner" htmlFor="filter-conditioner">Кондиционер</label>
                    </fieldset>
                </form>
            </div>
        );
   }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
       return true;
    }





}

export default FormaSearch;