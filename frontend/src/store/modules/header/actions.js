export function setHeaderSelected(menu) {
  return {
    type: '@header/SELECTED_MENU',
    payload: { menu },
  };
}
