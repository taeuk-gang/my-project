import { html } from 'lit-html'

import LitRender from '../libs/litRender'
// import store from '../libs/store'
import {
	getData,
} from '../libs/actions'

import './login-form.js'

class AppMain extends LitRender(HTMLElement) {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })

		this.invalidate()
	}

	connectedCallback() {
		this.getData()
	}

	getData() {
		getData()
	}

	render() {
		return html` 
		${style}
		<main>
			<login-form />		
		</main>
        `
	}
}

const style = html`
<style>
main {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	width: 95vw;
	height: 98vh;
	margin: auto;
}
</style>
`

customElements.define(`app-main`, AppMain)
