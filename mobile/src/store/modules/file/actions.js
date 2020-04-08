export function sendFileRequest(originalname, filename) {
	return {
		type: '@file/SEND_FILE_REQUEST',
		payload: { originalname, filename },
	};
}

export function sendFileSuccess(id) {
	return {
		type: '@file/SEND_FILE_SUCCESS',
		payload: { id },
	};
}
