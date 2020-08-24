export default class X {
    constructor(x1, x2) {
        this.x1 = x1;
        this.x2 = x2;
    }
}
// export default X;

export function f1(x) {
    console.log(`x1: ${x.x1}`);
}
export function f2(x) {
    console.log(`x2: ${x.x2}`);
}
// export {f1, f2};