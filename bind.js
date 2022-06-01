function origin (a, b) {
    console.log(this.name)
    console.log([a,b])
}

const obj = {
    name:"freemen"
}
//this指向window
//bind返回一个函数
// const fnc = origin.bind(obj,2)
// fnc(1)

//bind(xxx,[])
Function.prototype.bindFn = function () {
    //原函数调用了bind方法，this指向fn
    const fn = this
    //获取目标对象
    const obj = arguments[0]
    //类数组转数组，截取
    //原函数传递的参数
    const args = [].slice.call(arguments,1)
    //bind返回一个函数
    return function () {
    //获取返回函数的参数列表
    const returnArgs = [].slice.call(arguments)
    //执行原函数，合并参数
    fn.apply(obj, args.concat(returnArgs));
    }
}
// bindFn()