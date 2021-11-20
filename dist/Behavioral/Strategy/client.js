"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Strategy_1 = require("../Strategy/Strategy");
const context = new Strategy_1.Context();
context.request(Strategy_1.ConcreteStrategyA).method();
context.request(Strategy_1.ConcreteStrategyB).method();
context.request(Strategy_1.ConcreteStrategyC).method();
