const initialState = {
    review: [],
    loading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_REVIEW':
            const review = state.review;
            const payload = action.payload;
            return {
                ...state,
                review: [payload, ...review],
            };
        case 'GET_REVIEW':
            return {
                ...state,
                review: [...action.payload],
            };
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
