import React, {Component} from "react";

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
                            <div className="title">Авторизация</div>
                        </div>
                        <div className="login" dangerouslySetInnerHTML={
                            {__html: document.getElementById('content').innerHTML}
                        }/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;