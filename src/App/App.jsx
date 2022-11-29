import React from 'react';
import '../style.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from './routes';
import UsersLoader from './components/ui/hoc/userLoader';

const getRoutes = (routes) => {
    return routes.map((route, key) => {
        return <Route path={route.path} component={route.component} key={key} />;
    });
};

function App() {
    return (
        <>
            <UsersLoader>
                <Switch>
                    {getRoutes(routes)}
                    <Redirect to="/" />
                </Switch>
            </UsersLoader>
        </>
    );
}

export default App;
