//instanceof用于检测构造函数的prototype属性是否出现在某个实例对象的原型链上

function Person() {
	this.name = 'aaa'
}
const obj = new Person()
let obj1 = {

}
// console.log(obj instanceof Person)
// console.log(Object.prototype.__proto__)
function MyInstanceof(Obj, Constructor) {
	//获取实例的原型
    let ObjPrototype = Obj.__proto__;
	//获取构造函数的prototype
    let CPrototype = Constructor.prototype
	//通过原型链不断向上查找
	while (true) {
		//console.log(Object.prototype.__proto__) //null
		if (ObjPrototype === null) {
			return false
		} else if (ObjPrototype === CPrototype) {
			return true
		}
		//通过_proto_向上查找原型
		ObjPrototype = ObjPrototype.__proto__
	}
}
console.log(MyInstanceof(obj, Person))
console.log(MyInstanceof(obj1, Person))