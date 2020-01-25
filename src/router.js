import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './view/Home';
import BreedsList from './view/BreedsList';
import PhotoGallery from './view/PhotoGallery';

const Router = () => (
    <Switch>
        <Route path='/' exact component={ Home } />
        <Route path='/breeds-list' component={ BreedsList } />
        <Route path='/photo/:name' component={ PhotoGallery } />
    </Switch>
)

export default Router;