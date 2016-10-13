/// <reference path="lib/app.tsx" />
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import applib = require('./lib/app');


class App extends applib.Application {
}

var app = new App({
    basedir:''
});

app.init_layout();

