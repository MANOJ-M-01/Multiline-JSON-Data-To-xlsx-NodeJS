
const fs = require("fs")
const json2xls = require('json2xls')

var rawFile = fs.readFileSync("./input json/data.json").toString().split("\n")

let arr = []
rawFile.forEach(data => {
    arr = [...arr, JSON.parse(data)]
})

let jsonArray = [];

arr.forEach((data) => {
    let place = data.place ? data.place : ''; // for some empty fields
    let newdatas = {
        'id': data.id,
        'name': data.name,
        'age': data.age,
        'place': place
    }
    jsonArray = [...jsonArray, newdatas]
});


console.log(jsonArray);

var xls = json2xls(jsonArray);

fs.writeFileSync('./output xlsx/data3.xlsx', xls, 'binary');