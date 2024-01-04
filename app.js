// 객체 리터럴과 객체 생성자 함수의 차이점
// 객체 리터럴: 객체 리터럴은 중괄호 {}를 사용하여 객체를 직접 생성하는 방법입니다. 
// 이 방법은 간단하고 직관적이며, 한두 개의 객체를 쉽게 생성할 때 유용합니다.
const person = {
  name: 'John',
  age: 30,
  greet: function() {
    console.log('Hello, ' + this.name);
  }
};

person.greet()S