/**
 * class 데코레이터를 활용해 새로운 constructor를 반환할 수 있따.
 */

{
	function Logger(logString: string) {
		console.log('LOGGING FACTORY');
		return function (constructor: Function) {
			console.log(logString);
			console.log(constructor);
		};
	}

	function WithTemplate(template: string, hookId: string) {
		console.log('TEMPLATE FACTORY');
		return function <T extends { new (...args: any[]): { name: string } }>(
			originalConstructor: T,
		) {
			console.log('TEMPLATE FACTORY FUNCTION');

			return class extends originalConstructor {
				constructor(..._: any[]) {
					super();
					console.log('Rendering template');
					const hookEl = document.getElementById(hookId);
					const person = new originalConstructor();

					if (hookEl) {
						hookEl.innerHTML = template;
						hookEl.querySelector('h1')!.textContent = person.name;
					}
				}
			};
		};
	}

	@Logger('LOGGING - PERSON')
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
