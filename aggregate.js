const { get } = require('request-promise');
const co = require('co');
const urls = require('./links.json');

const rawStringToLinkString = string=>string
    .replace(`/tree/next`,``)
    .replace(`https://github.com`,`https://raw.githubusercontent.com`)
    .concat(`/master/package.json`);

const links = urls.map(rawStringToLinkString);

let packages = [];
async function getLinks() {
    for (const link of links) {
        try {
            let data = await get(link);
            packages.push(JSON.parse(data));
        } catch (e) {
            console.warn(`Encountered error for ${link}, skipping...`);
        }

    };
    console.info(JSON.stringify(packages,null,2));
};


let fs = require('fs');
fs.writeFileSync('./react-packages.json',JSON.stringify(packages,null,2));


co(getLinks);