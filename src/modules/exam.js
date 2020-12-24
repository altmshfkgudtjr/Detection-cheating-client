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
		return true;
	}).catch(e => {
		dispatch(newSnackbar("잠시 후 시도해주세요", "warning"));
		return false;
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
	selected_student: {
		student_number: 0,
		name: '',
		video_path: '',
		audio_path: '',
		state: 'notyet',
		reason: '',
		network_result: [],
		audio_result: [],
		audio_messages: [],
		audio_playtime: 0,
		audio_img_path: '/images/waveform.png',
		eye_result: '0',
		eye_ratio: {
			left: 0,
			right: 0,
			center: 0,
			blink: 0
		},
		time_range: [['0'], ['0']]
	},
	student_list: [	]
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