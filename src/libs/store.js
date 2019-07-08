import createStore from './redux-zero.js'

const initialState = { route: ``, info: [] , /* example */ todoList: [] }
const store = createStore(initialState)

export default store
