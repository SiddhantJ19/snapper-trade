import React from 'react'
import {useHistory} from 'react-router-dom'
import {signIn} from '../util/signin'


function Home (props) {
    const history = useHistory();

    function handleSignIN() {
        signIn()
        history.push('/dashboard')
    }

    function handleSignUP(props) {
        history.push('/')
    }

    return(
        <div>
            <h1>Home Page</h1>
            <ul>
                <button onClick={handleSignIN} >SignIn</button>
                <button onClick={handleSignUP} >SignUp</button>
            </ul>
        </div>
    )
}

export default Home