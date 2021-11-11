import { Composite, Leaf } from "./Composite";

const LEAF_A = new Leaf('leaf-a');
const LEAF_B = new Leaf('leaf-b');
const COMPOSITE_1 = new Composite('comp-1')
const COMPOSITE_2 = new Composite('comp-2')

COMPOSITE_1.attach(LEAF_A)
COMPOSITE_2.attach(LEAF_A)
COMPOSITE_2.attach(COMPOSITE_1)

LEAF_B.method();
COMPOSITE_2.method();