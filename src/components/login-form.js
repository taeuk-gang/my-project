import { html } from 'lit-html'

import LitRender from '../libs/litRender'
// import store from '../libs/store'
import { countAdd } from '../libs/actions'

const css = new CSSStyleSheet()
css.replace(`@import url(/src/css/foundation.min.css)`)

export class LoginForm extends LitRender(HTMLElement) {
	constructor() {
		super()

		this._handlers = {}

		this.attachShadow({ mode: `open` })
		this.shadowRoot.adoptedStyleSheets = [css]
		this.invalidate(true)
	}

	connectedCallback() {
		// const root = this.shadowRoot
		// const handlers = this._handlers

		// handlers.onClick = this._onClick.bind(this)				
		
		// root.addEventListener(`click`, handlers.onClick)		
	}

	disconnectedCallback() {
		// const root = this.shadowRoot

		// root.removeEventListener(`click`, this._handlers.onClick)
	}

	_onClick() {
		countAdd()
		this.invalidate(true)
	}

	render() {
		return html`
		${style}
    	<form>
            <div class="sign-in-form">
                <h4 class="text-center">Sign In</h4>
                <label for="sign-in-form-username">Username</label>
                <input type="text" class="sign-in-form-username" id="sign-in-form-username" placeholder="ID"/>
                <label for="sign-in-form-password">Password</label>
                <input type="text" class="sign-in-form-password" id="sign-in-form-password" placeholder="PW"/>
                <button type="submit" class="sign-in-form-button">Sign In</button>
            </div>
        </form>
    	`
	}
}

const style = html`
<style>
.sign-in-form {
  padding: 1rem 1.5em;
  border-radius: .5rem;
  background-color: #3d454f;
}

.sign-in-form h4 {
  color: white;
  margin-bottom: 1rem;
  font-weight: 600;
  text-transform: uppercase;
}

.sign-in-form label {
  text-transform: uppercase;
  color: #adadad;
  letter-spacing: 1px;
  font-weight: 600;
  margin-bottom: 1rem;
}

.sign-in-form input {
  color: #666;
}

.sign-in-form input:focus {
  opacity: 0.9;
}

.sign-in-form-username,
.sign-in-form-password {
  border-radius: 30px;
  border: none;
  transition: all ease .4s;
}

.sign-in-form-button {
  box-sizing: border-box;
  border-radius: 30px;
  border: 1px solid #fff;
  color: #fff;
  background-color: transparent;
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 100%;
  padding: 1rem;
  transition: all ease .4s;
}

.sign-in-form-button:hover {
  background-color: #44c8ed;
  border-color: #44c8ed;
}
</style>
`

customElements.define(`login-form`, LoginForm)
