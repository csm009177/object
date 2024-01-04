// 객체 생성자 함수: 객체 생성자 함수는 new 키워드와 함께 사용되며, 템플릿으로서 여러 객체를 생성하는 데 사용됩니다. 
// 생성자 함수는 function 키워드를 사용하여 정의되며, this 키워드를 사용하여 새로 생성되는 객체의 속성과 메서드를 초기화합니다.

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log('Hello, ' + this.name);
  };
}

const john = new Person('John', 30);
const cain = new Person('cain', 33);

console.log(john)
john.greet()
console.log(cain)
cain.greet()

