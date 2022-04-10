/*
 * @Author: chenjie
 * @Email: 18822126754@163.com
 * @Date: 2022-04-09 15:08:02
 * @LastEditTime: 2022-04-09 15:40:01
 * @Description: 
 */

function test1(a, b) {
    console.log(a);
    console.log(b);
    var b = 234;
    console.log(b);
    a = 123;
    console.log(a);
    function a() {};
    var a;
    b = 234;
    var b = function(){};
    console.log(a);
    console.log(b);
}
test1(1);



// ------------------------------------------------------------------

function test(a, b) {
    console.log(a);
    c= 0;
    var c;
    a = 3;
    b = 2;
    console.log(b);
    function b() {};
    function d() {};
    console.log(b);
}
// test(1);

// -----------------------------------------------------------------

function fn(a){
    console.log(a);
    var a = 123;
    console.log(a);
    function a() {};
    console.log(a);
    var b = function () {};
    console.log(b);
    function d() {};
}
// fn(1);

// 执行得四部曲
// 1. 创建AO对象（可以说是执行期上下文）
// 2. 找形参和变量，将形参和变量作为AO对象得属性，赋值undefined
// 3.将形参实参相统一
// 4.在函数体内找函数声明，值赋予函数体

/**
 * 第一步：创建AO对象
 * 
 * AO：{
 * 
 * }
 * 
 * 第二部： 形参fn(a)a是形参， 变量：var a, var b
 * AO：{
 *  a: undefined,
 *  b: undefined
 * }
 * 
 * 
 * 第三步：形参 fn(a), 实参fn(1)
 * 
 * AO：{
 *  a: 1,
 *  b: undefined
 * }
 * 
 * 第四步：函数声明 function a(){}  注意var b = function(){} 是表达式，不是函数声明
 * 
 * AO： {
 *  a: function a() {},
 *  d: function d() {},
 *  b: undefined
 * }
 * 
 * 
 * 然后开始走代码
 * console.log(a);  // function a() {}
 * a = 123 // a被赋值，所以输出123
 * console.log(a);  // 123
 * console.log(a); // 123
 * b = fucntion() {} ,b被赋值，所以打印出函数
 * console.log(b); // function b() {}
 */
