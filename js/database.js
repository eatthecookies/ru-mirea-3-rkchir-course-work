const cardsData = [
    {
        id: 1,
        title: "Банановый Вихрь",
        cost: 150,
        rate: 4.7,
        category: "фруктовые",
        png: "Банановый Вихрь.png"
    },
    {
        id: 2,
        title: "Шоколадно-ванильный карамельный взрыв",
        cost: 120,
        rate: 4.1,
        category: "шоколадные",
        png: "Шоколадно-ванильный карамельный взрыв.png"
    },
    {
        id: 3,
        title: "Молочное волшебство",
        cost: 200,
        rate: 4.8,
        category: "шоколадные",
        png: "Молочное волшебство.png"
    },
    {
        id: 4,
        title: "Эспрессо-блиц",
        cost: 180,
        rate: 4.4,
        category: "кофейные и ореховые",
        png: "Эспрессо-блиц.png"
    },
    {
        id: 5,
        title: "Французская ваниль",
        cost: 130,
        rate: 4.0,
        category: "кофейные и ореховые",
        png: "Французская ваниль.png"
    },
    {
        id: 6,
        title: "Мятный чип",
        cost: 190,
        rate: 4.6,
        category: "кофейные и ореховые",
        png: "Мятный чип.png"
    },
    {
        id: 7,
        title: "Арахисово-вареньевый сюрприз",
        cost: 210,
        rate: 4.5,
        category: "кофейные и ореховые",
        png: "Арахисово-вареньевый сюрприз.png"
    },
    {
        id: 8,
        title: "Карамель с изюминкой",
        cost: 150,
        rate: 4.3,
        category: "кофейные и ореховые",
        png: "Карамель с изюминкой.png"
    },
    {
        id: 9,
        title: "Земляника в творожной пудре",
        cost: 120,
        rate: 4.0,
        category: "фруктовые",
        png: "Земляника в творожной пудре.png"
    },
    {
        id: 10,
        title: "Ягодная матча",
        cost: 180,
        rate: 4.8,
        category: "фруктовые",
        png: "Ягодная матча.png"
    },
    {
        id: 11,
        title: "Чрезвычайный шоколад",
        cost: 220,
        rate: 4.7,
        category: "шоколадные",
        png: "Чрезвычайный шоколад.png"
    },
    {
        id: 12,
        title: "Цитрусовая ваниль с клубникой",
        cost: 210,
        rate: 4.4,
        category: "фруктовые",
        png: "Цитрусовая ваниль с клубникой.png"
    },
    {
        id: 13,
        title: "Воплощение безумия",
        cost: 250,
        rate: 4.9,
        category: "кофейные и ореховые",
        png: "Воплощение безумия.png"
    }
];

const arrayAsString = JSON.stringify(cardsData);
// Пример данных о товарах
const products = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
};

// Преобразуем объект в строку JSON и сохраняем его в Local Storage
if (localStorage.getItem('productsData') === null)
    localStorage.setItem('productsData', JSON.stringify(products));
