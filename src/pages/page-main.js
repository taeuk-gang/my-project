import { LitElement, html, css } from 'lit-element'

import i18next from 'i18next'

export class PageMain extends LitElement {
	static get styles() {        
		return css`
		
		`
	}

	static get properties() {
		return {
			prop1: String,
		}
	}
	
	constructor() {
		super()
	}

	render() {
		return html`		
		<div id="pageMain">			
			${i18next.t(`APP_NAME`)}
        </div>
        `
	}
}

customElements.define(`page-main`, PageMain)
