let clotheObj = {
    name: "",
    price: 100, //$
    image: "",
    selected: false, //is bought by customer
    count: 0, //number of bought items by customer
    remained: 15 //is in stock
}
var clothesList = [{
        name: 'Пальто "Зірка"',
        price: 543,
        image: "../Images/clothe1.png"
    },
    {
        name: 'Куртка "Зоря"',
        price: 164,
        image: "../Images/clothe2.png"
    },
    {
        name: 'Блузка "Арчі"',
        price: 397,
        image: "../Images/clothe3.png"
    },
    {
        name: 'Носки "Весна"',
        price: 312,
        image: "../Images/clothe4.png"
    },
    {
        name: 'Зимній набір',
        price: 652,
        image: "../Images/clothe5.png"
    },
    {
        name: 'Весняне плаття',
        price: 872,
        image: "../Images/clothe6.png"
    }
]
let allClothesId = "allClothes"
let allId = {
    parentDiv: "-parentDiv",
    buyBtn: "-buyBtn",
    availability: "-availability",
    minusBtn: "-minusBtn",
    plusBtn: "-plusBtn"
}
var basketObj = {
    id: "basket",
    parentDiv: "basketBox",
    count: 0,
    price: 0
}
var boutghClothes = new Array()
var basketCount = 0,
    basketResult = 0