export const addReview = (payload) => {
    return {
        type: 'ADD_REVIEW',
        payload
    }
}

export const newReview = (payload) => {
    return (dispatch) => {
        dispatch(addReview(payload))
    }
}