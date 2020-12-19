/* 빈 값 검사 */
export const validationEmptyChecker = (keyword) => {
	return keyword === '' ? false : true;
}

/* 아이디 유효성 검사 */
export const validationIdChecker = (keyword) => {
	if (!validationEmptyChecker(keyword)) {
		return {
			valid: false,
			type: "EMPTY"
		}
	}

	if (keyword.indexOf(' ') !== -1) {
		return {
			valid: false,
			type: "BLANK"
		}
	}

	if (50 < keyword.length) {
		return {
			valid: false,
			type: "TOO_LONG"
		};
	}

	return {
		valid: true,
		type: "SUCCESS"
	};
}

/* 비밀번호 유효성 검사 */
export const validationPwChecker = (keyword) => {
	if (!validationEmptyChecker(keyword)) {
		return {
			valid: false,
			type: "EMPTY"
		}
	}

	if (100 <= keyword.length) {
		return {
			valid: false,
			type: "TOO_LONG"
		};
	}

	return {
		valid: true,
		type: "SUCCESS"
	};
}