const flatten = require('lodash/flatten');
const countBy = require('lodash/countBy');
const identity = require('lodash/identity');
const packages = require('./react-packages.json');

const depsMap = packages.map(({dependencies = [], devDependencies = []})=>{
    return Object.keys(dependencies).concat(Object.keys(devDependencies));
});

const rawCount = countBy (flatten(depsMap), identity);
const countArray = Object.keys(rawCount).map(key=>({
    key:key.replace("'",""),
    value:rawCount[key]
}));

const sortedCountArray = countArray.sort((a,b)=>b.value - a.value);

console.log(JSON.stringify(sortedCountArray,null,2));

let fs = require('fs');
fs.writeFileSync('./counts.json',JSON.stringify(sortedCountArray,null,2));