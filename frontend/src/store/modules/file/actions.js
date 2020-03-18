export function saveFileRequest(file) {
  return {
    type: '@file/SAVE_REQUEST',
    payload: { file },
  };
}

export function saveFileSuccess(avatar_id) {
  return {
    type: '@file/SAVE_SUCCESS',
    payload: { avatar_id },
  };
}
