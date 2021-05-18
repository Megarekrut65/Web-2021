var basketObj = {
    id: "basket",
    parentDiv: "basketBox",
    count: 40,
    price: 20
}

function testJS() {
    addObjToCookie(basketObj)
}

function addObjToCookie(obj) {
    for (key of Object.keys(obj)) {
        document.cookie = '"' + key + '=' + obj[key] + '"'
    }
}


function getObjFromCookie(obj) {
    var cookie = document.cookie
    var cookies = new Array()
    if (cookie.search(";"))
        cookies = cookie.split(";")
    else cookies.push(cookie)
    for (item of cookies) {
        var splits = item.split('=')
        if (obj[splits[0].trim()]) obj[splits[0].trim()] = splits[1].trim()
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

function load() {

    printObj(getObjFromCookie(basketObj))
}