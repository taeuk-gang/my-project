import { html } from 'lit-html'

import LitRender from '../libs/litRender'
// import store from '../libs/store'
import {
	getData,
} from '../libs/actions'

import './exam-element.js'

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
		<link rel="stylesheet" type="text/css" href="./src/css/App.css">
		<main>
			<exam-element />			
		</main>
        `
	}
}

customElements.define(`app-main`, AppMain)
