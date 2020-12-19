import produce from 'immer';
import * as examAPI from 'controllers/exam'
import { newSnackbar } from 'modules/snackbar'

/*
	Thunk Actions
*/
export const submitExam = (id, pw, pcapngFile, videoFile) => dispatch => {
	return examAPI.SubmitExam(id, pw, pcapngFile, videoFile).then(data => {
		dispatch(newSnackbar("제출이 완료되었습니다", "success"));
	}).catch(e => {
		dispatch(newSnackbar("잠시 후 시도해주세요", "warning"));
	})
}

export const getStudent = (id) => dispatch => {
	return examAPI.GetStudentExam(id).then(data => {
		dispatch(setStudent(data));
	}).catch(e => {
		dispatch(newSnackbar("잠시 후 시도해주세요", "warning"));
	});
}

export const getStudentList = () => dispatch => {
	return examAPI.GetStudentExam().then(data => {
		dispatch(setStudentList(data));
	}).catch(e => {
		dispatch(newSnackbar("잠시 후 시도해주세요", "warning"));
	});
}


/*
	Actions
*/
const SET_STUDENT = 'exam/SET_STUDENT';
const SET_STUDENT_LIST = 'exam/SET_STUDENT_LIST';

export const setStudent = (data) => ({ type: SET_STUDENT, payload: data });
export const setStudentList = (data) => ({ type: SET_STUDENT_LIST, payload: data });


/*
	InitialState
*/
const initialState = {
	selected_student: null,
	student_list: []
};


/*
	Reducer
*/
function exam(state = initialState, action) {
	switch(action.type) {
		case SET_STUDENT:
			return produce(state, draft => {
				draft.selected_student = action.payload;
			});

		case SET_STUDENT_LIST:
			return produce(state, draft => {
				draft.student_list = action.payload;
			})

		default:
			return state;
	}
}

export default exam