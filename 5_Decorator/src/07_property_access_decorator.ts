/**
 * 클래스 내부에서 데코레이터 사용(property access decorator)
 * 2) class get/set 메서드
 *  - class 내부 get, set에 지정할 수 있다.
 *  - 첫번째 인자: class constructor
 *  - 두번째 인자: input 파라미터
 *  - 세번째 인자: get, set method
 *
 * => 해당 데코레이터는 class 내부에서 1개만 생성할 수 있다.
 * get 위에 선언하면 get, set 메서드 모두 접근 가능하지만
 * set 위에 선언하면 set 메서드에만 접근 가능하다 (get: undefined)
 */

{
	// function setLogger(
	// 	target: any,
	// 	name: string,
	// 	descriptor: PropertyDescriptor,
	// ) {
	// 	console.log('Accessor decorator');
	// 	console.log(target); // class constructor
	// 	console.log(`name: ${name}`); // 인자
	// 	console.log(descriptor); // get, set method
	// }

	function getLogger(
		target: any,
		name: string,
		descriptor: PropertyDescriptor,
	) {
		console.log('Accessor decorator');
		console.log(target); // class constructor
		console.log(name); // 인자
		console.log(descriptor); // get, set method
	}

	class Product {
		title: string;
		private _price: number;

		@getLogger
		get price() {
			return this._price;
		}

		set price(price: number) {
			if (price > 0) {
				this._price = price;
			} else {
				throw new Error('Price Shoud be positive');
			}
		}

		constructor(title: string, price: number) {
			this.title = title;
			this._price = price;
			console.log('make Product contructor');
		}

		getPriceWithTax(tax: number) {
			return this._price * (1 + tax);
		}
	}

	new Product('desk', 30000);
}
