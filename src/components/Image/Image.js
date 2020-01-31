import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Component = styled.img`
    max-height: 250px;
    object-fit: contain;
    margin-bottom: 20px;
`;

const Image = ({ className, source }) => (
    <Component className={className} src={source} />
);

Image.propTypes = {
    className: propTypes.string,
    source: propTypes.string,
};

export default Image;
