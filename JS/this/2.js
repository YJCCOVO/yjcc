// var a = 1
// function foo () {
//     console.log(this.a);
// }
// foo()

var b = 2
function foo() { // [[scope]]
    var b = 1
    bar()
}

function bar() {
    console.log(this.b);
}
foo()