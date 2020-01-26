import React from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';

const Component = styled.button`
    height: 40px;
    border: none;
    border-radius: 3px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    width: fit-content;
    transition: all .3s;

    &:hover {
        cursor: pointer;
    }
    ${({ theme }) => {
        switch (theme) {
            case 'primary': 
                return css `
                    background-color: #3c74ad;
                    color: white;
                `
            default: 
                return css`
                    background-color: black;
                    color: white
                `
        }
    }}
`;


const Button = ({ className, children, theme, onClick }) => (
    <Component 
        className={ className }
        theme={ theme }
        onClick={ onClick }
    >
        { children }
    </Component>
)

Button.propTypes = {
    className: propTypes.string,
    children: propTypes.any,
    theme: propTypes.string,
    onClick: propTypes.func
}

export default Button;