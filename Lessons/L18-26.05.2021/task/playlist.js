window.onload = init

function init() {
    var button = document.getElementById("addButton")
    button.onclick = handleButtonClick
    var remove = document.getElementById("removeButton")
    remove.onclick = removeSong
    var clear = document.getElementById("clearButton")
    clear.onclick = clearList
    loadPlaylist()
}

function handleButtonClick() {
    var textInput = document.getElementById("songTextInput");
    var songName = textInput.value;
    if (songName == "") {
        alert("Please enter a song");
        return
    }
    if (!checkName(songName)) {
        alert("This song has already been added!");
        return
    }
    var li = document.createElement("li");
    li.innerHTML = songName;
    var ul = document.getElementById("playlist")
    ul.appendChild(li);
    save(songName)
}

function checkName(songName) {
    return (findItem(songName) == null)
}

function findItem(songName) {
    let list = document.getElementById("playlist")
    let children = list.children
    for (child of children) {
        if (child.textContent == songName) return child
    }
    return null
}

function removeSong() {
    var textInput = document.getElementById("songTextInput");
    var songName = textInput.value;
    if (songName == "") return
    let item = findItem(songName)
    if (item == null) {
        alert("There is no such song here!")
    }
    let list = document.getElementById("playlist")
    list.removeChild(item)
    remove(songName)
}

function clearList() {
    let list = document.getElementById("playlist")
    list.innerHTML = ''
    clear()
}