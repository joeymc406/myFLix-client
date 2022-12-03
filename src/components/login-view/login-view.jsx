import React,{ useState } from 'react';

export function LoginView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        // send a request to the server for authentication
        //then call props.onLoggedIn(username)
        //props.onLoggedIn(username);
    };
// export class LoginView extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             password: ''
//         };

//     this.onUsernameChange = this.onUsernameChange.bind(this);

//     this.onpPasswordChange = this.onpPasswordChange.bind(this);

//     this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     onUsernameChange(event) {
//         this.setState({
//             username: event.target.value
//         });
//     }

//     onPasswordChange(event) {
//         this.setState({
//             password: event.target.value
//         });
//     }

//     handleSubmit() {
//         const { username, password } =htis.state;
//         console.log(username, password);
//         //sed request to server for authentication
//         //then call this.props.onLoggedIn(username)
//         //this.props.onLoggedIn(username)
//     }

//     render() {
        return (
            <form>
                <label>
                Username:
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </label>
            <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
        );
    }