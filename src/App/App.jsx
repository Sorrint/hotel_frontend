// import Content from './layouts/content';
import React from 'react';
import '../style.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from './routes';
import AppLoader from './components/ui/hoc/appLoader';

const getRoutes = (routes) => {
    return routes.map((route, key) => {
        return <Route path={route.path} component={route.component} key={key} />;
    });
};

function App() {
    return (
        <>
            <AppLoader>
                <Switch>
                    {getRoutes(routes)}
                    <Redirect to="/" />
                </Switch>
            </AppLoader>
        </>
    );
}

export default App;
