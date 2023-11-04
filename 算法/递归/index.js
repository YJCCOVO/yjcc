//斐波那契数列
// 1 1 2 3 5 8 13 21 .....

function fb(n){
    //fb(n) = fb(n-1) + fb(n-2)
    if(n === 1 || n ===2 ){
        return 1 
    }

    return fb(n-1) + fb(n-2) // 4 3  - 3 2,2,1+

}
console.log(fb(5));