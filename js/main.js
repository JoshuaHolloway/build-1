import X from './X.js'; // Import default can rename to anything
import { f1 as g1, f2 as g2} from './X.js'; 

const x = new X('steve', 42);
console.log(x);

g1(x);
g2(x);