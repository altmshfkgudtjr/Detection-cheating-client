import Fetch from 'controllers/fetch'

export const SejongOAuth = (id, pw) => {
	const sendData = { id, pw };
	return Fetch('/api/sejong', 'POST', sendData).then(res => {
		if (res.state === 'success') {
			return res.result;
		} else {
			return Promise.reject();
		}
	});
}

export const ManagerLogin = (id, pw) => {
	const sendData = { id, pw };
	return Fetch('/api/manager', 'POST', sendData).then(res => {
		if (res.state === 'success') {
			return res.result;
		} else {
			return Promise.reject();
		}
	});
}