"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Proxy_1 = require("./Proxy");
let proxy = new Proxy_1.ProxySubject();
console.log(proxy.request());
console.log(proxy.request());
