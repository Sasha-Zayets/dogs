import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './view/Home';
import BreedsList from './view/BreedsList';

const Router = () => (
    <Switch>
        <Route path='/' exact component={ Home } />
        <Route path='/breeds-list' component={ BreedsList } />
    </Switch>
)

export default Router;