console.clear()

// Функции, которые используются для примера:
// getProducts => список продуктов

// getBasket => возвращает состояние корзины
// clearBasket => очистить корзину

// addProductToBasket => добавить продукт в корзину
// removeProductToBasket => удалить товар из корзины

// -------------------------------------------------------------------

/*
	Образец синхронного кода
	(выполняется последовательно строка за строкой,
	следующая строка не выполнится
	пока не завершится выполнение предыдущей).
*/

// console.log('start')
// let basket = []

// // Sync - объект, в котором все функции выполняются синхронно.
// // Запросить состояние корзины синхронно:
// basket = Sync.getBasket()
// console.table(basket)

// // Запросить список продуктов синхронно:
// const products = Sync.getProducts()
// console.table(products)

// // Добавить товар в корзину синхронно:
// basket = Sync.addProductToBasket(products[0])
// console.table(basket)

// // Добавить товар в корзину синхронно:
// basket = Sync.addProductToBasket(products[1])
// console.table(basket)
 
// console.log('finish')

// -------------------------------------------------------------------
// Для выполнения кода асинхронно придумали callback'и.

// console.log('start')
// let basket = []

// /*
// 	При использовании Callback браузер не будет ждать,
// 	когда выполнится функция getBasket().
// 	Для того чтобы обработать то, что вернёт функция getBasket(),
// 	придумали callback'и.
// 	callback = function (это одно и то же).
// 	Но callback - такая функция, которая передается в качестве аргумента.
// 	Аргумент функции, которую передали в getBasket - то, что возвращает метод.
// 	Callback - объект, в котором все функции выполняются
// 	с использованием callback-обработчика.
// */

// // Callback.getBasket(function (basket) {
// // 	console.table(basket)
// // })

// // или

// // Callback.getBasket(getBasketCallback)

// // function getBasketCallback (basket) {
// // 	console.table(basket)
// // }

// // -------------------------------------------------------------------


// 	Вложенная функция, которая должна быть обработчиком,
// 	становится всё больше и больше.
// 	Растет уровень вложенности.
// 	Проблема множества вложенных callback'ов называется Callback hell.
// 	Код становится более горизонтальным, нежели вертикальным,
// 	и нечитаемым.


// Callback.getBasket(function (basket) {
// 	console.table(basket)

// 	// отрисовка изменений корзины
// 	// подсчет суммарной стоимости
// 	/*
// 		много кода...
// 	*/

// 	// getProducts будет вызван асинхронно.
// 	Callback.getProducts(function (products) {
// 		console.table(products)

// 		// отрисовка изменений корзины
// 		// подсчет суммарной стоимости
// 		/*
// 			много кода...
// 		*/

// 		Callback.addProductToBasket(products[0], function (basket) {
// 			console.table(basket)

// 			// отрисовка изменений корзины
// 			// подсчет суммарной стоимости
// 			/*
// 				много кода...
// 			*/

// 			Callback.addProductToBasket(products[0], function (basket) {
// 				console.table(basket)

// 				// отрисовка изменений корзины
// 				// подсчет суммарной стоимости
// 				/*
// 					много кода...
// 				*/
// 			})
// 		})
// 	})
// })

// console.log('finish')

// console.log('Another work')

// -------------------------------------------------------------------

/*
	Следующий шаг эволюции - Promise'ы.
	При них получается писать линейный, вертикальный код.
	Понятно, что за чем идёт.
*/

// console.log('start')

// /*
// 	Создать promise (обещание), и когда он выполнится,
// 	выполнить функцию then().
// 	Теперь обработчик события нужно писать через then(),
// 	а не передавать в функцию.
// 	В then() передается функция.
// 	then() всегда возвращает Promise.
// */

// let basket = []
// let products = []

// ByPromise.getBasket()

// 	.then(_basket => {
// 		basket = _basket
// 		console.table(basket)

// 		// return ByPromise.getProducts()
// 		throw Error('some error')
// 	})
// 	/*
// 		Следующий then() навешивает ещё один обработчик,
// 		который будет отрабатываться после выполнения метода getProducts().
// 	*/
// 	.then(_products => {
// 		products = _products
// 		console.table(products)

// 		return ByPromise.addProductToBasket(products[2])
// 	})

// 	.then(_basket => {
// 		basket = _basket
// 		console.table(basket)
	
// 		return ByPromise.addProductToBasket(products[3])
// 	})

// 	.then(_basket => {
// 		basket = _basket
// 		console.table(basket)
	
// 		return ByPromise.addProductToBasket(products[1])
// 	})

// 	.then(_basket => {
// 		basket = _basket
// 		console.table(basket)
	
// 		return 5
// 	})

// 	.then(value => {
// 		console.log(value) // выведет 5
// 	})
// 	/*
// 		Если на любом из этапов возникнет ошибка, она попадёт в блок catch().
// 		Если ошибок не возникнет, catch() проигнорируется.
// 	*/
// 	.catch(err => {
// 		console.log(err)
// 	})

// console.log('finish')

// console.log('work')

// -------------------------------------------------------------------

/*
	Следующий этап эволюции - запись похожая на синхронный код.
	Пишем синхронно асинхронный код.
	Актуальный способ на данный момент (2019 год).
*/

console.log('start')

main()

console.log('finish')

async function main () {
	/*
		Здесь внутри async функции код выполняется синхронно.
		При встрече конструкции await интерпретатор ждет,
		когда выполнится promise по await'у.
		В это время продолжает выполняться код вне этой самой async функции.
		Затем, когда код внутри await вернет результат,
		он подставится вместо этой самой конструкции await,
		и код внутри этой самой async функции
		продолжит синхронно выполняться далее.
	*/
	let basket = await ByPromise.getBasket()
	console.table(basket)

	const products = await ByPromise.getProducts()
	console.table(products)

	/*
		Подождать, пока выполнятся все promise'ы, которые внутри Promise.all().
		Притом неважно, в какой очередности они будут выполняться.
	*/
	await Promise.all([
		basket = await ByPromise.addProductToBasket(products[0]),
		basket = await ByPromise.addProductToBasket(products[1]),
		basket = await ByPromise.addProductToBasket(products[2]),
		basket = await ByPromise.addProductToBasket(products[3])
	])

	basket = await ByPromise.getBasket()
	console.table(basket)
}