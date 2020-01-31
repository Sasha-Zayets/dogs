import React from 'react';
import styled from 'styled-components';
import Image from '../Image/Image';
import Button from '../Button/Button';

const Cart = styled.div`
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 5px;
`;

class RandomImage extends React.Component {
    state = {
        linkImage: '',
    };

    componentDidMount() {
        this.getImage();
    }

    getImage = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(data => data.json())
            .then(data => {
                this.setState({
                    linkImage: data.message,
                });
            })
            .catch(error => console.log(error));
    };

    render() {
        return (
            <Cart>
                <Image source={this.state.linkImage} />
                <Button onClick={this.getImage}>get random image</Button>
            </Cart>
        );
    }
}

export default RandomImage;
