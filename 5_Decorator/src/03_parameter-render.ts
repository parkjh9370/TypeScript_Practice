// 내부 데코레이터 값에 인자를 전달시킬 수 있다.
{
	// 인자값을 전달해서 렌더링
	function WithTemplate(template: string, hookId: string) {
		return function (_: Function) {
			const hookEl = document.getElementById(hookId);
			if (hookEl) {
				hookEl.innerHTML = template;
			}
		};
	}

	@WithTemplate('<h1>My Person Object</h2>', 'person')
	class Person {
		name = 'Max';

		constructor() {
			console.log('Creating person Object...');
		}
	}

	const person = new Person();

	console.log(person.name);
}
