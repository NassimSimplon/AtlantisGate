import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"
import {playListReducer} from './cours/reducer'
import {contactReducer} from './Contact/Reducer'
import {signInReducer} from './SignIn/Reducer'

const all = combineReducers({
    playListStore:playListReducer,
    contactStore: contactReducer,
    signInStore :signInReducer
    
})
const store = createStore(all,applyMiddleware(thunk))
export default store