import {TOGGLE_MENU} from '../actions/generalAction';

const initialState = {
    showMenu: false,
};
const generalReducer = (state = initialState, action) => {
    switch (action.type) {
    case TOGGLE_MENU:
        return {
            ...state,
            showMenu: !state.showMenu,
        };
    default:
        return state;
    }
};

export default generalReducer;
