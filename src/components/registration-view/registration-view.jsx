import React from 'React'

import PropTypes from 'prop-types';

export function RegistrationView(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail] = useState('');
    const [ birthday, setBirthday] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('username', ' Password')

        props.onRegister(username);
    };

return (
    <form>
        <label>
            Useername:
            <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
        </label>
        <label>
            Password: 
            <input type="text" value={password} onChange={e => setPassword(e.target.value)}/>
        </label>
        <label>
            <imput type="text" value={email} onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>
            <input type="text" value={birthday} onChange={e => setBirthday(e.target.value)}/>
        </label>
        <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
    )
}

RegistrationView.propTypes = {
    onRegister: PropTypes.func.isRequired
};