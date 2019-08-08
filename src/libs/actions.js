import store from './store'
import { Main } from '../main.js'

function actionCreator(action) {
	return function() {
		let state = store.getState()
		state = action(state, ...arguments)
		store.setState(state)
	}
}

// ===================================================== Test code

export const countAdd = actionCreator(state => {
	state.info.count === undefined
		? state.info.count = 0
		: state.info.count++
	return state
})

export const getData = actionCreator(state => {
	const db = firebase.firestore()

	db.collection(`TEST`).get().then(querySnapshot => {
		querySnapshot.forEach(doc => {
			console.info(doc.id, doc.data())
		})
	})
	
	return state
})

// ===================================================== Login

export const signup = actionCreator((state, _id ,_pwd) => {
	const xhr = new XMLHttpRequest()

	if(!xhr) {
		throw new Error(`XHR 호출 불가`)
	}

	xhr.open(`POST`, `https://us-central1-taeuk-project.cloudfunctions.net/isAdmin`)
	xhr.setRequestHeader(`Content-type`, `application/x-www-form-urlencoded`)
	xhr.addEventListener(`readystatechange`, () => {
		if (xhr.readyState === xhr.DONE) {
			if (xhr.status === 200 || xhr.status === 201) {
				firebase.auth().signInAnonymously().catch(error => {
					const errorCode = error.code
					const errorMessage = error.message
					console.error(errorCode, errorMessage)
				})
				moveMainPage(JSON.parse(xhr.responseText).result)
				state.login = true
				store.setState(state)
			}
		}
	})
	xhr.send(`id=${_id}&password=${_pwd}`)


	return state
})

function moveMainPage(isLogin = false) {
	if (isLogin) {
		Main.renderPage(`app-main`, `/`)
	}
}

export const movePage = actionCreator((state, page) => {
	Main.renderPage(`${page}-main`, page)
	return state
})

export const login = actionCreator(state => {
	firebase.auth().onAuthStateChanged(user => {
		if (user) {
			const isAnonymous = user.isAnonymous
			const uid = user.uid

			console.info(isAnonymous, uid)
			state.login = true
			store.setState(state)
		} else {
			state.login = false
			store.setState(state)
		}
	})

	return state
})

// ===================================================== Router

export const renderHtml = actionCreator((state, html) => {
	const app = document.querySelector(`app-main`).shadowRoot.querySelector(`main`)

	app.innerHTML = html

	return state
})

export const get = actionCreator((state, url) => new Promise((resolve, reject) => {
	const req = new XMLHttpRequest()
	req.open(`GET`, url)
	req.send()
  
	req.onreadystatechange = function () {
		if (req.readyState === XMLHttpRequest.DONE) {
			if (req.status === 200) {
				resolve(req.response)
			} else {
				reject(req.statusText)
			}
		}
	}
}))

export const loadXhr = actionCreator((state, url, callback) => {
	const xhr = new XMLHttpRequest()

	if(!xhr) {
		throw new Error(`XHR 호출 불가`)
	}

	xhr.open(`GET`, url)
	xhr.setRequestHeader(`x-requested-with`, `XMLHttpRequest`)
	xhr.addEventListener(`readystatechange`, () => {
		if (xhr.readyState === xhr.DONE) {				
			if (xhr.status === 200 || xhr.status === 201) {
				callback(xhr.responseText)
			}
		}
	})
	xhr.send()
	return state
})
