addScript("data.js")

function addCountToBooks() {
    for (item of books)
        item.count = 0
}

function setBooks() {
    addCountToBooks()
    var select = document.getElementById(selectID)
    for (var i = 0; i < books.length; i++)
        addOptionToSelect(select, books[i].name + " - " + books[i].price, i)
}

function addOptionToSelect(select, text, value) {
    var option = document.createElement('option')
    option.value = value;
    option.innerHTML = text;
    select.appendChild(option)
}

function selectBook() {
    let index = document.getElementById(selectID).selectedIndex
    if (index < 0) return
    selectedBookIndex = index
    editCount()
    setPrice()
}

function setPrice() {
    var price = document.getElementById(priceID)
    var countP = countPrice()
    if (countP > 0) countP = countP.toFixed(2)
    price.value = countP
}

function countPrice() {
    if (books[selectedBookIndex].count == 0) return ""
    return books[selectedBookIndex].count * books[selectedBookIndex].price
}

function editCount() {
    if (selectedBookIndex < 0) return
    var input = document.getElementById(countID)
    input.value = books[selectedBookIndex].count
}

function getCount() {
    if (selectedBookIndex < 0) return
    let input = document.getElementById(countID)
    books[selectedBookIndex].count = Number(input.value)
    setPrice()
}

function setResultPrice() {
    document.getElementById(resultPriceID).value = countDelivery(countResPrice()).toFixed(2);
}

function countResPrice() {
    var res = 0
    for (item of books)
        res += item.count * item.price
    return Number(res.toFixed(2))
}

function countDelivery(price) {
    var res = price,
        delivery = 0
    if (document.getElementById("radioPost").checked) {
        delivery = res * 0.05
        res *= 1.05
    } else if (document.getElementById("radioHome").checked) {
        delivery = res * 0.15
        res *= 1.15
    }
    if (document.getElementById("checkPack").checked) res += delivery * 0.1
    return Number(res.toFixed(2))
}

function clearCount() {
    var resDiv = document.getElementById("resDiv")
    resDiv.innerHTML = ''
    makeInputsNotmal()
    document.getElementById("myForm").reset()
    for (item of books)
        item.count = 0
}

function checkData() {
    makeInputsNotmal()
    var name = document.getElementById("inputName")
    if (name.value == "") {
        name.style.background = "red"
        return false
    }
    var address = document.getElementById("inputAddress")
    if (address.value == "") {
        address.style.background = "red"
        return false
    }
    return true
}

function makeInputsNotmal() {
    var name = document.getElementById("inputName")
    name.style.background = "white"
    var address = document.getElementById("inputAddress")
    address.style.background = "white"
}

function createOrder() {
    if (checkData() == false) return
    var resDiv = document.getElementById("resDiv")
    resDiv.innerHTML = ''
    resDiv.appendChild(createH("Замовлення", 1))
    resDiv.appendChild(createH("Обрані книги", 3))
    createBookTable(resDiv)
    resDiv.appendChild(createH("Оплата", 3))
    createPriceTable(resDiv)
}

function createTableItem(items, background) {
    var tr = document.createElement('tr')
    tr.style.background = background
    for (item of items) {
        var td = document.createElement('td')
        td.textContent = item
        td.className = "my-padding"
        tr.appendChild(td)
    }
    return tr
}

function createH(text, number) {
    let h = document.createElement('h' + number);
    h.textContent = text
    return h
}

function createPriceTable(resDiv) {
    var table = document.createElement('table')
    setTableStyles(table)
    var tbody = document.createElement('tbody');
    let price = countResPrice()
    tbody.appendChild(createTableItem(["Без урахування доставки і упаковки", price], bck1))
    tbody.appendChild(createTableItem(["Доставка і упаковка", (countDelivery(price) - price).toFixed(2)], bck2))
    tbody.appendChild(createTableItem(["Всього до оплати", countDelivery(price)], bck3))
    table.appendChild(tbody)
    resDiv.appendChild(table)
}

function setTableStyles(table) {
    table.style.border = "1px solid black"
    table.style.borderCollapse = "collapse";
    table.style.fontSize = "20px"
}

function createBookTable(resDiv) {
    var table = document.createElement('table')
    table.appendChild(createTableItem(["Назва", "Ціна", "Кількість", "Загальна ціна"], bck3))
    setTableStyles(table)
    var tbody = document.createElement('tbody');
    var even = false
    var bck = bck1
    var count = 0
    for (item of books) {
        if (item.count > 0) {
            count += item.count
            tbody.appendChild(createTableItem([item.name, item.price, item.count, (item.price * item.count).toFixed(2)], bck))
            if (even) {
                even = false
                bck = bck1
            } else {
                even = true
                bck = bck2
            }
        }
    }
    tbody.appendChild(createTableItem(["Загалом", "", count, countResPrice()], bck3))
    table.appendChild(tbody)
    resDiv.appendChild(table)
}