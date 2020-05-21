import React from 'react';

class Login extends React.Component {
    render() {
        return(
            <div className="backgroundLogin container-fluid">
                <h1>Green Code</h1>
                <p>Login Administrativo</p>
                <div className="boxLogin">
                    <input className="input" type="text" name="username" placeholder="Email de acesso" />
                    <input className="input" type="password" name="password" placeholder="Senha de acesso" />
                    <button className="btn btnPrimary">Logar</button>
                </div>
            </div>
        )
    }
}

export default Login