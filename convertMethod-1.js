
const fs = require("fs")
const json2xls = require('json2xls')

var rawFile = fs.readFileSync("./input json/data.json").toString().split("\n")

let arr = []
rawFile.forEach(data => {
    arr = [...arr, JSON.parse(data)]
})

let jsonArray = [];

arr.forEach((data) => {
    let filter = [];
    let keys = Object.keys(data);
    keys.map((key) => {
        // filter[key]=`${data}.${key}`;
        filter[key] = data[key];
    });
    jsonArray = [...jsonArray, filter]
});


// console.log(filterArr);

var xls = json2xls(jsonArray);

fs.writeFileSync('./output xlsx/data.xlsx', xls, 'binary');