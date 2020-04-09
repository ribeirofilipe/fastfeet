export function saveFileRequest(id, file, name, email) {
  return {
    type: '@file/SAVE_REQUEST',
    payload: { id, file, name, email },
  };
}

export function saveFileSuccess(avatar_id) {
  return {
    type: '@file/SAVE_SUCCESS',
    payload: { avatar_id },
  };
}
