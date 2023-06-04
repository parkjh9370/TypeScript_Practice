// 내부 데코레이터 값에 인자를 전달시킬 수 있다.
{
	// 혹은 내부 class 내부 값을 활용해서 렌더링 할 수 있다.
	function WithTemplate(template: string, hookId: string) {
		return function (constructor: any) {
			const hookEl = document.getElementById(hookId);
			const person = new constructor();

			if (hookEl) {
				hookEl.innerHTML = template;
				hookEl.querySelector('h1')!.textContent = person.name;
			}
		};
	}

	@WithTemplate('<h1></h1>', 'person')
	class Person {
		name = 'Max';

		constructor() {
			console.log('Creating person Object...');
		}
	}

	const person = new Person();

	console.log(person.name);
}
