import './libs/i18n.js'
import './components/page-main.js'

export const main = new class {
	constructor() {
		this.path = location.pathname
		this.isContinue = true
	}

	init() {
		this.loadingDOM()

		this.isRoute()
			.otherwise()
			.pushUrl()
	}

	// Init functions

	isRoute() {
		if (!this.isContinue) {
			return this
		}

		const pathName = this.path.split(`/`)[1] || `main`
		this.renderPage(`page-${pathName}`, this.path)
		this.isContinue = false
		return this
	}

	otherwise() {
		if (!this.isContinue) {
			return this
		}

		this._onLoad(() => history.replaceState({}, null, `/`))
		this.renderPage(`page-main`, this.path)
		this.isContinue = false
		return this
	}

	pushUrl() {
		if(!this.isContinue) {
			return this
		}

		this._onLoad(() => history.pushState({}, null, this.path))
		return this
	}

	// Functions

	_onLoad(callback) {
		window.addEventListener(`load`, () => {			
			callback()
		})
	}

	loadingDOM() {
		const root = document.querySelector(`main`)
		const loading = document.createElement(`div`)
				
		this.emptyDOM()
		loading.classList.add(`loading`)
		for (let i=0; i < 5; i++) {
			loading.appendChild(document.createElement(`span`))
		}
		root.appendChild(loading)
	}

	renderPage(pageName, path) {		
		this.emptyDOM()
		const pageElement = document.createElement(pageName)
		document.querySelector(`main`).appendChild(pageElement)
		history.pushState({}, pageName, path)
	}	

	emptyDOM() {
		document.querySelector(`main`).innerHTML = ``	
	}
}

main.init()
