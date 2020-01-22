import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';

const Component = styled.div`
    padding: 20px;
    width: 25%;
    background-color: #d6d6d6;
`;

const Sidebar = () => (
    <Component>
        <Logo />
    </Component>
)

export default Sidebar;