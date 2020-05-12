import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {isLoggedIN} from '../util/signin'

function PrivateRoute ({component: Component, ...rest}) {
    console.log(isLoggedIN())
    return <Route {...rest} render={(routeProps) => {
        return isLoggedIN() === true ? <Component {...routeProps} /> : <Redirect to="/"/>
    }}/>
}

export default PrivateRoute