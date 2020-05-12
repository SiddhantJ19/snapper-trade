function isLoggedIN(){
    if(localStorage.getItem("isLoggedIn")){
        return true
    }else{
        return false
    }
}

function signIn(){
    localStorage.setItem("isLoggedIn", "true")
}

function signOut(){
    localStorage.clear();
}

export { signIn, signOut, isLoggedIN}