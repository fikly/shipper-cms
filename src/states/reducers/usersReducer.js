import {SET_USERS, SEARCH_USERS} from '~/states/actions/usersAction';

const initialState = {
    originalList: [],
    list: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_USERS:
        return {
            ...state,
            list: action.data,
            originalList: action.data,
        };
    case SEARCH_USERS:
        const originalList = state.originalList;
        const search = action.data.toLowerCase();
        const searchList = originalList.filter((row) => (
            (row.name.first.toLowerCase().indexOf(search) > -1)
        ));

        return {
            ...state,
            list: searchList,
        };
    default:
        return state;
    }
};

export default usersReducer;
