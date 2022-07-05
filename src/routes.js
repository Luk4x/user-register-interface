import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/users" component={Users} />
            </Switch>
        </Router>
    );
};

export default Routes;
