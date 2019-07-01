import { html } from 'lit-html'

import LitRender from '../libs/litRender'
import store from '../libs/store'
import { countAdd } from '../libs/actions'

class ExamElement extends LitRender(HTMLElement) {
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
		console.info(`before: `, store.getState().info)
		countAdd()
		console.info(`after: `, store.getState().info)
	}

	render() {
		return html`
    	${style}
    	<div class="exam-element"></div>
    	`
	}
}

const style = html`
  <style>
    .exam-element {
      display: block;
      width: 300px;
      height: 100px;
      border: 1px solid black;
	  background-color: #EEEEEE;
    }
  </style>
`

customElements.define(`exam-element`, ExamElement)
