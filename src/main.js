import './libs/i18n.js'
import './pages/page-main.js'

export const main = new class {
	constructor() {
		this.path = location.pathname
		this.isContinue = true
	}

	init() {
		this.loadingDOM()

		this.connectRoute()
	}

	// Init functions

	connectRoute() {
		const pathName = this.path.split(`/`)[1] || `main`
		const isRoute = [`login`]

		if (isRoute.includes(pathName)) {
			this.renderPage(`page-${pathName}`, this.path)
			return
		}
		this.otherwise()
	}

	otherwise() {
		this._onLoad(() => history.replaceState({}, null, `/`))
		this.renderPage(`page-main`, this.path)
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
