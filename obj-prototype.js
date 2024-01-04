// 프로토타입 체인 이해
// JavaScript에서 모든 객체는 자신의 프로토타입을 참조하는 내부 링크인 __proto__를 가집니다. 
// 이 __proto__ 링크를 따라가면 여러 객체들이 연결된 프로토타입 체인을 형성하게 됩니다. 
// 이러한 프로토타입 체인을 통해 객체는 상위 프로토타입의 속성과 메서드를 상속받을 수 있습니다.

// prototype 프로퍼티와 __proto__ 속성
// prototype 프로퍼티: 함수 객체에는 prototype이라는 프로퍼티가 있습니다. 
// 이 prototype은 함수를 통해 생성된 객체의 프로토타입 객체를 참조합니다. 
// 이를 통해 함수를 통해 생성된 모든 객체들이 공통된 메서드나 속성을 공유할 수 있습니다.

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log('Hello, ' + this.name);
};

const john = new Person('John');
john.greet(); // 'Hello, John'

// __proto__ 속성: 모든 객체는 __proto__ 속성을 가지며, 이는 해당 객체의 프로토타입을 참조합니다.

const person = {};
console.log(person.__proto__ === Object.prototype); // true
