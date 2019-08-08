import { html } from 'lit-html'

import LitRender from '../libs/litRender'
import i18next from 'i18next'

export class PageMain extends LitRender(HTMLElement) {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })

		this.invalidate()
	}

	render() {
		return html`
		<link rel="stylesheet" type="text/css" href="/src/css/style.css">
		<div id="pageMain">			
			${i18next.t(`APP_NAME`)}
        </div>
        `
	}
}

customElements.define(`page-main`, PageMain)
