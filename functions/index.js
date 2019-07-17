const functions = require(`firebase-functions`)
const admin = require(`firebase-admin`)

admin.initializeApp(functions.config().firebase)

const cors = require(`cors`)({
	origin: true,
})


exports.isAdmin = functions.https.onRequest((request, response) => {
	cors(request, response, () => {
		const crypto = require(`crypto`)	
		crypto.pbkdf2(request.body.password, functions.config().admin.salt, 100000, 64, `sha512`, (err, key) => {
			if (err) {
				console.error(err)
			}
	
			if (!isCorrectID()) {
				response.json({
					result: false,
				})
			}
			
			response.json({
				result: functions.config().admin.hashpwd === key.toString(`base64`),
			})
		})
	})
	
	function isCorrectID() {
		return request.body.id === functions.config().admin.id
	}
})

exports.isLogin = functions.https.onRequest((request, response) => {
	cors(request, response, () => {

	})
})
