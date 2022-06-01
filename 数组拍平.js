//数组扁平化，数组拉平，数组降纬
//把多维数组变成一纬数组
//复杂场景下的数据处理，echarts做大屏数据展示
const array = [1, 2, 3, 4, [5, 6, [7, 8]]]
//reduce
// function flatten(array) {
//     return array.reduce((prev, current)=>{
//         return prev.concat(Array.isArray(current)?flatten(current):current)
//     },[])
// }

//es6 flat
// function flatten(array) {
//     return array.flat(Infinity);//()展开的层级
// }

//while
function flatten (array) {
    //循环的条件
    //Array.isArray 是数组
    //array.some包含
    //包含数组进入循环
    while(array.some(Array.isArray)){
        array = [].concat(...array)
    }
    return array
}
console.log(flatten(array))
