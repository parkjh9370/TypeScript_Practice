/**
 * 클래스 내부에서 데코레이터 사용(property_decorator)
 * 1) class 파라미터
 * - 외부 class Decorator 다음으로 실행된다
 * - 첫번째 인자로 클래스의 ProtoType을 반환
 * - 두번째 인자는 해당 인자의 key Name을 반환
 */
{
	function Logger1(target: any, propertyName: string | Symbol) {
		console.log('Property decorator1');
		console.log(target, propertyName);
	}

	function Logger2(target: any, propertyName: string | Symbol) {
		console.log('Property decorator2');
		console.log(target, propertyName);
	}

	class Product {
		@Logger1
		title: string;
		@Logger2
		name: string;
		private _price: number;

		set price(price: number) {
			if (price > 0) {
				this._price = price;
			} else {
				throw new Error('Price Shoud be positive');
			}
		}

		constructor(name: string, title: string, price: number) {
			this.title = title;
			this.name = name;
			this._price = price;
			console.log('make Product contructor');
		}

		getPriceWithTax(tax: number) {
			return this._price * (1 + tax);
		}
	}

	new Product('Tom', 'desk', 30000);
}
