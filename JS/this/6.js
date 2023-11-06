// function foo() {}
// var bar = function() {}
var a = 1

// var bar = function() {
//     console.log(this.a);
// }
// bar()

var obj = {
    name : 'Tom',
    show: function() {
        // console.log(this);

        var bar = () => {
            console.log(this.name);
        }
        bar()
    }
}
obj.show()