import { html } from 'lit-html'

import LitRender from '../libs/litRender'
import { movePage } from '../libs/actions' 

class AppMain extends LitRender(HTMLElement) {
	constructor() {
		super()
    
		this._handlers = {}

		this.attachShadow({ mode: `open` })
		this.invalidate()	
	}
  
	connectedCallback() {
		const root = this.shadowRoot
		const handlers = this._handlers

		handlers.onClick = this._onClick.bind(this)
    
		root.addEventListener(`click`, handlers.onClick)
	}

	disconnectedCallback() {
		const root = this.shadowRoot

		root.removeEventListener(`click`, this._handlers.onClick)
	}  
  
	_onClick(event) {
		const loginBtn = event.target.classList.contains(`logout`)
    
		if(loginBtn) {
			movePage(`login`)
		}		
	}

	render() {
		return html` 
    <link rel="stylesheet" type="text/css" href="/src/css/foundation.min.css">
		${style}
		<div class="page-main">
			<div class="hero-full-screen">
				<div class="top-content-section">
					<div class="top-bar">
						<div class="top-bar-left">
							<ul class="menu">
								<li class="menu-text"><img src="http://placehold.it/75x30" alt="logo"></li>
								<li><a href="#">Menu</a></li>
							</ul>
						</div>
					</div>
				</div>

				<div class="middle-content-section">
					<h1>Main Page</h1>
					<button class="button large logout">Logout</button>
				</div>

				<div class="bottom-content-section" data-magellan data-threshold="0">
					<a href="#main-content-section"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18.005-1.568l1.415-1.414 4.59 4.574 4.579-4.574 1.416 1.414-5.995 5.988-6.005-5.988z"/></svg></a>
				</div>
			</div>
			<div id="main-content-section" data-magellan-target="main-content-section"></div>
		</div>
        `
	}
}

const style = html`
<style>
.hero-full-screen {
  width: 100vw;
  height: 100vh;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
  background: url("https://images.pexels.com/photos/378273/pexels-photo-378273.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb") center center no-repeat;
  background-size: cover;
}

.hero-full-screen .middle-content-section {
  text-align: center;
  color: #fefefe;
}

.hero-full-screen .top-content-section {
  width: 100%;
}

.hero-full-screen .bottom-content-section {
  padding: 1rem;
}

.hero-full-screen .bottom-content-section svg {
  height: 3.75rem;
  width: 3.75rem;
  fill: #fefefe;
}

.hero-full-screen .top-bar {
  background: transparent;
}

.hero-full-screen .top-bar .menu {
  background: transparent;
}

.hero-full-screen .top-bar .menu-text {
  color: #fefefe;
}

.hero-full-screen .top-bar .menu li {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
}

.hero-full-screen .top-bar .menu a {
  color: #fefefe;
  font-weight: bold;
}
</style>
`

customElements.define(`app-main`, AppMain)
