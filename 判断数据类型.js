//js判断数据类型的场景
//处理接口返回的数据做区别处理

//js数据类型
//srting number unll undefined symbol boolean
//特点：直接存在栈内存
//值的比较 == 只进行值的比较，在比较时会进行数据类型的隐式转换
// === 不仅进行值的比较，还要进行数据类型的比较
// console.log(1 == true) //true
// console.log(1 == false) //false

//引用数据类型
//Object Array Funcion
//特点：引用数据类型同时保存在栈内存和堆内存中
//在栈中储存的是指针，指针指向堆内存中的地址
//值的比较，比较的是两个变量的引用是否一致（比较应用中的基本数据类型时，==仍为值比较，===值+数据类型）

//tpyeof
//优点：使用简单
//缺点：功能残缺，只能判断srting number boolean undefined symbol functin，不能判断数组
//console.log(typeof []) //'object'
//console.log(typeof null) //'object'

//Object.prototype.toString.call()// [obejct xx]
//适用于所有数据类型

//instanceof
//检测构造函数的prototype是否出现在某个实例对象的__proto__上