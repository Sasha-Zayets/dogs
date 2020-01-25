import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Clip from '../Clip/Clip';

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled(Clip)`
    margin: 0 10px 10px 10px;
    text-transform: capitalize;
`;

const ListBreeds = ({ lists }) => (
    <List>
        {
            lists.map((list, index) => {
                return (
                    <Link key={ index } to={ `/photo/${list}` }>
                        <ListItem>{ list }</ListItem>
                    </Link>
                )
            })
        }
    </List>
)

export default ListBreeds;