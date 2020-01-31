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
    pointer-events: initial;
    transition: all 0.3s;

    &:hover {
        cursor: pointer;
    }
    ${({ theme }) => {
        switch (theme) {
            case 'primary':
                return css`
                    background-color: #3c74ad;
                    color: white;
                `;
            default:
                return css`
                    background-color: black;
                    color: white;
                `;
        }
    }}

    ${({ enable }) =>
        !enable &&
        css`
            background-color: silver;
            pointer-events: none;
            color: black;
        `}
`;

const Button = ({ className, children, theme, onClick, enable = true }) => (
    <Component
        className={className}
        theme={theme}
        onClick={onClick}
        enable={enable}
    >
        {children}
    </Component>
);

Button.propTypes = {
    className: propTypes.string,
    children: propTypes.any,
    theme: propTypes.string,
    onClick: propTypes.func,
    disabled: propTypes.bool,
};

export default Button;
