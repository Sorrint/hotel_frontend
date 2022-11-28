import React from 'react';
import '../style.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from './routes';

const getRoutes = (routes) => {
    return routes.map((route, key) => {
        return <Route path={route.path} component={route.component} key={key} />;
    });
};

function App() {
    return (
        <>
            <Switch>
                {getRoutes(routes)}
                <Redirect to="/" />
            </Switch>
        </>
    );
}

export default App;
