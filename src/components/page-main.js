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
		${style}
		<div id="pageMain">			
			${i18next.t(`APP_NAME`)}
        </div>
        `
	}
}

const style = html`
<style>	
#pageMain {
	display: grid;
	margin: 0 auto;
}
</style>
`

customElements.define(`page-main`, PageMain)
