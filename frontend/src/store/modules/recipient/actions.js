export function getRecipientsRequest(recipient, page = 1) {
  return {
    type: '@recipient/GET_REQUEST',
    payload: { recipient, page },
  };
}

export function getRecipientsSuccess(recipients) {
  return {
    type: '@recipient/GET_SUCCESS',
    payload: { recipients },
  };
}

export function getRecipientRequest(id) {
  return {
    type: '@recipient/GET_REQUEST_BY_ID',
    payload: { id },
  };
}

export function getRecipientSuccess(recipient) {
  return {
    type: '@recipient/GET_SUCCESS_BY_ID',
    payload: { recipient },
  };
}

export function updateRecipientRequest(recipient) {
  return {
    type: '@recipient/UPDATE_REQUEST',
    payload: { recipient },
  };
}

export function updateRecipientSuccess(recipient) {
  return {
    type: '@recipient/UPDATE_SUCCESS',
    payload: { recipient },
  };
}

export function saveRecipientRequest(recipient) {
  return {
    type: '@recipient/SAVE_REQUEST',
    payload: { recipient },
  };
}

export function saveRecipientSuccess(id) {
  return {
    type: '@recipient/SAVE_SUCCESS',
    payload: { id },
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
