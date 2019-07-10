import { html } from 'lit-html'

import LitRender from '../libs/litRender'

import './login-form.js'

class LoginMain extends LitRender(HTMLElement) {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })

		this.invalidate()
	}

	render() {
		return html` 
		${style}
		<div id="pageLogin">
			<login-form />
        </div>
        `
	}
}

const style = html`
<style>
#pageLogin {
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

customElements.define(`login-main`, LoginMain)
