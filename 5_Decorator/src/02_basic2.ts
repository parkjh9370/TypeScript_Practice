// 내부 데코레이터 값에 인자를 전달시킬 수 있다.
{
	function Logger(logString: string) {
		return function (constructor: Function) {
			console.log(logString);
			console.log(constructor);
		};
	}

	@Logger('LOGGING - PERSON')
	class Person {
		name = 'Max';

		constructor() {
			console.log('Creating person Object...');
		}
	}

	const person = new Person();

	console.log(person.name);
}
