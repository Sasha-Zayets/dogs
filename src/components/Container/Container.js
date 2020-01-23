import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
    padding: 50px 40px;
    width: 80%;
    background-color: #f7f7f7;
`;

const Container = ({ children }) => (
    <Content>
        { children }
    </Content>
)

export default Container;