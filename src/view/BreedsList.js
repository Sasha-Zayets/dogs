import React, { Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Title from '../components/Title/Title';
import ListBreeds from '../components/ListBreeds/ListBreeds';
import Input from '../components/Input/Input';
import { getBreedsList, filterBreeds } from '../store/actions/actions';

const SearchField = styled(Input)`
    margin-bottom: 20px;
`;

class BreedsList extends React.Component {
    state = {
        search: '',
    };

    componentDidMount() {
        this.props.getBreedsList();
    }

    searchBreeds = ({ target }) => {
        const { breedsList, filterBreeds } = this.props;
        const resultSearch = breedsList.filter(el => {
            return el.includes(target.value);
        });

        this.setState({
            search: target.value,
        });

        filterBreeds(resultSearch);
    };

    render() {
        const { search } = this.state;
        const { showList } = this.props;

        return (
            <Fragment>
                <Title>All breeds list</Title>
                <SearchField
                    value={search}
                    placeholder="Search"
                    onChange={this.searchBreeds}
                />
                {showList.length > 0 ? (
                    <ListBreeds lists={showList} />
                ) : (
                    <div>no results</div>
                )}
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    breedsList: state.breedsList,
    showList: state.showList,
});

const mapDispatchToProps = dispatch => ({
    getBreedsList: () => dispatch(getBreedsList()),
    filterBreeds: data => dispatch(filterBreeds(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BreedsList);
