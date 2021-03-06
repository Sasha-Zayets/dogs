import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Field = styled.input`
    height: 40px;
    border: none;
    border-radius: 4px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
    font-size: 16px;
    color: black;
    &:focus {
        outline: none;
    }
`;

const Input = ({ className, value, placeholder, onChange }) => (
    <Field
        className={className}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
    />
);

Input.propTypes = {
    className: propTypes.string,
    value: propTypes.oneOfType([propTypes.string, propTypes.number]),
    placeholder: propTypes.string,
    onChange: propTypes.func,
};

export default Input;
