import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Review from '../Review/Review';

const List = styled.div`
    margin: 10px 0;
`;

const ReviewItem = styled(Review)`
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
`;

const ReviewList = ({ list }) => (
    <List><ReviewItem/></List>
)

ReviewList.propTypes = {
    list: propTypes.array.isRequired
}

export default ReviewList;