const { get } = require('request-promise');
const co = require('co');
const sampleRawString = `https://raw.githubusercontent.com/gaearon/react-hot-boilerplate/next/package.json`;
const sampleLinkString = `https://github.com/wkwiatek/react-hot-loader-minimal-boilerplate`;

// const urls = [
//     `https://github.com/gaearon/react-hot-boilerplate/tree/next`,
//     `https://github.com/wkwiatek/react-hot-loader-minimal-boilerplate`,
//     `https://github.com/thomasthiebaud/react-kit`,
//     `https://github.com/codeBelt/hapi-react-hot-loader-example`,
// ];

const urls = require('./extractLinks');

const rawStringToLinkString = string=>string
    .replace(`/tree/next`,``)
    .replace(`https://github.com`,`https://raw.githubusercontent.com`)
    .concat(`/master/package.json`);

const links = urls.map(rawStringToLinkString);

let packages = [];
async function getLinks() {
    for (const link of links) {
        // console.log("Link?",link);
        // console.log("Doing...",link);
        let data = await get(link);
        // packages.push(JSON.stringify(data,null,2));
        packages.push(JSON.parse(data));
        // console.log("Data?",data);
    };
    console.info(JSON.stringify(packages,null,2));
};




// console.log(links);


co(getLinks);