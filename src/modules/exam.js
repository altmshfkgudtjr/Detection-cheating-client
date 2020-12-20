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
		return true;
	}).catch(e => {
		dispatch(newSnackbar("잠시 후 시도해주세요", "warning"));
		return false;
	});
}

export const getStudentList = () => dispatch => {
	return examAPI.GetStudentExam().then(data => {
		dispatch(setStudentList(data));
	}).catch(e => {
		dispatch(newSnackbar("잠시 후 시도해주세요", "warning"));
	});
}

export const scoreExam = (id, pass, reason) => dispatch => {
	return examAPI.ScroeExam(id, pass, reason).then(data => {
		dispatch(newSnackbar("평가가 완료되었습니다", "success"));
		dispatch(getStudentList());
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
	student_list: [
		{
			student_number: 12345678,
			name: '홍길동',
			video_path: '',
			audio_path: '',
			state: 'pass',
			reason: '',
			network_result: [],
			audio_result: [],
			audo_img_path: '',
			eye_result: true
		},
		{
			student_number: 18000011,
			name: '김철수',
			video_path: '',
			audio_path: '',
			state: 'notyet',
			reason: '',
			network_result: [],
			audio_result: [],
			audo_img_path: '',
			eye_result: true
		},
		{
			student_number: 13210013,
			name: '김영희',
			video_path: '',
			audio_path: '',
			state: 'rejected',
			reason: '',
			network_result: [],
			audio_result: [],
			audo_img_path: '',
			eye_result: true
		}
	]
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