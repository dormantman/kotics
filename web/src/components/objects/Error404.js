import React, {Component} from "react";

class Error404 extends Component {
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
                            <div className="title">404</div>
                        </div>
                        <section className="page_404">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12 ">
                                        <div className="col-sm-10 col-sm-offset-1  text-center">
                                            <div className="four_zero_four_bg">
                                                <h1 className="text-center ">404</h1>
                                            </div>
                                            <div className="contant_box_404">
                                                <h3 className="h2">
                                                    Похоже ты потерялся
                                                </h3>
                                                <p>страница, которую вы ищете, недоступна!</p>
                                                <a onClick={() => {
                                                    history.back()
                                                }} className="link_404">Вернуться</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default Error404;