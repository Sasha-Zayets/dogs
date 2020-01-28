import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    margin: 35px 0 20px 0;
`;

const NavItem  = styled(Link)`
    text-decoration: none;
    padding-bottom: 10px;
    width: 100%;
    border-bottom: 1px solid black;
    margin-bottom: 10px;
    color: black;
    font-size: 18px;
    transtion-duration: .3s;
    
    &:hover {
        border-color: #75b2e2;
        color: #75b2e2;
    }

    &:last-child {
        margin-bottom: 0;
    }
`;

const Navigation = () => (
    <Nav>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/breeds-list">Breeds list</NavItem>
        <NavItem to="/reviews">Reviews</NavItem>
    </Nav>
)

export default Navigation;