const flatten = require('lodash/flatten');
const countBy = require('lodash/countBy');
const identity = require('lodash/identity');
const packages = require('./react-packages.json');
// const details = packages
//     .map(({name,dependencies,devDependencies})=>({name,dependencies,devDependencies}));

// console.log("P?",packages[0],packages[0].dependencies);
const depsMap = packages.map(({dependencies = [], devDependencies = []})=>{
    // console.log("deps?",dependencies);
    return Object.keys(dependencies).concat(Object.keys(devDependencies));
});

// console.log(JSON.stringify(flatten(depsMap),null,2));

const rawCount = countBy (flatten(depsMap), identity);
const countArray = Object.keys(rawCount).map(key=>({
    key:key.replace("'",""),
    value:rawCount[key]
}));

const sortedCountArray = countArray.sort((a,b)=>b.value - a.value);

console.log(JSON.stringify(sortedCountArray,null,2));