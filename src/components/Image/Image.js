import React from 'react';
import styled from 'styled-components';

const Component = styled.img`
    max-height: 250px;
    object-fit: contain;
    margin-bottom: 20px;
`;

const Image = ({ className, source }) => (
    <Component 
        className={ className } 
        src={ source } />
)

export default Image;
