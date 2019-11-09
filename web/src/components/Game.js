import React, {Component} from "react";

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="body-container" style={{
                    backgroundColor: "#ffffff",
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.85), " +
                        "rgba(0, 0, 0, 0.85)), url(/media/gothic_bg.jpg)",
                    backgroundPosition: "center", backgroundSize: "cover"
                }}>
                    <div className="entry">
                        <div className="top">
                            <div className="title">Cryengine Gothic</div>
                        </div>
                        <div className="game">
                            <div className="top">
                                <div className="main">
                                    <h2>Cryengine Gothic</h2>
                                    <p style={{textAlign: 'center'}}>перезапуск любимой игры с современной графикой</p>
                                </div>
                                <div className="main" style={{paddingTop: 45}}>
                                    <h3>Наша цель:</h3>
                                    <p>- Перенести Готику 1 и 2 + НВ на движок Cryengine;</p>
                                    <p>- Улучшить графику, модели, текстуры, освещение, анимацию;</p>
                                    <p>- Расширить функционал, сделать систему модов;</p>
                                    <p>- Создание комьюнити разработчиков на собственном примере.</p>
                                    <p>- Неизменным останется: Боевка, Диалоги, Квесты, Имена.</p>
                                </div>
                            </div>
                        </div>
                        <div className="main-youtube">
                            <iframe width="640" height="360" src="https://www.youtube.com/embed/SDiVdizopCs"
                                    frameBorder="0" allow="encrypted-media"
                                    allowFullScreen></iframe>
                            <iframe width="640" height="360" src="https://www.youtube.com/embed/1zaZQCAlhrw"
                                    frameBorder="0" allow="encrypted-media"
                                    allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;