# typeOf
1. 可以准确判断除null之外的原始类型
2. 可以判断function

# instanceOf
1. 只能判断引用类型
2. 且是通过原型链查找来判断的

# Object.prototype.toString.call(xxx)
<!-- https://es5.github.io/#x15.2.4.2     《15.2.4.2》 -->
1. 
2. 
3. 将 O 作为ToObject(this) 的执行结果
4. 让 class 成为 O 内部属性 [[Class]] 的值
5. 返回由"[object" 和 class 和 "]" 三部分组成的字符串

# Array.isArray(arr)