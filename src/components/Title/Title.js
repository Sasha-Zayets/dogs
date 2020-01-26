import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Component = styled.h2`
    font-size: 36px;
    font-weight: 500;
    line-height: 38px;
    max-width: 600px;
`;

const Title = ({ children }) => (
    <Component>
        { children }
    </Component>
)

Title.propTypes = {
    children: propTypes.any
}

export default Title;