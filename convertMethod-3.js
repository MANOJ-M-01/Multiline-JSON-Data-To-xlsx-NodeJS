const fs = require("fs")
const json2xls = require('json2xls')

var rawFile = fs.readFileSync("./input json/AMAZON_FASHION_5.json").toString().split("\n")

let arrData = []
rawFile.forEach(data => {
    arrData = [...arrData, JSON.parse(data)]
})

var uniqueKeys = Object.keys(arrData.reduce(function (result, obj) {
    return Object.assign(result, obj)
}, {}))


let FilterdData = []

arrData.forEach((data) => {
    let singleData = []
    uniqueKeys.forEach(element => {
        let curEl = data[element] ? data[element] : ''
        singleData[element] = curEl
    });
    FilterdData = [...FilterdData, singleData]
})

var xls = json2xls(FilterdData)

fs.writeFileSync('./output xlsx/data3.xlsx', xls, 'binary')