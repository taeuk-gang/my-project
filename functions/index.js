const functions = require(`firebase-functions`)
const admin = require(`firebase-admin`)
const express = require(`express`)
const cors = require(`cors`)

admin.initializeApp(functions.config().firebase)

const app = express()

const whiteList = [`https://taeuk-project.web.app`, `localhost`]

app.use(cors({
	origin: (origin, callback) => {
		if (whiteList.indexOf(origin) === -1) {
			callback(null, true)
		} else {
			callback(new Error(`Not allowed by CORS`))
		}
	},
}))

app.get(`/test`, (req, res) => {
	if (!req.xhr) {
		res.send(`ONLY REQUEST AJAX`)
	}
    
	res.send(`TEST CODE`)
})

exports.server = functions.https.onRequest(app)

/* Firebase */
// const cors = require(`cors`)({
// 	origin: true,
// })

// exports.func = functions.https.onRequest((request, response) => {
// 	cors(request, response, () => {

// 	})
// })
