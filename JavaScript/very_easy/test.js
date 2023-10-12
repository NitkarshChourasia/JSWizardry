function greaterThanOne(num) {

    "use strict"
    let new_func = new Function(`return ${num}`)();
    return new_func >= 1
}
console.log(greaterThanOne("1/2"));
console.log(greaterThanOne("7/4"));
console.log(greaterThanOne("10/20"));