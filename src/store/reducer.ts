import { MENU_TOGGLE } from "./actionType";

const defaultStore = {
  menuToggle: false,
};

const reducer = (state = defaultStore, action: any) => {
  switch (action.type) {
    case MENU_TOGGLE:
      return { ...state, menuToggle: !state.menuToggle };
    default:
      return state;
  }
};

export default reducer;
