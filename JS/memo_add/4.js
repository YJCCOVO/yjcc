动态规划
function fibonacci(n) {
    if(n<2){
        return n
    }
    let dp = new Array(n+1)
     dp[0]=0
     dp[1]=1
     for(let i =2;i<=n;i++){
        dp[i] = dp[i-1]+dp[i-2]
     }

     return dp[n]
}
// function fibonacci(n){
//     if(n<2){
//         return n
//     }
//     let a = 1, b = 1
//     for(let i = 2;i<n;i++){
//         [a,b] = [b,a+b]
//     }
//     return b
// }
console.log(fibonacci(4));

