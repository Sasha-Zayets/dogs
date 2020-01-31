import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './view/Home';
import BreedsList from './view/BreedsList';
import PhotoGallery from './view/PhotoGallery';
import Reviews from './view/Reviews';

const Router = () => (
    <Switch>
        <Route path='/dogs' component={ Home } />
        <Route path='/breeds-list' component={ BreedsList } />
        <Route path='/photo/:name' component={ PhotoGallery } />
        <Route path='/reviews' component={ Reviews } />
        <Route exact path='/'>
            <Redirect to='/dogs'/>
        </Route>
    </Switch>
)

export default Router;