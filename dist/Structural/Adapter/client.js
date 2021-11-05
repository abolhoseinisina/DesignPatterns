"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adapter_1 = require("./adapter");
const totalCubes = 5;
let counter = 0;
const manufactureCube = () => {
    const width = Math.floor(Math.random() * 10) + 1;
    const height = Math.floor(Math.random() * 10) + 1;
    const depth = Math.floor(Math.random() * 10) + 1;
    let cube = new adapter_1.CubeA();
    let success = cube.manufacture(width, height, depth);
    if (success) {
        counter++;
    }
    else {
        console.log("- Company A was busy and couldn't manufactur a cube.");
        cube = new adapter_1.CubeBAdapter();
        success = cube.manufacture(width, height, depth);
        if (success) {
            counter++;
        }
        else {
            console.log("- Company B was busy and couldn't manufactur a cube.");
        }
    }
};
const interval = setInterval(() => {
    manufactureCube();
    if (counter >= totalCubes) {
        clearInterval(interval);
        console.log(`${totalCubes} cubes have been manufactured.`);
    }
}, 1000);
