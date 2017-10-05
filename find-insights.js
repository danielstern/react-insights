const packages = require('./react-packages.json');
let totalCount = packages.length;
let insights = [{
    name:"Percentage using Deprecated es2015 Babel Preset",
    value:packages.filter(p=>Object.keys(p.dependencies).concat(Object.keys(p.devDependencies)).includes("babel-preset-es2015")).length / totalCount
},{
    name:"Percentage using env Babel Preset",
    value:packages.filter(p=>Object.keys(p.dependencies).concat(Object.keys(p.devDependencies)).includes("babel-preset-env")).length / totalCount
}];

insights = ['react-router-dom','react-router-redux','react-router','jest','enzyme','express','redux','react-hot-loader','webpack-dev-middleware','history','react-helmet','babel-cli','redux-saga','redux-thunk','immutable','eslint','eslint-config-airbnb'].map(library=>({
    name:`Percentage using ${library}`,
    value:packages.filter(p=>Object.keys(p.dependencies).concat(Object.keys(p.devDependencies)).includes(library)).length / totalCount
}));

insights.push({
    name:`Percentage using any react-router library`,
    value:packages.filter(p=>Object.keys(p.dependencies).concat(Object.keys(p.devDependencies)).find(libraryName=>libraryName.includes('react-router'))).length / totalCount
},{
    name:`Percentage using any testing library`,
    value:packages.filter(p=>Object.keys(p.dependencies).concat(Object.keys(p.devDependencies)).find(libraryName=>libraryName.includes('enzyme') || libraryName.includes('jest') || libraryName.includes('mocha'))).length / totalCount
},{
    name:`Percentage using any kind of css library`,
    value:packages.filter(p=>Object.keys(p.dependencies).concat(Object.keys(p.devDependencies)).find(libraryName=>libraryName.includes('css') || libraryName.includes('less') || libraryName.includes('sass'))).length / totalCount
},{
    name:`Percentage using any kind of accessibility library`,
    value:packages.filter(p=>Object.keys(p.dependencies).concat(Object.keys(p.devDependencies)).find(libraryName=>libraryName.includes('a11y'))).length / totalCount
},{
    name:`Percentage using either redux-saga or redux-thunk`,
    value:packages.filter(p=>Object.keys(p.dependencies).concat(Object.keys(p.devDependencies)).find(libraryName=>libraryName.includes('redux-thunk') || libraryName.includes('redux-saga'))).length / totalCount
});

insights.push({
    name:`Packages using "isomorphic"`,
    value:packages.filter(p=>p.name && p.name.includes('isomorphic')).length / totalCount
},{
    name:`Packages using "universal"`,
    value:packages.filter(p=>p.name && p.name.includes('universal')).length / totalCount
});


// console.log(insights);
insights.forEach(insight=>{
    console.log(insight.name);
    console.log(insight.value);
    console.log('-----');
});
