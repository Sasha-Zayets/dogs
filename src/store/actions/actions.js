import firebase from 'firebase/app';
import 'firebase/database';

export const loadingData = payload => {
    return {
        type: 'SET_LOADING',
        payload,
    };
};

export const getReview = payload => {
    return {
        type: 'GET_REVIEW',
        payload,
    };
};

export const addReview = payload => {
    return {
        type: 'ADD_REVIEW',
        payload,
    };
};

export const reviewFetchData = () => {
    return dispatch => {
        dispatch(loadingData(true));

        let review = [];
        firebase
            .database()
            .ref('reviews/')
            .once('value', function(data) {
                data.forEach(element => {
                    review.unshift(element.val());
                });

                dispatch(getReview(review));
                dispatch(loadingData(false));
            });
    };
};

export const newReview = payload => {
    return dispatch => {
        firebase
            .database()
            .ref('reviews/')
            .push(payload)
            .then(() => {
                dispatch(addReview(payload));
            });
    };
};
