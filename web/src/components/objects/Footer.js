import React, {Component} from "react";


class Footer extends Component {
    constructor(props) {
        super(props);

        this.tabs = [
            {
                'title': 'Навигация',
                'links': [
                    {
                        'name': 'Игра',
                        'href': '/game/',
                        'blank': false,
                    },
                    {
                        'name': 'Скачать',
                        'href': '/download/',
                        'blank': false,
                    },
                    {
                        'name': 'Обновления',
                        'href': '/updates/',
                        'blank': false,
                    },
                    {
                        'name': 'Новости',
                        'href': '/news/',
                        'blank': false,
                    },
                    {
                        'name': 'Файлы',
                        'href': '/files/',
                        'blank': false,
                    },
                    {
                        'name': 'Авторизация',
                        'href': '/accounts/login/',
                        'blank': false,
                    },
                    {
                        'name': 'Регистрация',
                        'href': '/accounts/register/',
                        'blank': false,
                    },
                    {
                        'name': 'Профиль',
                        'href': '/profile/',
                        'blank': false,
                    },
                ]
            },
            {
                'title': 'Ссылки',
                'links': [
                    {
                        'name': 'Группа VK',
                        'href': 'https://vk.com/kotics_open_sours',
                        'blank': true,
                    },
                    {
                        'name': 'Автор',
                        'href': 'https://vk.com/dormantman',
                        'blank': true,
                    },
                ]
            }
        ]
    }

    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="content">
                        <div className="tabs">
                            {
                                this.tabs.map((obj, index) => (
                                    <div key={index} className="tab">
                                        <div className="tab-entry">
                                            <div className="title">{obj.title}</div>
                                            {
                                                obj.links.map((link_object, index) => (
                                                    <a
                                                        key={index}
                                                        className="link"
                                                        href={link_object.href}
                                                        target={link_object.blank ? "_blank" : null}
                                                        rel={link_object.blank ? "noopener" : null}
                                                    >
                                                        {link_object.name}
                                                        {
                                                            link_object.blank ?
                                                                <svg x="0px" y="0px" viewBox="0 0 100 100"
                                                                     width="15" height="15">
                                                                    <path fill="currentColor" d="
                                                      M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
                                                      0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z
                                                    ">
                                                                    </path>
                                                                    <polygon fill="currentColor" points="
                                                      45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
                                                      14.9 62.8,22.9 71.5,22.9
                                                      ">
                                                                    </polygon>
                                                                </svg> : null
                                                        }
                                                    </a>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <section className="copy-right">
                            <p className="text">Copyright © 2019 Kotics</p>
                        </section>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;