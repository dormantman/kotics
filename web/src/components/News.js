import React, {Component} from "react";
import Linkify from 'react-linkify';
import ReactHtmlParser from 'react-html-parser';

class News extends Component {
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
                            <div className="title">Новости</div>
                        </div>
                        {
                            data.results.map(obj => (
                                <div className="news">
                                    <a href={"/news/" + obj.id + "/"}><h3 className="title">{obj.title}</h3></a>
                                    <p className="description">
                                        <Linkify>{ReactHtmlParser(obj.description.slice(0, 512) + '...')}</Linkify>
                                    </p>
                                    <p className="release_date">{obj.release_date}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default News;