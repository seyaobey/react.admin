﻿/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../../typings/react/react-bootstrap.d.ts" />
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import React = require('react');
import ReactDOM = require('react-dom');
import rb = require('react-bootstrap');
var b: any = rb;


//export class View extends 

var viewcount: number = 1;


export interface ViewProps extends React.Props<any> {
    owner?: View,
}


export interface ViewState {
    loading?: boolean,
}


export class View extends React.Component<ViewProps, any>{
}

