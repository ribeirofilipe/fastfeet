export function sendProblemRequest({ id, description }) {
	return {
		type: '@problem/SEND_PROBLEM_REQUEST',
		payload: { id, description },
	};
}

export function sendProblemSuccess() {
	return {
		type: '@problem/SEND_PROBLEM_SUCCESS',
	};
}

export function getProblemsRequest(id) {
	return {
		type: '@problem/GET_PROBLEM_REQUEST',
		payload: { id },
	};
}

export function getProblemsSuccess(problems) {
	return {
    type: '@problem/GET_PROBLEM_SUCCESS',
    payload: { problems }
	};
}

