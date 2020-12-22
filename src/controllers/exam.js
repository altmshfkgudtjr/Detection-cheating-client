import Fetch from 'controllers/fetch'

export const SubmitExam = (id, pw, pcapngFile, videoFile) => {
	const sendData = new FormData();
	sendData.append('id', id);
	sendData.append('pw', pw);
	sendData.append('pcapng', pcapngFile);
	sendData.append('mp4', videoFile);

	return Fetch('/api/exam', 'POST', sendData, true).then(res => {
		if (res.state === 'success') {
			return res.result;
		} else {
			return Promise.reject();
		}
	});
}

export const GetStudentExam = (id=null) => {
	const url = id
		? `/api/student/${id}`
		: `/api/student/`
	;

	return Fetch(url, 'GET').then(res => {
		if (res.state === 'success') {
			return res.result;
		} else {
			return Promise.reject();
		}
	});
}

export const ScroeExam = (student_number, pass, reason) => {
	const sendData = { student_number, pass };

	return Fetch('/api/score', 'POST', sendData).then(res => {
		if (res.state === 'success') {
			return res.result;
		} else {
			return Promise.reject();
		}
	});
}