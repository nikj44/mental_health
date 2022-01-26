export const SET_STAGE = 'SET_STAGE';
export const SET_BSTYLE = 'SET_BSTYLE'

export const setStage = stage => dispatch => {
    dispatch({
        type: SET_STAGE,
        payload: stage,
    });
};

export const setBStyle = bstyle => dispatch => {
    dispatch({
        type: SET_BSTYLE,
        payload: bstyle,
    })
}