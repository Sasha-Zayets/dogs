import React from 'react';
import styled from 'styled-components';
import RandomImage from '../RandomImage/RandomImage';

const Content = styled.div`
    padding: 50px 40px;
    width: 80%;
    background-color: #f7f7f7;
`;

const Container = ({ children }) => (
    <Content>
        <RandomImage />
    </Content>
)

export default Container;