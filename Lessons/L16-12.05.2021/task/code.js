addScript("data.js")

function editBasket() {
    let basket = document.getElementById(basketID)
    basket.textContent = "Tickets: " + ticket.count +
        " price: " + ticket.price + "$";
}

function addCountries() {
    editBasket()
    let select = document.getElementById(selectID)
    for (var i = 0; i < countriesList.length; i++)
        addOptionToSelect(select, countriesList[i].name, i)
}

function addOptionToSelect(select, text, value) {
    var option = document.createElement('option')
    option.value = value;
    option.innerHTML = text;
    select.appendChild(option)
}

function hideInfo() {
    let div = document.getElementById(mainDivId)
    div.innerHTML = ''
}

function addCountryInfo() {
    let select = document.getElementById(selectID)
    let index = select.selectedIndex
    if (index < 0) return
    hideInfo()
    if (index == 0) return
    let name = select.options[index].text;
    let country = countriesList.find(function(element) { return element.name == name })
    setData(country)
}

function setData(country) {
    let div = document.getElementById(mainDivId)
    div.appendChild(createImg(country.flag, country.name, 'flag-img'))
    div.appendChild(createH(country.name, '1'))
    let row = createDiv('div-row')
    div.appendChild(row)
    setLandmark(country, row)
}

function setLandmark(country, divParent) {
    for (var land of country.landmark) {
        let div = createDiv('div-column')
        divParent.appendChild(div)
        div.appendChild(createImg(land.img, land.title, 'landmark-img'))
        div.appendChild(createH(land.title, '2'))
        div.appendChild(createParagraf(land.text))
        div.appendChild(createParagraf("Ticket cost " + land.price + " $"))
        div.appendChild(createButton("Buy ticket", buyTicket, land.price))
    }
}

function createDiv(className) {
    var div = document.createElement('div');
    div.className = className
    return div
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

function createImg(src, alt, className) {
    let img = document.createElement('img');
    img.className = className
    img.src = src
    img.alt = alt
    return img
}

function buyTicket(price) {
    ticket.count += 1
    ticket.price += price
    editBasket()
    return false
}

function createButton(text, func, value) {
    let btn = document.createElement('button');
    btn.onclick = function() { func(value); return false }
    btn.textContent = text
    btn.value = 10
    return btn
}