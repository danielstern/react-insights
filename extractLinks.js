const links = `* [react-kit](https://github.com/thomasthiebaud/react-kit) (webpack v2, redux, react-router v4, code splitting, jest, saga, reselect)
* [hapi-react-hot-loader-example](https://github.com/codeBelt/hapi-react-hot-loader-example) (ES2015, Universal (SSR), React Hot Loader 3, React Router 4, Redux, Redux Saga, Redux Form, Async Component Code Splitting, Hapi, Webpack 3)
* [typescript-hapi-react-hot-loader-example](https://github.com/codeBelt/typescript-hapi-react-hot-loader-example) (TypeScript, Universal (SSR), React Hot Loader 3, React Router 4, Redux, Redux Saga, Redux Form, Async Component Code Splitting, Hapi, Webpack 3)
* [react-redux-styled-hot-universal](https://github.com/krasevych/react-redux-styled-hot-universal) (SSR, Universal Webpack, Redux, React-router, Webpack 2, Babel, Styled Components and more...)
* [webpack-react-redux](https://github.com/jpsierens/webpack-react-redux) (redux, react-router, hmr)
* [react-lego](https://github.com/peter-mouland/react-lego) (universal, react-router, other optional techs)
* [react-static-boilerplate](https://github.com/koistya/react-static-boilerplate) (static site generator; React, PostCSS, Webpack, BrowserSync)
* [react-cool-starter](https://github.com/wellyshen/react-cool-starter) (universal, redux, react-router, webpack 2, Babel, PostCSS, and more...)
* [react-redux-saga-boilerplate](https://github.com/gilbarbara/react-redux-saga-boilerplate) (react-router, redux, saga, webpack 2, jest w/ coverage, enzyme)
* [react-universal-boiler](https://github.com/strues/react-universal-boiler) (webpack 2, universal, react-router, redux, happypack)
* [apollo-fullstack-starter-kit](https://github.com/sysgears/apollo-fullstack-starter-kit) (universal, apollo, graphql, react, react-router, knex)
* [react-universally](https://github.com/ctrlplusb/react-universally) (universal, react, react router, express, seo, full stack webpack 2, babel)
* [meatier](https://github.com/mattkrick/meatier) (webpack 2 + hmr, universal, redux, graphql, react, react-router-redux, ssr)
* [react-hot-ts](https://github.com/Glavin001/react-hot-ts) (React, Webpack, TypeScript)
* [react-boilerplate-app](https://github.com/vebjorni/react-boilerplate-app) (react (duh), router, webpack with dev server, babel, hot reloading)
* [react-native-web](https://github.com/agrcrobles/react-native-web-webpack-starter) (react-native-web, webpack with dev server, hot reloading and flow soon...)
* [react-starter-kit](https://github.com/elios264/react-starter) (webpack 2 + htr + react + redux + router + babel + sass)
* [redux-react-starter](https://github.com/didierfranc/redux-react-starter) (webpack 2 + redux + react-redux 5 + react-router 4 + styled-component ...)
* [react-redux-universal-boilerplate](https://github.com/kiki-le-singe/react-redux-universal-boilerplate) (redux, react-router, universal, koa, webpack 2, babel, PostCSS, sass or cssnext, hot reloading, ...)
* [ARc](https://arc.js.org) (React, Jest, Storybook and other optional feature branches)
* [webpack-react-redux-starter](https://github.com/stsiarzhanau/webpack-react-redux-starter) (webpack 2, browsersync, babel, eslint, mocha, enzyme, jsdom, production config, detailed readme, and more...)
* [trowel](https://github.com/frux/trowel) (universal/ssr, redux, react-router 4, webpack 2, postcss)
* [react-navigation-web](https://github.com/agrcrobles/react-navigation-web) (react-navigation in web + redux, hot reloading!)
* [react-universal-hot-loader-starter-kit](https://github.com/earnubs/react-hot-loader-starter-kit) (universal express app with webpack 2, react-router 4, redux and react-hot-loader 3)
* [bare-minimum-react-hot-rr4-redux](https://github.com/nganbread/bare-minimum-react-hot-rr4-redux) (Bare minimum webpack 2, react-router 4, redux)
* [react-webpack2-boilerplate](https://github.com/plag/react-webpack2-boilerplate) (Minimal react-router-3, react-redux, redux-saga on webpack2 with full hot reloading include reducers, sagas and react-components)
* [react-webpack-boilerplate](https://github.com/eqfox/react-webpack-boilerplate) (Boilerplate for ReactJS project with Webpack2 hot code reloading!)
* [react-boilerplatinum](https://github.com/Kikobeats/react-boilerplatinum) (Webpack2, Babel, React, Dev Server, PostCSS, SASS, PurifyCSS, HMR, Standard, Offline, BrowserSync)
* [ts-react-boilerplate](https://github.com/sotnikov-link/ts-react-boilerplate) (react, typescript 2, webpack 2 + hot-reload, karma + jasmine + coverage, sourcemaps)
* [react-boilerplate](https://github.com/mikechabot/react-boilerplate) (Dead simple boilerplate for ReactJS. Webpack 2, Redux. Hot Loader. Router)
* [molecule](https://github.com/timberio/molecule) (Production ready boilerplate targeting web & electron, using webpack 2, redux, react-hot-loader, immutable.js, react-router and more)
* [universal-js-hmr-ssr-react-redux](https://github.com/Alex-ray/v2-universal-js-hmr-ssr-react-redux) (Universal JS, Webpack 2, React Router 4, Server Side Rendering, Code Splitting, Redux, Express)`

// const links = `* [react-kit](https://github.com/thomasthiebaud/react-kit) (webpack v2, redux, react-router v4, code splitting, jest, saga, reselect)`;

const regExp = /\(([^)]+)\)/g;
const inBrackets = links.match(regExp);
const urls = inBrackets
    .filter(str=>str.includes("https://github.com/"))
    .map(str=>str.replace('(','').replace(')',''));

// console.log(urls);

module.exports = urls;