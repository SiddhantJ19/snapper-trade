import React from 'react'
import { Route, Redirect} from 'react-router-dom'
import {isLoggedIN} from '../util/signin'

function PublicRoute({ component: Component, ...rest }) {
    return <Route {...rest}
        render={routeProps => (
            isLoggedIN() === true ? <Redirect  to='/dashboard' /> : <Component {...routeProps} />
        )}
    />
}

export default PublicRoute