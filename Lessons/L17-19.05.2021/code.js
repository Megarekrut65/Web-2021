var gallery = {
    "imagesInfo": [{
            "name": "JS tutorial",
            "img": "https://eloquentjavascript.net/img/cover.jpg",
            "release": new Date(2001, 10, 18)
        },
        {
            "name": "C++ tutorial",
            "img": "https://www.guru99.com/images/1/cpp-books-7.jpg",
            "release": new Date(1997, 2, 28)
        },
        {
            "name": "C# tutorial",
            "img": "https://images-na.ssl-images-amazon.com/images/I/51+jdVSmf7L._SX398_BO1,204,203,200_.jpg",
            "release": new Date(2008, 11, 23)
        },
        {
            "name": "",
            "img": "https://i.guim.co.uk/img/media/d305370075686a053b46f5c0e6384e32b3c00f97/0_50_5231_3138/master/5231.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=878208abf6d919b7ca9948a523d9ff4e",
            "release": new Date(2021, 1, 1)
        },
        {
            "img": "https://specials-images.forbesimg.com/imageserve/5f85be4ed0acaafe77436710/960x0.jpg?fit=scale",
            "release": new Date(2021, 1, 1)
        }
    ]
}

function readFromJSON(jsonText) {
    console.log("JSON text: " + jsonText)
    var newGallery = JSON.parse(jsonText, function(key, value) {
        if (key == "release") {
            return new Date(value);
        } else {
            return value;
        }
    });
    printGallery(newGallery)
}

function printGallery(theGallery) {
    console.log("Gallery: ")
    for (item of theGallery.imagesInfo) {
        console.log("{")
        for (key of Object.keys(item))
            if (key == "release") {
                console.log(key + ": " + item[key] + ",")

            } else console.log(key + ": " + item[key] + ",")
        console.log("},")
    }

}

function task1() {
    console.log("Task1 start")
    var jsonText = JSON.stringify(gallery);
    readFromJSON(jsonText)
    console.log("Task1 end")
}

function task2() {
    console.log("Task2 start")
    var jsonText = JSON.stringify(gallery, function(key, value) {
        if (key == "imagesInfo") {
            var names = []
            for (item of value)
                names.push({ "name": item.name })
            return names
        }
        return value
    });
    readFromJSON(jsonText)
    console.log("Task2 end")
}

function task3() {
    console.log("Task3 start")
    var jsonText = JSON.stringify(gallery, function(key, value) {
        if (key == "imagesInfo") {
            var res = value.filter(function(item) {
                return (item["name"] && item["name"] != "")
            })
            return res
        }
        return value
    });
    readFromJSON(jsonText)
    console.log("Task3 end")
}