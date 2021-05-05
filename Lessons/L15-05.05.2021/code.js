function plus() {
    var input1 = document.getElementById('first')
    var input2 = document.getElementById('second')
    if (checkTypes(input1.value, input2.value)) {
        var res = document.getElementById('res')
        res.value = +input1.value + +input2.value
    }
}

function minus() {
    var input1 = document.getElementById('first')
    var input2 = document.getElementById('second')
    if (checkTypes(input1.value, input2.value)) {
        var res = document.getElementById('res')
        res.value = +input1.value - +input2.value
    }
}

function isNumber(value) {
    return !isNaN(value)
}

function checkTypes(value1, value2) {
    if (isNumber(value1) && isNumber(value2))
        return true
    alert("Incorrect data!")
    return false
}

function setClick(id, operation) {
    document.getElementById(id).addEventListener('click', operation, false)
}

function setBtns() {
    setClick('btnPlus', plus)
    setClick('btnMinus', minus)
}