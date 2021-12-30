## multiline-JSON-To-xlsx-NodeJS
    This will help if you have need to convert multiline json data into xlsx

## How to install
    `npm install` for install dependency(json2xls)  

## How to Run 
    `node convertMethod-1.js` (or)
    `node convertMethod-2.js`

## Which file to Run 
    `fs.readFileSync("./input json/data.json").toString().split("\n")`  input file name `data.json` from `input json` folder  

## Where To Save
    `fs.writeFileSync('./output xlsx/data.xlsx', xls, 'binary');` output file name `data.xlsx` to `xlsx` folder  

## input data sample
    { "id":1,"name":"Martin ", "age":"14" }
    { "id":2,"name":"sam", "age":"15" }
    { "id":3,"place":"NGL",  "name":"Jackson", "age":"16" }
    { "id":4,"name":"Max", "age":"17" }

## How to use
### `convertMethod-1.js` will help if you have same fieldnames (this will not print place in xlsx)

        { "id":1,"name":"Martin ", "age":"14" }
        { "id":2,"name":"sam", "age":"15" }
        { "id":3,"place":"NGL",  "name":"Jackson", "age":"16" }
        { "id":4,"name":"Max", "age":"17" }

![MarineGEO circle logo](https://raw.githubusercontent.com/MANOJ-M-01/Multiline-JSON-Data-To-xlsx-NodeJS/main/img/out1.JPG "output image 1")

### `convertMethod-1.js` will help if customize fieldnames (this will print place in xlsx)  
    will generate empty cell for undefined feilds

        { "id":1,"name":"Martin ", "age":"14" }
        { "id":2,"name":"sam", "age":"15" }
        { "id":3,"place":"NGL",  "name":"Jackson", "age":"16" }
        { "id":4,"name":"Max", "age":"17" }

![MarineGEO circle logo](https://raw.githubusercontent.com/MANOJ-M-01/Multiline-JSON-Data-To-xlsx-NodeJS/main/img/out2.JPG "output image 2")



### Reference Links

[JSON to Excel convertion in Nodejs](https://stackoverflow.com/questions/32237121/json-to-excel-convertion-in-nodejs)
