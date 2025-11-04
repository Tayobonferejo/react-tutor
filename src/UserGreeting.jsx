function UserGreeting(props){
    if(props.IsLoggedIn) {
        return <h2>welcome {props.username}</h2>
    }
    else {
        return <h2> Please log in to continue.</h2>
    }

}

export default UserGreeting