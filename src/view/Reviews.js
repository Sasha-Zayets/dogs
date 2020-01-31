import React, { Component, Fragment } from 'react';
import Form from '../components/Form/Form';
import ReviewList from '../components/ReviewList/ReviewList';
import { connect } from 'react-redux';
import { reviewFetchData } from '../store/actions/actions';

class Reviews extends Component {
    componentDidMount() {
        this.props.getReview();
    }

    render() {
        const { loading } = this.props;
        return (
            <Fragment>
                <Form />
                {!loading ? (
                    <ReviewList list={this.props.review} />
                ) : (
                    <span>loading review</span>
                )}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        review: state.review,
        loading: state.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getReview: data => dispatch(reviewFetchData(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
