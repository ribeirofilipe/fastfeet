export function getRecipientRequest(recipient) {
  return {
    type: '@recipient/GET_REQUEST',
    payload: { recipient },
  };
}

export function getRecipientSuccess(recipients) {
  return {
    type: '@recipient/GET_SUCCESS',
    payload: { recipients },
  };
}

export function deleteRecipientRequest(id) {
  return {
    type: '@recipient/DELETE_REQUEST',
    payload: { id },
  };
}

export function deleteRecipientSuccess(id) {
  return {
    type: '@recipient/DELETE_SUCCESS',
    payload: { id },
  };
}
