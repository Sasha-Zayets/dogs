import React from 'react';
import styled from 'styled-components';

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

export default Title;