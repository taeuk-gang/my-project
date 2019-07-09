import { html } from 'lit-html'

import LitRender from '../libs/litRender'

export class LoginForm extends LitRender(HTMLElement) {
	constructor() {
		super()

		this._handlers = {}

		this.attachShadow({ mode: `open` })
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
@import url(/src/css/foundation.min.css);

.sign-in-form {
  padding: 1rem 1.5em;
  border-radius: .5rem;
  background-color: #3d454f;
  max-width: 320px;
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
  -webkit-transition: all ease .4s;
  transition: all ease .4s;
}

.sign-in-form-button {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 30px;
  border: 1px solid #fff;
  color: #fff;
  background-color: transparent;
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 100%;
  padding: 1rem;
  -webkit-transition: all ease .4s;
  transition: all ease .4s;
}

.sign-in-form-button:hover {
  background-color: #44c8ed;
  border-color: #44c8ed;
}
</style>
`

customElements.define(`login-form`, LoginForm)
