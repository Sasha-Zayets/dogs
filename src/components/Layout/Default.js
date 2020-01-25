import React from 'react';
import styled from 'styled-components';
import Sidebar from '../Sidebar/Sidebar';
import Container from '../Container/Container';
import Router from '../../router';

const Layout = styled.div`
    display: flex;
    height: 100%;
`;

const Default = () => (
    <Layout>
        <Sidebar />
        <Container>
            <Router />
        </Container>
    </Layout>
)

export default Default;