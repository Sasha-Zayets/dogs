import React, { Fragment } from 'react';
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
    <Fragment>
        {list.length > 0 ? (
            <List>
                {list.map((item, index) => {
                    return <ReviewItem review={item} key={index} />;
                })}
            </List>
        ) : (
            <h2>No reviews</h2>
        )}
    </Fragment>
);

ReviewList.propTypes = {
    list: propTypes.array.isRequired,
};

export default ReviewList;
