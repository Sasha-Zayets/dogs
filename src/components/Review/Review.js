import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Component = styled.div`
    padding: 10px;
    box-shadow: 0 0 2px rgba(0, 0, 0, .5);
    background-color: silver;
    border-radius: 5px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;
    border-bottom: 1px solid white;
`;

const Title = styled.h2`
    margin: 0;
    font-size: 26px;
    font-weight: 700;
`;

const Date = styled.span`
    font-size: 18px;
    line-height: 18px;
    display: flex;
    align-items: center;
    width: fit-content;
    padding: 3px;
    border-radius: 3px;
    background-color: white;
    color: black;
`;

const Content = styled.div`
    margin-top: 10px;
    padding: 10px;
    background-color: white;
    border-radius: 3px;
    color: black;
    font-size: 18px;
`;

const Review = ({ className }) => (
    <Component className={ className }>
        <Header>
            <Title>Alex</Title>
            <Date>20.01.2020</Date>
        </Header>
        <Content>
            lorem ipsum
        </Content>
    </Component>
)

Review.propTypes = {
    className: propTypes.string
}

export default Review;