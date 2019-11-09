import React, {Component} from "react";
import {Redirect} from 'react-dom';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="body-container">
                    <div className="entry">
                        <div className="top">
                            <div className="title">Выход из аккаунта</div>
                        </div>
                        <div className="login" dangerouslySetInnerHTML={
                            {__html: document.getElementById('content').innerHTML}
                        }/>
                        <div style={{display: 'none'}}>{window.location.href = '/'}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;