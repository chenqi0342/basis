//判断数据类型
// const array = [1, 2, 3, 4]
// const type = Object.prototype.toString.call(array)
// console.log(type) //[object Array]

//类数组转数组
//数组index,length
// const arrayLike = { 
//   0: "name",
//   1: "age",
//   2: "gender",
//   length: 3
// }
// const type2 = Array.from(arrayLike)
// const type2 = Array.prototype.slice.call(arrayLike)
// console.log(type2)//[ 'name', 'age', 'gender' ]

//apply 对给定数组求最大值/最小值
const array = [1, 2, 3, 4, 5];
// const type=Math.max(...array)//min最小值
const type=Math.max.apply(null,array)//接收参数要一个一个接收
console.log(type)
//bind通常在react项目中使用 严格模式下this指向undefined