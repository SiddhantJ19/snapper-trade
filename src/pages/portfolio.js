import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import {signOut} from '../util/signin'
function Portfolio() {
    const history = useHistory()

    function handleLogOut() {
        signOut()
        history.push('/')
    }
    return(
        <div>
            <h1>Portfolio page</h1>
            <ul>
                <Link to='/dashboard' > <li>To Dashboard</li> </Link>
                <button onClick={handleLogOut}> logout </button>
            </ul>
        </div>
    )
}

export default Portfolio