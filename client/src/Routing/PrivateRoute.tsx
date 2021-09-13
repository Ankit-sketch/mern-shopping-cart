import { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ Componenet, ...rest }: any) => {
    //    const auth : boolean = true
    return (
        <Route {...rest} render={(props: any) => {
            localStorage.getItem("token") ? (<Component {...props} />) : (<Redirect to="/login" />)
        }}
        />
    );
}

export default PrivateRoute;
