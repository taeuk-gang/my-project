import { html } from 'lit-html'

import LitRender from '../libs/litRender'

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
			INIT
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
