// 메타 프로그래밍, 유즈케이스
// 기본형: 인자를 쓰지 않았을 때는 해당 Class을 인자로 받을 수 있다.
{
	function Logger(constructor: Function) {
		console.log('Logging...');
		console.log(constructor);
	}

	@Logger
	class Person {
		name = 'Max';

		constructor() {
			console.log('Creating person Object...');
		}
	}

	const person = new Person();

	console.log(person.name);
}
