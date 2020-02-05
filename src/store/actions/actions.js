import firebase from 'firebase/app';
import 'firebase/database';

export const setLinkImage = payload => {
    return {
        type: 'SET_IMAGE',
        payload,
    };
};

export const setBreeds = payload => {
    return {
        type: 'SET_BREEDS',
        payload,
    };
};

export const filterBreeds = payload => {
    return {
        type: 'SET_FILTER_SHOW_LIST',
        payload
    }
}

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

export const getRandomImage = () => {
    return dispatch => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(data => data.json())
            .then(data => {
                dispatch(setLinkImage(data.message));
            })
            .catch(error => console.log(error));
    };
};

export const getBreedsList = () => {
    return dispatch => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(response => response.json())
            .then(data => {
                const breeds = Object.keys(data.message);
                dispatch(setBreeds(breeds));
            });
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
