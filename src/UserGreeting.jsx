import PropTypes from 'prop-types';
function UserGreeting(props){


    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }
    //     return <h2>Please Log in to Continue!</h2>



    const welcomeMessage  = <h2 className="welcome-message">
                            Welcome {props.username}
                            </h2> 

    const loginPrompt     = <h2 className="login-prompt">
                            Please Log in to Continue
                            </h2>


    return (props.isLoggedIn ? welcomeMessage:loginPrompt );
}
UserGreeting.prototype= {
    isLoggedIn:PropTypes.bool,
    username:PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username:"Guest",
}
export default UserGreeting







// <>
// {/* <UserGreeting isLoggedIn={false} username="BroCode"/> */}
// <UserGreeting isLoggedIn={true} />
// </>







// .welcome-message{
//     font-size: 2.5em;
//     background-color: rgb(0, 168, 112);
//     color: aliceblue;
//     padding: 10px;
//     border-radius: 5px;
//     margin: 0px;
// }
// .login-prompt{
//     font-size: 2.5em;
//     background-color: rgb(168, 0, 0);
//     color: aliceblue;
//     padding: 10px;
//     border-radius: 5px;
//     margin: 0px;
// }







