import React, {Component} from "react";
import Linkify from 'react-linkify';
import ReactHtmlParser from 'react-html-parser';

class NewsItem extends Component {
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
                            <div className="title">{data.news.title}</div>
                        </div>
                        <div className="news">
                            <p className="description">
                                <Linkify>{ReactHtmlParser(data.news.description)}</Linkify>
                            </p>
                            <p className="release_date">{data.news.release_date}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;