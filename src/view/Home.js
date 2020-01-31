import React, { Fragment } from 'react';
import RandomImage from '../components/RandomImage/RandomImage';
import Title from '../components/Title/Title';

const Home = () => (
    <Fragment>
        <Title>
            The internet's biggest collection of{' '}
            <strong>open source dog pictures.</strong>
        </Title>
        <RandomImage />
    </Fragment>
);

export default Home;
