addScript("data.js")
addScript("code.js")

function setDatas() {
    setAllData()
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