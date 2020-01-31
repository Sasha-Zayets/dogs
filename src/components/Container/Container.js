import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Content = styled.div`
    padding: 50px 40px;
    height: 100%;
    width: 80%;
    background-color: #f7f7f7;
`;

const Container = ({ children }) => <Content>{children}</Content>;

Container.propTypes = {
    children: propTypes.element,
};

export default Container;
