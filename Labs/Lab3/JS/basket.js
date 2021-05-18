addScript("data.js")
addScript("code.js")

function setOrders() {
    setAllData()
    createOrders()
}

function createOrders() {
    var basketBox = document.getElementById("basketBox")
    var resDiv = setResult(basketBox)
    for (item of boutghClothes) {
        if (item.clotheCount > 0) {
            var clothe = clothesList[item.indexInList]
            basketBox.appendChild(createOrder(item, clothe))
            basketCount += Number(item.clotheCount)
            basketResult += countSum(item, clothe)
        }
    }
    editResult(resDiv, basketCount, basketResult)
}

function setResult(basketBox) {
    var div = createDiv("", "priceSum")
    basketBox.appendChild(div)
    return div
}

function editResult(resDiv, count, sum) {
    resDiv.textContent = createSumText(sum, count)
}

function createSumText(sum, count) {
    var ones = "одиниць"
    if (count < 10 || count > 19) {
        if (count % 10 == 1) ones = "одиниця"
        if (count % 10 >= 2 && count % 10 <= 4) ones = "одиниці"
    }
    return "Всього " + count + " " + ones + " товару на суму " + sum + "$"
}

function createOrder(order, clothe) {
    var parentDiv = createDiv("basket-item-box", clothe.id + "basketParentId")
    var img = createImg(clothe.image, clothe.id, "basket-image")
    var textDiv = createDiv("basket-text", clothe.id + "-textDiv")
    textDiv.textContent = clothe.name
    var priceDiv = createDiv("basket-text", clothe.id + "-priceDiv")
    priceDiv.textContent = setPrice(order, clothe)
    parentDiv.appendChild(img)
    parentDiv.appendChild(textDiv)
    parentDiv.appendChild(createBtns(item.clotheCount, order, clothe, priceDiv.id))
    parentDiv.appendChild(priceDiv)
    return parentDiv
}

function setPrice(item, clothe) {

    return "Сума: " + countSum(item, clothe) + "$"
}

function countSum(item, clothe) {
    return item.clotheCount * clothe.price
}

function createBtns(availability, item, clothe, priceId) {
    var btnsDiv = createDiv("basket-btns", clothe.id + "-btnsDiv")
    let minusDiv = createDiv("basket-btn btn-red", clothe.id + allId.minusBtn)
    minusDiv.textContent = "-"
    let funcMinus = function() {
        minus(clothe, item, clothe.id + allId.availability, priceId)
        return false
    }
    minusDiv.addEventListener('click', funcMinus, false)
    let availabilityDiv = createDiv("basket-btn", clothe.id + allId.availability)
    availabilityDiv.textContent = availability
    let plusDiv = createDiv("basket-btn btn-green", clothe.id + allId.plusBtn)
    plusDiv.textContent = "+"
    let funcPlus = function() {
        plus(clothe, item, clothe.id + allId.availability, priceId)
        return false
    }
    plusDiv.addEventListener('click', funcPlus, false)
    btnsDiv.appendChild(minusDiv)
    btnsDiv.appendChild(availabilityDiv)
    btnsDiv.appendChild(plusDiv)
    return btnsDiv
}

function minus(clothe, item, id, priceId) {
    if (item.clotheCount <= 0) return
    basketObj.count = Number(basketObj.count) - 1
    basketObj.price = Number(basketObj.price) - clothe.price
    addObjToCookie(basketObj)
    item.clotheCount = Number(item.clotheCount) - 1
    clothe.remained = Number(clothe.remained) + 1
    addBouthgClothes()
    setBasketCount()
    document.getElementById(id).textContent = item.clotheCount
    document.getElementById(priceId).textContent = setPrice(item, clothe)
    basketCount -= 1
    basketResult -= clothe.price
    editResult(document.getElementById("priceSum"),
        basketCount, basketResult)
}

function plus(clothe, item, id, priceId) {
    if (clothe.remained <= 0) return
    basketObj.count = Number(basketObj.count) + 1
    basketObj.price = Number(basketObj.price) + clothe.price
    addObjToCookie(basketObj)
    item.clotheCount = Number(item.clotheCount) + 1
    clothe.remained = Number(clothe.remained) - 1
    addBouthgClothes()
    setBasketCount()
    document.getElementById(id).textContent = item.clotheCount
    document.getElementById(priceId).textContent = setPrice(item, clothe)
    basketCount += 1
    basketResult += clothe.price
    editResult(document.getElementById("priceSum"),
        basketCount, basketResult)
}