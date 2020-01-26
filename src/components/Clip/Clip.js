import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Component = styled.div`
    width: fit-content;
    height: 30px;
    font-size: 16px;
    color: black;
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 0 10px;
    background-color: #a0a0a0;
    color: white;
`;

const Clip = ({ className, children }) => (
    <Component className={ className }>{ children }</Component>
)

Clip.propTypes = {
    className: propTypes.string,
    children: propTypes.oneOfType([
        propTypes.element.isRequired,
        propTypes.string.isRequired,
        propTypes.number.isRequired
    ])
}

export default Clip;