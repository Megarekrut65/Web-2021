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

function setLists() {
    for (var i = 0; i < clothesList.length; i++) {
        var clothe = clothesList[i]
        clothe.selected = false
        clothe.count = 0
        clothe.remained = 15
        clothe.id = "clothe" + i
    }
}

function setAllData() {
    setBasketCount()
    setLists()
    setBoutghClothes()
    getBoutghClothes()
    editeClothesList()
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