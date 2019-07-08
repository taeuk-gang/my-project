import { html } from 'lit-html'

import LitRender from '../libs/litRender'
import Model from '../libs/model-two-way-bind.js'

class TwoWayBinding extends LitRender(HTMLElement) {
	constructor() {
		super()

		this._handlers = {}

		this.attachShadow({ mode: `open` })

		this.twoWayBind()

		this.invalidate(true)		
	}

	connectedCallback() {
		// const root = this.shadowRoot
		// const handlers = this._handlers	
	}

	disconnectedCallback() {
		// const root = this.shadowRoot
	}

	twoWayBind() {		
		this.timer = setInterval(this.onTick.bind(this), 1000)
		this.renderFunc = this.invalidate.bind(this)
		this.model = new Model(this.onChangeHandler.bind(this))
		this.requestRender = 0
	}

	// prop, oldValue, newValue 사용 가능
	onChangeHandler() {
		if (this.requestRender) {
			cancelAnimationFrame(this.requestRender)
		}
	
		this.requestRender = requestAnimationFrame(this.renderFunc)
	}

	onTick() {
		const now = new Date()
		this.model.hours = now.getHours()
		this.model.minutes = now.getMinutes()
		this.model.seconds = now.getSeconds()
	}

	render() {
		const { hours, minutes, seconds } = this.model
		return html`		
		<link rel="stylesheet" type="text/css" href="./src/css/two-way-binding.css">
    	<div class="two-way-binding">
			${hours} : ${minutes} : ${seconds}
		</div>
    	`
	}
}

customElements.define(`two-way-binding`, TwoWayBinding)
