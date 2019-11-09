import React, {Component} from "react";
import ReactHtmlParser from 'react-html-parser';
import Linkify from "react-linkify";

class Updates extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    static formatScore(score) {
        const deg = Math.random() * 360;
        let colors = [
            'rgba(255, 153, 102, 0.7)',
            'rgba(255, 94, 98, 0.7)'
        ];

        if (score >= 9.5) {
            colors = [
                'rgba(127, 0, 255, 0.7)',
                'rgba(225, 0, 255, 0.7)'
            ];
        } else if (score >= 8.5) {
            colors = [
                'rgba(109, 16, 126, 0.7)',
                'rgba(240, 51, 88, 0.7)'
            ];
        } else if (score >= 7.5) {
            colors = [
                'rgba(206, 159, 252, 0.7)',
                'rgba(115, 103, 240, 0.7)'
            ];
        } else if (score >= 6.5) {
            colors = [
                'rgba(4, 206, 155, 0.7)',
                'rgba(100, 228, 8, 0.7)'
            ];
        } else if (score >= 5.5) {
            colors = [
                'rgba(255, 148, 21, 0.7)',
                'rgba(255, 199, 9, 0.7)'
            ];
        } else if (score >= 4.5) {
            colors = [
                'rgba(246, 211, 101, 0.7)',
                'rgba(253, 160, 133, 0.7)'
            ];
        }
        return 'linear-gradient(' + deg + 'deg, ' + colors[0] + ', ' + colors[1] + ')'
    }

    render() {
        return <div className="body-container">
            <div className="entry">
                <div className="top">
                    <div className="title">Обновления</div>
                </div>
                {
                    data.results.map(obj => (
                        <div className="game-container" key={obj.id}>
                            <div className="description-container">
                                <a href={'/updates/' + obj.id + '/'}>
                                    <h3 className="title">
                                        {obj.name}
                                    </h3>
                                </a>
                                <div className="description">
                                     <Linkify>{ReactHtmlParser(obj.description)}</Linkify>
                                </div>
                            </div>
                            <div className="game">
                                <div className="card" style={{
                                    backgroundImage: "linear-gradient(" +
                                        "rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.80)" +
                                        "), url(" + (obj.wallpaper ? obj.wallpaper : '/media/blurred.jpg') + ")"
                                }}>
                                    <div className="entry">
                                        <div className="logo">
                                            {
                                                <a href={'/updates/' + obj.id + '/'}>
                                                    {
                                                        obj.logo ?
                                                            <img className="image" src={obj.logo} alt={obj.name}/> :
                                                            <div className="image no-image" style={{
                                                                background: "linear-gradient(" +
                                                                    "70deg, #414042, #58595B)",
                                                                textAlign: "center",
                                                                marginTop: 'auto',
                                                                paddingRight: 20,
                                                                paddingLeft: 20,
                                                                paddingTop: 30,
                                                                fontSize: '0.9em',
                                                            }}>
                                                                {obj.name}
                                                            </div>
                                                    }
                                                </a>
                                            }
                                        </div>
                                        <div className="score" style={
                                            {
                                                background: Updates.formatScore(obj.average_score),
                                                height: 32 + obj.average_score,
                                                width: 32 + obj.average_score,
                                            }
                                        }>
                                            <p className="number">
                                                {Number((obj.average_score).toFixed(2))}
                                            </p>
                                        </div>
                                        <div className="date">
                                            {
                                                obj.release_date
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    }
}

export default Updates;