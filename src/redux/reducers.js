import { SET_STAGE, SET_BSTYLE } from "./actions";

const initialState = {
    stage: 1,
    bstyle: null,
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_STAGE: 
            return { ...state, stage: action.payload };
        case SET_BSTYLE:
            return { ...state, bstyle: action.payload }
        default: 
            return state;
    }
}

export default userReducer;