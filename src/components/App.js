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
            
            <section>
            	<exam-element></exam-element>
            </section>
        `
	}
}

customElements.define(`app-main`, AppMain)
