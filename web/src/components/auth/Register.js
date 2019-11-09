import React, {Component} from "react";

class Register extends Component {
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
                            <div className="title">Регистрация</div>
                        </div>
                        <div className="register" dangerouslySetInnerHTML={
                            {__html: document.getElementById('content').innerHTML}
                        }/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;