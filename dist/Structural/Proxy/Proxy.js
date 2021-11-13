"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxySubject = void 0;
class RealSubject {
    constructor() {
        this.enormousData = [1, 2, 3, 4, 5];
    }
    request() {
        return this.enormousData;
    }
}
class ProxySubject {
    constructor() {
        this.enormousData = [];
        this.realSubject = new RealSubject();
    }
    request() {
        if (this.enormousData.length === 0) {
            console.log('pulling data from real subject ... ');
            this.enormousData = this.realSubject.request();
            return this.enormousData;
        }
        console.log('pulling data from proxy cache ... ');
        return this.enormousData;
    }
}
exports.ProxySubject = ProxySubject;
