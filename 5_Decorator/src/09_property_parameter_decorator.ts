/**
 * 클래스 내부에서 데코레이터 사용(parameter decorator)
 *  - 동작방식은 동일
 */

{
	function parameterDecorator(
		target: any,
		name: string | Symbol,
		position: number,
	) {
		console.log('method decorator');
		console.log(target); // class constructor
		console.log(name); // 함수명
		console.log(position); // parameter
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

		getPriceWithTax(@parameterDecorator tax: number) {
			return this._price * (1 + tax);
		}
	}

	new Product('desk', 30000);
	// const product = new Product('desk', 30000);
	// console.log(product.getPriceWithTax(30));
}
