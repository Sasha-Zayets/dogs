import React from 'react';
import styled from 'styled-components';
import imageLogo from '../../static/logo.svg';

const Picture = styled.picture`
    display: block;
    margin: 0 auto;
    max-width: 140px;
    margin-bottom: 20px;
`;

const Image = styled.img`
    max-width: 100%;
    height: auto;
`;

const Logo = () => (
    <Picture>
        <Image src={ imageLogo } />
    </Picture>
)

export default Logo;