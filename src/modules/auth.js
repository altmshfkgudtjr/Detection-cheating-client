import produce from 'immer';
import * as authAPI from 'controllers/auth'
import { newSnackbar } from 'modules/snackbar'

/*
	Thunk Actions
*/
export const sejongOAuth = (id, pw) => dispatch => {
	return authAPI.SejongOAuth(id, pw)
	.then(res => {
		if (res) {
			dispatch(newSnackbar("인증이 완료되었습니다", "success"));
			dispatch(setAuth(id, pw));
			return true;
		} else {
			dispatch(newSnackbar("잘못된 학번 또는 암호입니다", "error"));
			return false;
		}
	}).catch(e => {
		dispatch(newSnackbar("잠시 후 시도해주세요", "warning"));
		return false;
	});
};

export const managerLogin = (id, pw) => dispatch => {
	return authAPI.ManagerLogin(id, pw)
	.then(res => {
		if (res) {
			dispatch(newSnackbar("반갑습니다", "success"));
			dispatch(setLogin());
			return true;
		} else {
			dispatch(newSnackbar("잘못된 아이디 또는 암호입니다", "success"));
			return false;
		}
	}).catch(e => {
		dispatch(newSnackbar("잠시 후 시도해주세요", "warning"));
		return false;
	});
}


/*
	Actions
*/
const SET_LOGIN = 'auth/SET_LOGIN';
const SET_LOGOUT = 'auth/SET_LOGOUT';
const SET_AUTH = 'auth/SET_AUTH';

export const setLogin = (value) => ({ type: SET_LOGIN });
export const setLogout = (value) => ({ type: SET_LOGOUT });
// TODO: id, pw 인증 절차를 JWT로 바꾸기
export const setAuth = (id, pw) => ({ type: SET_AUTH, payload: {id, pw} });


/*
	InitialState
*/
const initialState = {
	manager_value: false,
	auth: {
		id: null,
		pw: null
	}
};


/*
	Reducer
*/
function auth(state = initialState, action) {
	switch(action.type) {
		case SET_LOGIN:
			return produce(state, draft => {
				draft.manager_value = true;
			});

		case SET_LOGOUT:
			return produce(state, draft => {
				draft.manager_value = false;
			});

		case SET_AUTH:
			return produce(state, draft => {
				draft.auth.id = action.payload.id;
				draft.auth.pw = action.payload.pw;
			});

		default:
			return state;
	}
}

export default auth