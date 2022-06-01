const TMap = function (options) {
    this.name = options.name
    this.address = options.address

    // return {
    //     name: "map",
    //     address:"SZ"
    // }
}

// const map = new TMap({
//     name: 'tmap',
//     address: 'BJ'
// })

// console.log(map)

//1.实例化对象
//2.返回值的问题：构造函数中如果有返回值 实例化的对象就是这个返回值

    //...args获取构造函数
    //构造函数是第一个值
const ObjectFactory = (...args) => {
    //创建空对象
    const obj = {};
    //或者构造函数
    const Constructor = [].shift.call(args);
    //对象的原型链指向构造函数的原型
    obj.__proto__ = Constructor.prototype;
    //执行构造函数
    const ret = Constructor.apply(obj, args);
    //2.返回值的问题：构造函数中如果有返回值 实例化的对象就是这个返回值
    //根据执行的结果，返回新对象
    return typeof ret === 'object'? ret: obj
}
const map = ObjectFactory(TMap, { name: "MAP", address: "BJ" })
console.log(map)