import React, {Component} from "react";

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        if (data.user.is_anonymous) {
            window.location.href = '/';
        }

        return (
            <div>
                <div className="body-container">
                    <div className="entry">
                        <div className="top">
                            <div className="title">Профиль</div>
                        </div>
                        <div className="profile">
                            <label>Имя пользователя:</label>
                            <p className="username">{data.user.data.username}</p>
                            <label>Ваше имя:</label>
                            <p className="name">{data.user.data.first_name + ' ' + data.user.data.last_name}</p>
                            <label>Email:</label>
                            <p className="email">{data.user.data.email}</p>
                            <label>Дата регистрации:</label>
                            <p className="date">{data.user.data.reg_date}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;