import './libs/i18n.js'
import store from './libs/store.js'

import './pages/page-main.js'

export const main = new class {
	constructor() {
		this.path = location.pathname
		this.isContinue = true
	}

	init() {
		// this.firebaseInit()

		this.connectRoute()
	}

	// Init functions

	firebaseInit() {
		firebase.initializeApp({
			apiKey: `AIzaSyALQwyOdDBBZQsqh0IBnu8DfmlgPOnbIOU`,
			authDomain: `taeuk-project.firebaseapp.com`,
			databaseURL: `https://taeuk-project.firebaseio.com`,
			projectId: `taeuk-project`,
			storageBucket: `taeuk-project.appspot.com`,
			messagingSenderId: `1039842449748`,
			appId: `1:1039842449748:web:9e2e73fdbd4ec509`,
		})
	}

	connectRoute(pathName = this.path.split(`/`)[1] || `main`) {
		const isRoute = () => Object.keys(store.getState().router).includes(pathName)

		if (isRoute()) {
			this.renderPage(`page-${pathName}`, `/${this.pathName}`)
			return
		}
		this.otherwise()
	}

	otherwise() {
		this._onLoad(() => history.replaceState({}, null, `/`))
		this.renderPage(`page-main`, `/`)
	}

	// Functions

	_onLoad(callback) {
		window.addEventListener(`load`, () => {			
			callback()
		})
	}

	loadingDOM() {
		const root = document.querySelector(`#root`)
		const loading = document.createElement(`div`)
		loading.textContent = `로딩 중...`
				
		this.emptyDOM()
		loading.classList.add(`loading`)
		root.appendChild(loading)
	}

	renderPage(pageName, path) {		
		this.emptyDOM()
		const pageElement = document.createElement(pageName)
		document.querySelector(`#root`).appendChild(pageElement)
		history.pushState({}, pageName, path)
	}	

	emptyDOM() {
		document.querySelector(`#root`).innerHTML = ``	
	}

	isIE() {		
		return navigator.userAgent.includes(`Trident`) || navigator.userAgent.includes(`MSIE`)
	}
}

main.init()
