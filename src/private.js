import React from 'react';
import { Route,Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (

    <Route {...rest} render={
        props =>
        (isAuthenticated ? 
            (<Component {...props} />) 
            :
            (<Redirect to={{ pathname: 'login', state: { from: props.location } }} />)
        )
    }
    />
);

export const PublicRoute = ({ component: Component, isAuthenticated, ...rest }) => (

    <Route {...rest} render={
        props =>
        (isAuthenticated ? 
            (<Redirect to={{ pathname: '/', state: { from: props.location } }} />)
            :
            (<Component {...props} />)             
        )
    }
    />
);


