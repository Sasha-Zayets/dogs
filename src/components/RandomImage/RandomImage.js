import React from 'react';
import styled from 'styled-components';
import propsTypes from 'prop-types';
import { connect } from 'react-redux';
import Image from '../Image/Image';
import Button from '../Button/Button';
import { getRandomImage } from '../../store/actions/actions';

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
        this.props.getUrlImage();
    }

    render() {
        const { linkImage, getUrlImage } = this.props;
        return (
            <Cart>
                <Image source={linkImage} />
                <Button onClick={() => getUrlImage()}>get random image</Button>
            </Cart>
        );
    }
}

RandomImage.propsTypes = {
    linkImage: propsTypes.string,
    getUrlImage: propsTypes.func,
}

const mapStateToProps = state => {
    return {
        linkImage: state.linkImage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUrlImage: () => dispatch(getRandomImage()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomImage);