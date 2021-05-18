var price = 0

function testJS() {
    price += 1
    var url = 'catalog.html?price=' + price
    document.location.href = url;
}

function load() {
    document.getElementById('myP').textContent = 'price'

    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {},
        tmp;
    for (var i = 0, l = params.length; i < l; i++) {
        tmp = params[i].split('=');
        data[tmp[0]] = tmp[1];
    }
    price = data.price;
    document.getElementById('myP').textContent = price

}