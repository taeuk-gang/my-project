import createStore from 'redux-zero'

const initialState = { route: ``, info: [] , /* example */ todoList: [] }
const store = createStore(initialState)

export default store
