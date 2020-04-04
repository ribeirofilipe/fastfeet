export function signInRequest(id) {
	return {
		type: '@deliveryman/SIGN_IN_REQUEST',
		payload: { id },
	};
}

export function signInSuccess(user) {
	return {
		type: '@deliveryman/SIGN_IN_SUCCESS',
		payload: { user },
	};
}
