//() There’s a rule: top-level module code should be used for initialization, creation of module-specific internal data structures. If we need to make something callable multiple times – we should export it as a function, like we did with sayHi above.
// import {sayHi} from './sayhi.js';
import demi from './sayhi.js'
alert(sayHi()); // function...
