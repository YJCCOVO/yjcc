// 监听用户敲击enter键
var input = document.getElementById('list-input')
var ul = document.getElementById('list')

// input.onkeyup = function(e) {
//     if(e.keyCode === 13) {
//         // 读取到input中的值
//         console.log(input.value);

//         // 生产li结构
//         // 将input中的值添加到li中
//         var todoList = `
//             <li>
//                 <input type="checkbox">
//                 <span>${input.value}</span>
//             </li>
//         `
//         // 将li添加到ul中
//         ul.insertAdjacentHTML('afterbegin' , todoList)
//         input.value = ''
//     }
// }

var todoItem = []
input.onkeyup = function(e) {
    if(e.keyCode === 13 ) {
        if(input.value != ''){
        todoItem.push(input.value)
        makeList()
        }
    }
}

function makeList() {
    //循环数组todoItem，生成多份li结构，添加到ul中
    //for循环
    //todoItem.length
    //todoItem[i]
    for(var i =0; i<todoItem.length;i++){
        var todoList = `
            <li>
               <input type="checkbox">
               <span>${todoItem[i]}</span>
           </li>
        `
        ul.insertAdjacentHTML('afterbegin', todoList)
        input.value = ''
        todoItem = []
    }

}



