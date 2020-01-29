import React, { Component, Fragment } from 'react';
import Form from '../components/Form/Form';
import ReviewList from '../components/ReviewList/ReviewList';
import { connect } from 'react-redux';

class Reviews extends Component {
    render () {
        return (
            <Fragment>
                <Form />
                <ReviewList list={ this.props.review } />
            </Fragment>
        )
    }
}


const mapStateToProps = state => {
    console.log(state)
    return {
        review: state.review
    }
}

export default connect(mapStateToProps)(Reviews);