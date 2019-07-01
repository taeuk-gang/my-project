import { html } from 'lit-html'

import LitRender from '../libs/litRender'
// import store from '../libs/store'
import {
	add
} from '../libs/actions'

import './exam-element'

class AppMain extends LitRender(HTMLElement) {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })

		this.invalidate()
	}

	add(title) {
		add(title)
	}

	render() {
		return html` 
		${style}           
		<main>
			<exam-element />
		</main>
        `
	}
}

const style = html`
<style>
 main {
	display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
 }
</style>
`

customElements.define(`app-main`, AppMain)
