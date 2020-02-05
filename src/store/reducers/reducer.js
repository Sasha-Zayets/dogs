const initialState = {
    linkImage: '',
    breedsList: [],
    showList: [],
    review: [],
    loading: false,
};

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'ADD_REVIEW':
            const review = state.review;
            return {
                ...state,
                review: [payload, ...review],
            }
        case 'GET_REVIEW':
            return {
                ...state,
                review: [...payload],
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: payload,
            }
        case 'SET_IMAGE':
            return {
                ...state,
                linkImage: payload
            }
        case 'SET_BREEDS':
            return {
                ...state,
                breedsList: payload,
                showList: payload,
            }
        case 'SET_FILTER_SHOW_LIST':
            return {
                ...state,
                showList: payload
            }
        default:
            return state;
    }
};

export default reducer;
