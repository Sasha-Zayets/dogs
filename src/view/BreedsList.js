import React, { Fragment } from 'react';
import Title from '../components/Title/Title';
import ListBreeds from '../components/ListBreeds/ListBreeds';


class BreedsList extends React.Component {
    state = {
        search: '',
        breedsList: [],
        showList: []
    }

    componentDidMount () {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(response => response.json())
            .then(data => {
                const breeds = Object.keys(data.message);
              
                this.setState({
                    breedsList: breeds,
                    showList: breeds
                })
            })
    }

    searchBreeds = (event) => {
        const listBreeds = this.state.breedsList;
        const resultSearch = listBreeds.filter(el => {
            return el.includes(event.target.value)
        })
    
        this.setState({
            search: event.target.value,
            showList: resultSearch
        })
    }

    render () {
        const { showList, search } = this.state;

        return (
            <Fragment>
                <Title>All breeds list</Title>
                <div style={ {marginBottom: '10px'} }>
                    <input 
                        value={ search } 
                        placeholder="Search"
                        onChange={ this.searchBreeds } />
                </div>
                <ListBreeds lists={ showList } />
            </Fragment>
        )
    }
}


export default BreedsList;