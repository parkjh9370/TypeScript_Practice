/**
 * Decorator + class 실행 순서
 *  - 데코레이터 내부는 순서대로 실행
 *  - 내부 함수는 그 역순으로 실행
 * => 즉, bottom up 방식으로 실행됨
 *
 * 앵귤러의 경우 데코레이터 방식을 통해 객체를 전달하는 방식을 적극 활용한다
 * (https://angular.io/api/core/Component)
 *
 * 백엔드 NestJs도 로깅에서 활용됨
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
		return function (constructor: any) {
			console.log('TEMPLATE FACTORY FUNCTION');
			const hookEl = document.getElementById(hookId);
			const person = new constructor();

			if (hookEl) {
				hookEl.innerHTML = template;
				hookEl.querySelector('h1')!.textContent = person.name;
			}
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
