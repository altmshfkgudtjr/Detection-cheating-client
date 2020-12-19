import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';
// Reducers
import modal from 'modules/modal'
import auth from 'modules/auth'
import exam from 'modules/exam'
import snackbar from 'modules/snackbar'

/* 
	Combine Reducers
*/
const reducers = combineReducers({
	modal,
	auth,
	exam,
	snackbar
});

/* 
	Create Store
*/
const store = createStore(
	reducers,
	applyMiddleware(ReduxThunk)
);

export default store