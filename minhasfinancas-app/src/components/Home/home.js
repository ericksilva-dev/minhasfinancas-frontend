import React from 'react';

class Home extends React.Component {
    render() {
        return(
            <div className="backgroundDefault container-fluid">
                <div className="row">
                    <div className="menuItems col-lg-3">
                        <ul className="menuItemList">
                            <li><a href="#">Usuários Cadastrados</a></li>
                            <li><a href="#">Lixeiras Cadastrados</a></li>
                            <li><a href="#">Localização de lixeiras</a></li>
                            <li><a href="#">Central de Notificação</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home