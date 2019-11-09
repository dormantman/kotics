import React, {Component} from "react";


class Header extends Component {
    constructor(props) {
        super(props);

        this.menu = [
            {
                'name': 'Игра',
                'href': '/game/',
                'pathname': '/game/'
            },
            {
                'name': 'Обновления',
                'href': '/updates/',
                'pathname': '/updates/'
            },
            {
                'name': 'Новости',
                'href': '/news/',
                'pathname': '/news/'
            },
            {
                'name': 'Файлы',
                'href': '/files/',
                'pathname': '/files/'
            },
            {
                'name': 'Скачать',
                'href': '/download/',
                'pathname': '/download/'
            }
        ];

        if (this.is_auth()) {
            this.menu.push({
                'name': 'Администрация',
                'href': '/admin/',
                'pathname': '/admin/'
            });
        }
    }

    get_user_name() {
        let name = '';

        if (data.user.data.first_name) {
            name += data.user.data.first_name;
            if (data.user.data.last_name) {
                name += ' ' + data.user.data.last_name;
            }
        } else {
            name = 'Профиль'
        }

        return name
    }

    is_auth() {
        return !(!data.user || data.user.is_anonymous)
    }

    get_profile_or_login() {
        if (!this.is_auth()) {
            return <div className="profile">
                <a href="/accounts/login/">Войти</a>
                <a href="/accounts/register/">Регистрация</a>
            </div>;
        } else {
            this.menu.push({
                'name': 'Администрация',
                'href': '/admin/',
                'pathname': '/admin/'
            });
            return <div className="profile">
                <a href="/profile/">{this.get_user_name()}</a>
                <a href="/accounts/logout/">Выйти</a>
            </div>;
        }
    }

    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="content">
                        <a className="logo" href={"/"}>
                            <span className="title">Kotics</span>
                        </a>
                        <nav className="subs">
                            {
                                this.menu.map((obj, index) => (
                                    <a key={index}
                                       className={window.location.pathname === obj.pathname ? "active" : null}
                                       href={obj.href}>{obj.name}{
                                        window.location.pathname === obj.pathname ?
                                            <span className="under-line"></span> : null
                                    }</a>
                                ))
                            }
                        </nav>
                        {
                            this.get_profile_or_login()
                        }
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;