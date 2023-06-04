/**
 * 클래스 내부에서 데코레이터 사용(property method decorator)
 *  - 동작방식은 동일
 */

{
	function methodLogger(
		target: any,
		name: string | Symbol,
		descriptor: PropertyDescriptor,
	) {
		console.log('method decorator');
		console.log(target); // class constructor
		console.log(name); // 인자
		console.log(descriptor); // 함수
	}

	class Product {
		title: string;
		private _price: number;

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

		@methodLogger
		getPriceWithTax(tax: number) {
			return this._price * (1 + tax);
		}
	}

	new Product('desk', 30000);
}
