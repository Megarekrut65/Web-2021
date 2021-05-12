function setDate(id) {

    let date = new Date()
    let wDay = date.getDay()
    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()
    let seconds = date.getSeconds()
    let minuts = date.getMinutes()
    let hours = date.getHours()
    res = "Сьогодні " + day + " " + createMonthString(month) + ", " +
        createWeekDayString(wDay) + " " + year + " року, час " +
        hours + ":" + minuts + ":" + seconds
    var paragraf = document.getElementById(id)
    paragraf.textContent = res
}

function createMonthString(month) {
    let monthes = new Array("січня", "лютого", "березеня", "квітня", "травня",
        "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня");
    return monthes[month]
}

function createWeekDayString(wDay) {
    let wDays = new Array("понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота", "неділя")
    return wDays[wDay - 1]
}

function getObj(obj, key, value) {
    if (!obj) obj = { key: value }
    if (!obj[key]) obj[key] = value
    return obj;
}

function printObj(obj) {
    var res = ""
    for (let filed in obj)
        res += filed + ": " + obj[filed] + " "
    alert(res)
}

function objects() {
    let obj1 = getObj({ name: 'Alex' }, 'name', 'Mark')
    printObj(obj1)
    let obj2 = getObj(obj1, "age", 17)
    printObj(obj2)
}