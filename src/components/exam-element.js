import { html } from 'lit-html'

import LitRender from '../libs/litRender'
import store from '../libs/store'
import { countAdd } from '../libs/actions'

export class ExamElement extends LitRender(HTMLElement) {
	constructor() {
		super()

		this._handlers = {}

		this.attachShadow({ mode: `open` })
		this.invalidate(true)
	}

	connectedCallback() {
		const root = this.shadowRoot
		const handlers = this._handlers

		handlers.onClick = this._onClick.bind(this)				
		
		root.addEventListener(`click`, handlers.onClick)		
	}

	disconnectedCallback() {
		const root = this.shadowRoot

		root.removeEventListener(`click`, this._handlers.onClick)
	}

	_onClick() {
		countAdd()
		this.invalidate(true)
	}

	render() {
		return html`
		<!-- ${style} -->
		<link rel="stylesheet" type="text/css" href="./src/css/exam-element.css">
    	<div class="exam-element">
			<span class="test-btn">TEST: ${store.getState().info.count}</span>
		</div>
    	`
	}
}

const style = html`
  <style>
    .exam-element {
		display: grid;
		grid-auto-rows: auto auto;
		height: auto;
		width: 300px;	
		background-color: #EEEEEE;
	}
	
	.test-btn {
		border: 1px solid black;
    	border-bottom: 0;
	}
  </style>
`

customElements.define(`exam-element`, ExamElement)
