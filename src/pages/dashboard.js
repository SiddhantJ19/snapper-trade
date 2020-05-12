import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { signOut} from '../util/signin'

function Dashboard() {
    const history = useHistory()

    function handleLogOut(){
        signOut()
        history.push('/')
    }

    return(
        <div>
            <h1>Dashboard</h1>
            <ul>
                <Link to='/portfolio'> <li>To Portfolio</li> </Link>
                <button onClick={handleLogOut}> logout </button>
            </ul>
        </div>
    )
}

export default Dashboard