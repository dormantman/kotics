import React, {Component} from "react";

class Files extends Component {
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
                            <div className="title">Файлы</div>
                        </div>
                        {
                            data.results.map(obj => (
                                <div className="file">
                                    <a href={obj.url} target="_blank"><p>{obj.name}</p></a>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Files;