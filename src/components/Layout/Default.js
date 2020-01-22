import React from 'react';
import styled from 'styled-components';
import Sidebar from '../Sidebar/Sidebar';
import Container from '../Container/Container';

const Layout = styled.div`
    display: flex;
`;

const Default = () => (
    <Layout>
        <Sidebar />
        <Container>right panel</Container>
    </Layout>
)

export default Default;