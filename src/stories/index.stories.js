import { storiesOf } from '@storybook/polymer'
// import { document } from 'global'
<<<<<<< HEAD
import '../components/page-main.js'

storiesOf(`Page`, module)
	.add(`page-main`, () => `<page-main></page-main>`)
=======
import '../components/App.js'
import '../components/Login.js'

storiesOf(`App`, module)
	.add(`app-main`, () => `<app-main></app-main>`)
	.add(`login-main`, () => `<login-main></login-main>`)
	.add(`login-form`, () => `<login-form></login-form>`)
>>>>>>> f59ad0b49c8dd1970508b2f41ea8d11720885eb6

// storiesOf(`Demo`, module)
// 	.add(`heading`, () => `<h1>Hello World</h1>`)
// 	.add(`button`, () => {
// 		const button = document.createElement(`button`)
// 		button.type = `button`
// 		button.innerText = `Hello Button`
// 		button.addEventListener(`click`, e => console.log(e))
// 		return button
// 	})
