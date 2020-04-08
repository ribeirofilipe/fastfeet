export function sendDeliveryConfirmRequest(id, deliveryman_id, signature_id) {
	return {
		type: '@deliveryConfirm/SEND_DELIVERY_CONFIRM_REQUEST',
		payload: { id, deliveryman_id, signature_id },
	};
}

export function sendDeliveryConfirmSuccess() {
	return {
		type: '@deliveryConfirm/SEND_DELIVERY_CONFIRM_SUCCESS',
	};
}

