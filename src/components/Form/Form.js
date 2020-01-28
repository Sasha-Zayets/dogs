import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Title from '../Title/Title';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    width: 100%;
    margin-bottom: 20px;
`;

const TextArea = styled.textarea`
    resize: none;
    width: 100%;
    height: 100px;
    border-radius: 4px;
    border: none;
    box-shadow: 0 0 2px rgba(0, 0, 0, .6);
    padding: 5px;
    color: black;
    font-size: 14px;
    margin: 10px 0;
`;

export default class Form extends Component {
    state = {
        review: '',
        reviewText: '',
        reviewValid: false,
        reviewTextValid: false,
        formValid: false
    }

    changeReview = ({ target }) => {
        this.setState({
            review: target.value
        },
        () => { this.validateReviewField() })
    }

    changeReviewText = ({ target }) => {
        this.setState({
            reviewText: target.value
        },
        () => { this.validateReviewText() })
    }

    validateReviewField = () => {
        const { review } = this.state;
    
        this.setState({
            reviewValid: this.validateMinLength(review)
        }, 
        () => { this.validateForm() })
    }

    validateReviewText = () => {
        const { reviewText } = this.state;
        
        this.setState({
            reviewTextValid: this.validateMinLength(reviewText, 10)
        }, 
        () => { this.validateForm() })
    }

    validateMinLength = (value, min = 1) => {
        return value.length > min;
    }

    validateForm = () => {
        const { reviewValid, reviewTextValid } = this.state;

        this.setState({
            formValid: reviewTextValid && reviewValid
        })
    }

    render () {
        const { review, reviewText, formValid } = this.state;

        return (
            <Fragment>
                <Title>Reviews</Title>
                <Wrapper>
                    <Input 
                        value={ review } 
                        placeholder="Your name"
                        onChange={ this.changeReview } />
                    <TextArea 
                        placeholder="Text review"
                        value={ reviewText }
                        onChange={ this.changeReviewText }
                    ></TextArea>
                    <Button disabled={ formValid }>Add review</Button>
                </Wrapper>
            </Fragment>
        )
    }
}