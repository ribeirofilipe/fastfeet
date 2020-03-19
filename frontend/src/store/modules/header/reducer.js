import produce from 'immer';

const INITIAL_STATE = {
  menu: null,
};

export default function header(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@header/SELECTED_MENU': {
        draft.menu = action.payload.menu;
        break;
      }
      default:
    }
  });
}
