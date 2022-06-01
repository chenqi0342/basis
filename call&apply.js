const obj = {
    name:'1'
}

function testFunc (a,b) {
    console.log('a :>> ', a);
    console.log('b :>> ', b);
    console.log('this.name :>> ', this.name);
}
// testFunc.call(obj)
const core = (context, args,_this) => {
        //判断是否传递了参数
        args = args || []
        //获取唯一的key值
        //给context新增一个Symbol属性以免覆盖原有属性
        const key = Symbol()
        //获取原函数 this原函数
        context[key] = _this
        //隐式绑定到context上执行原函数
        const result = context[key](...args)
        //解除绑定
    delete context[key]
    //返回结果
        return result
}
//函数原型上的方法
// Function.prototype.callFn = function (context=window, ...args) {
Function.prototype.callFn = function (context, ...args) {
    return core(context,args,this)
}
testFunc.callFn(obj,'a','b')


// Function.prototype.applyFn = function (context=window,args) {
Function.prototype.applyFn = function (context,args) {
    return core(context,args,this)
}
testFunc.applyFn(obj,['a','b'])
