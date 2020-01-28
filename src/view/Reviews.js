import React, { Component, Fragment } from 'react';
import Form from '../components/Form/Form';
import ReviewList from '../components/ReviewList/ReviewList';

export default class Reviews extends Component {
    render () {
        return (
            <Fragment>
                <Form />
                <ReviewList />
            </Fragment>
        )
    }
}