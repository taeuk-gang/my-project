import { storiesOf } from '@storybook/polymer'
// import { document } from 'global'
import '../components/App.js'
import '../components/Login.js'

storiesOf(`App`, module)
	.add(`app-main`, () => `<app-main></app-main>`)
	.add(`login-main`, () => `<login-main></login-main>`)
	.add(`login-form`, () => `<login-form></login-form>`)

// storiesOf(`Demo`, module)
// 	.add(`heading`, () => `<h1>Hello World</h1>`)
// 	.add(`button`, () => {
// 		const button = document.createElement(`button`)
// 		button.type = `button`
// 		button.innerText = `Hello Button`
// 		button.addEventListener(`click`, e => console.log(e))
// 		return button
// 	})
