import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Title from '../components/Title/Title';
import Image from '../components/Image/Image';

const Gallery = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
`;

const ElementImage = styled(Image)`
    width: calc((100% / 4) - 15px);
    margin-right: 15px;
    margin-bottom: 15px;
`;


class PhotoGallery extends Component {
    constructor (props) {
        super(props);

        this.name = this.props.match.params.name;

        this.state = {
            arrayImage: []
        }
    }

    componentDidMount () {
        fetch(`https://dog.ceo/api/breed/${this.name}/images`)
            .then(response => response.json())
            .then(({ message }) => {
                this.setState({
                    arrayImage: message
                })
            })
    }

    render () {
        const { arrayImage } = this.state;
        return (
            <Fragment>
                <Title>Photo of the breed: &nbsp;
                    <strong>
                        { this.name }
                    </strong>
                </Title>
                <Gallery>
                    {
                        arrayImage.map((image, index) => {
                            return (
                                <ElementImage source={ image } key={ index } />
                            )
                        })
                    }
                </Gallery>

            </Fragment>
        )
    }
}

export default withRouter(PhotoGallery);