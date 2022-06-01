//数组去重
// [1,2,3,4,5,2,3]
// [{name:"freemen",age:"20"},{name:"mukwang",age:"20"}]

//Array.prototype.indexOf
//检测数组是否包含某个项
//包含查找项的下标 不包含-1
// const array = [1, 2, 3, 4, 5];

// console.log(array.indexOf(5)) //4
// console.log(array.indexOf(6)) //-1

// //Array.prototype.filter 过滤 返回一个数组
// console.log(array.filter((item, index) => {
//     return item%2 ===0
// }))//[2,4]
// //Array.prototype.sort 数组排序 返回一个数组
// // console.log(array.sort((a, b) => {
// //     return a-b
// // }))//[1, 2, 3, 4, 5] 从下到大
// console.log(array.sort((a, b) => {
//     return b-a
// }))//[5, 4, 3, 2, 1] 从大到小

// //Array.prototype.reduce 返回一个数组
// console.log(array.reduce(function (prev, current, currentIndex, soureArray) {
//     return prev+current
// })) //15

// //Array.prototype.push  返回添加完目标数组的length
// console.log(array.push(1))//6


// function unique (array) { 
//     handleError(array)
// }

//判断是不是数组
function handleError(array) {
	if (!Array.isArray(array)) {
		throw new Error('unique function parmas is not Array')
	}
}
// const array = [1, 2, 3, 4, 5, 2, 3]
//indexOf filter
// function unique (array) {
//     handleError(array)
// 	return array.filter((item, index) => {
// 		//array.indexOf是否存在,存在返回index，不存在返回-1
// 		return array.indexOf(item) === index
// 	})
// }

//相邻元素排序
// function unique (array) { 
//     handleError(array)
//     array = array.sort((a, b) => {
//         return a - b
//     })
//     let res = [];
//     for (let i = 0; i < array.length;i++){
//         if (array[i] !== array[i - 1]) {
//             res.push(array[i])
//         }
//     }
//     return res
// }


//set接构赋值
// function unique (array) { 
//     handleError(array)
//     return [...new Set(array)]//set返回一个类数组
// }
// console.log(unique(array))
// [{name:"freemen",age:"20"},{name:"mukwang",age:"20"}]

// const array = [{ name: "freemen", age: "20" }, { name: "mukwang", age: "20" }]
// //临时对象缓存数组项key值
// function unique (array,key) { 
//     handleError(array)
//     let res = [];
//     let obj = {};
//     for (let i = 0; i < array.length; i++){
//         //key根据那个key定义去重
//         //拿到当前项的key值
//         var keyName = array[i][key]
//         //'20'
//         if (obj[keyName]) {
//             //跳过当前循环
//             continue;
//         }
//         //geikey赋值成真值
//         obj[keyName] = true
//         res.push(array[i])
//     }
//     return res
// }
// console.log(unique(array,'age'))

// //reduce临时对象缓存
// function unique (array,key) { 
//     handleError(array)
//     var cacheObject = {}
//     return array.reduce((prev, current, currentIndex, soureArray) => {
//         cacheObject[current[key]]?"":cacheObject[current[key]]=true&&prev.push(current)
//         return prev
//     },[])
// }
// console.log(unique(array,'age'))

//求数组的最大值

//reduce
const array = [1, 2, 3, 4, 5]
function getMax (array) {
    return array.reduce((prev, current, currentIndex, soureArray) => {
        return current>prev?current:prev
    })
}

//sort
function getMax (array) {
    const res = array.sort();
    return res[res.length-1]
}
console.log(getMax(array))