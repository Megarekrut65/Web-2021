addScript("data.js")

function addObjToCookie(obj, idAdd = '') {
    for (key of Object.keys(obj)) {
        document.cookie = idAdd + key + '=' + obj[key]
    }
}

function getObjFromCookie(obj, idAdd = '') {
    var cookie = document.cookie
    var cookies = new Array()
    if (cookie.search(";"))
        cookies = cookie.split(";")
    else return obj
    var keys = Object.keys(obj),
        i = 0
    for (item of cookies) {
        var splits = item.split('=')
        if (splits[0].search(idAdd + keys[i]) >= 0) {
            obj[keys[i]] = splits[1]
            i += 1
        }
    }
    return obj
}

function printObj(obj) {
    var res = ""
    for (key of Object.keys(obj)) {
        res += key + "=" + obj[key] + "; "
    }
    alert(res)
}

function setBasketCount() {
    basketObj = getObjFromCookie(basketObj)
    var basketLi = document.getElementById(basketObj.id)
    basketLi.textContent = "Кошик(" + basketObj.count + ")"
}

function setBoutghClothes() {
    for (var i = 0; i < clothesList.length; i++) {
        var item = {}
        item.indexInList = i
        item.clotheCount = 0
        boutghClothes.push(item)
    }
}

function editeClothesList() {
    for (item of boutghClothes)
        clothesList[item.indexInList].remained -= item.clotheCount
}

function getBoutghClothes() {
    for (item of boutghClothes) {
        item = getObjFromCookie(item, clothesList[item.indexInList].id)
    }
}

function addBouthgClothes() {
    for (item of boutghClothes) {
        addObjToCookie(item, clothesList[item.indexInList].id)
    }
}

function setDatas() {
    setBasketCount()
    for (var i = 0; i < clothesList.length; i++) {
        var clothe = clothesList[i]
        clothe.selected = false
        clothe.count = 0
        clothe.remained = 15
        clothe.id = "clothe" + i
    }
    setBoutghClothes()
    getBoutghClothes()
    editeClothesList()
    createAllClothes()
    return false
}

function createAllClothes() {
    var allClothes = document.getElementById(allClothesId)
    for (item of boutghClothes) {
        allClothes.appendChild(createClotheBox(clothesList[item.indexInList], item))
    }
}

function buyClothe(clothe, item) {
    if (clothe.remained <= 0) return
    basketObj.count = Number(basketObj.count) + 1
    basketObj.price = Number(basketObj.price) + clothe.price
    addObjToCookie(basketObj)
    item.clotheCount = Number(item.clotheCount) + 1
    clothe.remained = Number(clothe.remained) - 1
    addBouthgClothes()
    setBasketCount()
    var availabilityDiv = document.getElementById(clothe.id + allId.availability)
    availabilityDiv.textContent = "В наявності: " + clothe.remained
}

function createClotheBox(clothe, item) {
    var parentDiv = createDiv("clothes-box", clothe.id + allId.parentDiv)
    let img = createImg(clothe.image, clothe.id, "clothes-image")
    var infoDiv = createDiv("clothes-info", clothe.id + "-infoDiv")
    var textDiv = createDiv("clothes-text", clothe.id + "-textDiv")
    textDiv.textContent = clothe.name
    var buyDiv = createDiv("clothes-buy", clothe.id + "-buyDiv")
    var availabilityDiv = createDiv("clothes-availability", clothe.id + allId.availability)
    availabilityDiv.textContent = "В наявності: " + clothe.remained
    var btnDiv = createDiv("clothes-button", clothe.id + allClothesId.buyBtn)
    var func = function() { buyClothe(clothe, item); return false }
    btnDiv.addEventListener('click', func, false)
    btnDiv.textContent = "Купити"
    var pricePar = createParagraf(clothe.price + "$")
    parentDiv.appendChild(img)
    infoDiv.appendChild(textDiv)
    buyDiv.appendChild(availabilityDiv)
    buyDiv.appendChild(btnDiv)
    infoDiv.appendChild(pricePar)
    infoDiv.appendChild(buyDiv)
    parentDiv.appendChild(infoDiv)
    return parentDiv
}

function createImg(src, alt, className) {
    let img = document.createElement('img');
    img.className = className
    img.src = src
    img.alt = alt
    return img
}

function createParagraf(text) {
    var p = document.createElement('p');
    p.textContent = text
    return p
}

function createH(text, number) {
    let h = document.createElement('h' + number);
    h.textContent = text
    return h
}

function createButton(text, func, value, id) {
    let btn = document.createElement('button');
    btn.onclick = function() { func(value); return false }
    btn.textContent = text
    btn.value = 10
    btn.id = id
    return btn
}

function createDiv(className, id) {
    var div = document.createElement('div');
    div.className = className
    div.id = id
    return div
}