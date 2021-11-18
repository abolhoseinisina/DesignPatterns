import { IAbstractExpression, Add, Numeral, Subtract, Multiply } from "./Interpreter";

const sentence = '5 + 4 - 2';
console.log(`sentence: ${sentence}`);

let TOKENS = sentence.split(' ');
const AST: IAbstractExpression[] = []
AST.push(new Add(new Numeral(TOKENS[0]), new Numeral(TOKENS[2])));
AST.push(new Subtract(AST[0], new Numeral(TOKENS[4])));

let AST_ROOT = AST.pop();
console.log((AST_ROOT as IAbstractExpression).interpret());
console.dir(AST_ROOT, {depth: null})