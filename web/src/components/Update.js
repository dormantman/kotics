import React, {Component} from "react";
import Carousel from "./objects/Carousel";
import Linkify from 'react-linkify';
import ReactHtmlParser from 'react-html-parser';

class Update extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    static formatScore(score) {
        return Updates.formatScore(score);
    }

    render() {
        const update = data.update;
        return <div>
            <div className="body-container" style={{
                backgroundColor: "#ffffff",
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.85), " +
                    "rgba(0, 0, 0, 0.85)), url(" + update.wallpaper + ")",
                backgroundPosition: "center", backgroundSize: "cover"
            }}>
                <div className="entry">
                    <div className="top">
                        <div className="title">{update.name}</div>
                    </div>
                    <div className="update">
                        <div className="top">
                            <div className="logo">
                                {
                                    update.logo ?
                                        <img className="image" src={update.logo} alt={update.name}/> :
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
                                            {update.name}
                                        </div>
                                }
                            </div>
                            <div className="info">
                                <div className="container">
                                    <div className="left">
                                        <div className="date">
                                            <div className="label">
                                                Дата выхода
                                            </div>
                                            <div className="value">
                                                {
                                                    update.release_date
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right">
                                        {/*<div className="description">*/}
                                        {/*    {ReactHtmlParser(update.description)}*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <Linkify>{ReactHtmlParser(update.description)}</Linkify>
                    </div>
                </div>
            </div>
            <div className="body-container">
                <div className="entry">
                    <div className="screenshots">
                        <Carousel images={update.screenshots}/>
                    </div>
                    <div className="youtube">
                        {
                            update.youtube ? <iframe width="100%" height="100%"
                                                     src={"https://www.youtube.com/embed/" + update.youtube}
                                                     frameBorder="0" allow="autoplay; encrypted-media"
                                                     allowFullScreen>
                            </iframe> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Update;