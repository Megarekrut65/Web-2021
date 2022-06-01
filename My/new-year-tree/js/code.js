let index = 0

function createToy(parentId, left, top, size) {
    let parent = document.getElementById(parentId)
    let toy = document.createElement("div")
    parent.appendChild(toy)
    index++
    toy.id = "toy" + index
    toy.className = "toy"
    toy.style.left = left
    toy.style.top = top
    toy.style.width = size
    toy.style.height = size
    return toy
}
let state = 0
let toys
let audio
window.onload = function() {
    let size = '4vh'
    let parent = 'container'
    toys = [
        createToy(parent, '50%', '18%', size),
        createToy(parent, '45%', '25%', size),
        createToy(parent, '55%', '30%', size),
        createToy(parent, '48%', '35%', size),
        createToy(parent, '59%', '40%', size),
        createToy(parent, '40%', '43%', size),
        createToy(parent, '50%', '50%', size),
        createToy(parent, '33%', '58%', size),
        createToy(parent, '60%', '60%', size),
        createToy(parent, '45%', '65%', size),
        createToy(parent, '20%', '74%', size),
        createToy(parent, '35%', '71%', size),
        createToy(parent, '49%', '73%', size),
        createToy(parent, '60%', '71%', size),
        createToy(parent, '70%', '75%', size)
    ]
    audio = new Audio('../music/Bobby_Helms_-_Jingle_Bells_Rock_(musmore.com).mp3');
}
let intervals;

function nextState() {
    state++
    closeIntervals()
    switch (state) {
        case 1:
            audio.play()
            intervals = oneColor(toys, 300)
            break
        case 2:
            intervals = oneColorDark(toys, 100)
            break
        case 3:
            intervals = manyColors(toys, 500)
            break
        case 4:
            intervals = sequenceColor(toys, 200)
            break
        case 5:
            intervals = twoPartsColors(toys, 1000)
            break
        default:
            state = 0
            toys.forEach(element => {
                element.style.backgroundColor = "black"
            })
            audio.pause();
            audio.currentTime = 0;
    }
}

function closeIntervals() {
    if (intervals === undefined || intervals === null) return
    intervals.forEach(element => {
        clearInterval(element)
    })
}

function oneColor(toys, time) {
    let intervals = []
    const func = function() {
        let color = randomColor()
        toys.forEach(element => {
            element.style.backgroundColor = rgbString(color)
        });

    }
    func()
    intervals.push(setInterval(func, time))
    return intervals
}

function oneColorDark(toys, time) {
    let intervals = []
    let color = randomColor()
    const func = function() {
        if (!correctColor(color)) color = randomColor()
        toys.forEach(element => {
            element.style.backgroundColor = rgbString(color)
        });
        color.r -= 5
        color.g -= 5
        color.b -= 5
    }
    func()
    intervals.push(setInterval(func, time))
    return intervals
}

function manyColors(toys, time) {
    let intervals = []
    toys.forEach(element => {
        intervals.push(setInterval(function() {
            element.style.backgroundColor = rgbString(randomColor())
        }, time))
    })
    return intervals
}


function sequenceColor(toys, time) {
    let intervals = []
    const save = state
    const one = function(color, arr, i) {
        if (i >= arr.length || save != state) return
        arr[i].style.backgroundColor = rgbString(color)
        setTimeout(() => one(color, arr, i + 1), time)
    }
    const func = function() {
        let color = randomColor()
        setTimeout(() => one(color, toys, 0), time)
    }
    func()
    intervals.push(setInterval(func, toys.length * time))
    return intervals
}

function twoPartsColors(toys, time) {
    let toys1 = [],
        toys2 = []
    for (let i = 0; i < toys.length; i++) {
        if (i % 2 == 0) toys1.push(toys[i])
        else toys2.push(toys[i])
    }
    let intervals = oneColor(toys1, time)
    intervals.push(oneColor(toys2, time)[0])
    return intervals
}