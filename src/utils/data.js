
const getRandomNumber = (min, max, roundNumber) => {
    if (min < 0 || max < 0) {
    return -1;
    }
    if (min > max) {
        const newMin = min;
        min = max;
        max = newMin;
    }
    return (Math.random() * (max - min) + min).toFixed(roundNumber)
}

const getRandomInt = function (min, max) {
    if (min < 0 || max < 0) {
        throw new Error("Не верные параметры для случайного числа")
    }

    if (max < min) {
        [min, max] = [max, min]
    };

    return Math.floor(Math.random()* (max-min+1)) + min;
}

const avatarOptions = [
    "default.png",
    "user01.png",
    "user02.png",
    "user03.png",
    "user04.png",
    "user05.png",
    "user06.png",
    "user07.png",
    "user08.png"
];

const title = [
    "Двушка с прекрасным видом",
    "Студия в стиле лофт",
    "Квартира с двумя спальнями",
    "Студия на двоих",
    "Трешка с панорамными окнами",
    "Комната у метро"
];

const type = [
    'palace',
    'flat',
    'house',
    'hotel',
    'bungalow'
];

const checkin = [
    '12:00',
    '13:00',
    '14:00'
];

const checkout = [
    '12:00',
    '13:00',
    '14:00'
];

const features = [
    "wifi",
    "dishwasher",
    "parking",
    "washer",
    "elevator",
    "conditioner"
];

const description = [
    "Наслаждайтесь прекрасным видом на парк с фонтанами",
    "Можно проживать с домашним животным",
    "Квартира в центре города",
    "Квартира в тихом месте с окнами во двор",
    "На цокольном этаже супермаркет, бассейн и финтес зал"
];

const photos = [
    "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
    "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
    "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
];

const generateMapobject = () => {

    const x = getRandomNumber(35.65000, 35.70000, 7);
    const y = getRandomNumber(139.70000, 139.80000, 7);

    return {
        author: {
            avatar: avatarOptions[getRandomNumber(0, 8, 0)] ,
        },
        offer: {
            title: title[getRandomNumber(0, 5), 0],
            address: "[" + x + ", " + y + "]",
            price: getRandomNumber(1000, 500000, 0),
            type: type[getRandomNumber(0, 4, ), 0],
            rooms: getRandomNumber(1, 4, 0),
            guests: getRandomNumber(1, 10, 0),
            checkin: checkin[getRandomNumber(0, 3), 0],
            checkout: checkout[getRandomNumber(0, 3), 0],
            features: features [getRandomNumber(1, 5, 0)],
            description: description[getRandomInt(0, description.length)],
            photos: photos[getRandomInt(0, photos.length)]
        },
        location: {
            x: x,
            y: y
        }
    }
}

const  author = function () {
    const result = [];

    const mapObject = generateMapobject();

    result.push(mapObject);

    return result;
}

const dataMapobject = generateMapobject();

export default dataMapobject;