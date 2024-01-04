// 상속과 프로토타입을 사용한 메서드 재사용
// JavaScript에서는 프로토타입 체인을 활용하여 객체 간에 메서드를 재사용할 수 있습니다. 
// 부모 객체의 메서드를 자식 객체가 상속받아 사용할 수 있습니다.

// 부모 객체
function Animal(name) {
  this.name = name;
}

// 부모 객체의 메서드
Animal.prototype.walk = function() {
  console.log(this.name + ' is walking.');
};

// 자식 객체
function Bird(name) {
  Animal.call(this, name); // 부모 객체의 생성자 호출
}

// Bird 객체가 Animal 객체를 상속받음
Bird.prototype = Object.create(Animal.prototype);

// 자식 객체의 메서드
Bird.prototype.fly = function() {
  console.log(this.name + ' is flying.');
};

const bird = new Bird('Sparrow');
bird.walk(); // 'Sparrow is walking.'
bird.fly(); // 'Sparrow is flying.'

// 위의 예제에서 Bird 객체는 Animal 객체의 메서드인 walk를 상속받았습니다. 
// Object.create() 메서드를 사용하여 Bird.prototype이 Animal.prototype을 상속받도록 설정했습니다.

// 이러한 방식으로 프로토타입과 상속을 활용하면 코드의 재사용성과 유지보수성을 높일 수 있습니다.





