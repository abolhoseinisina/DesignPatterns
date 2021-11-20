import { ConcreteStrategyA, ConcreteStrategyB, ConcreteStrategyC, Context } from "../Strategy/Strategy";

const context = new Context();
context.request(ConcreteStrategyA).method();
context.request(ConcreteStrategyB).method();
context.request(ConcreteStrategyC).method();