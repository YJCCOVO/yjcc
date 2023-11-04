var arr =[]

for(var/*let*/ i = 0; i< 10 ; i++){

    (function (j){
        arr[i] = function() {
            console.log(j);
        }
    })(i)

}


//-----------
for(var j = 0;j<arr.length;j++){
    arr[j]()
}