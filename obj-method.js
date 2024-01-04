// 메서드(Method): 객체의 메서드는 객체에 속한 함수를 의미합니다. 
// 메서드는 객체의 동작이나 행위를 정의하며, 객체의 상태를 변경하거나 다른 동작을 수행하는 데 사용됩니다. 
// 메서드는 객체에 속하는 함수이므로 해당 객체의 속성처럼 접근하고 호출할 수 있습니다.

const person = {
  name: 'John',
  greet: function() {
    console.log('Hello, ' + this.name);
  }
};

person.greet(); // 'Hello, John'
