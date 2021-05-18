var price = "<?php echo addslashes($_POST['price']); ?>";

function testJS() {
    price += 1
}

function load() {
    document.getElementById('myP').textContent = price

}