import React, {Component} from "react";
import ReactDOM from "react-dom";
import Main from "./Main.js";
import Header from "./objects/Header";
import Content from "./objects/Content";
import Footer from "./objects/Footer";
import Login from "./auth/Login";
import Profile from "./Profile";
import Logout from "./auth/Logout";
import Register from "./auth/Register";
import Updates from "./Updates";
import Update from "./Update";
import News from "./News";
import Error404 from "./objects/Error404";
import NewsItem from "./NewsItem";
import Files from "./Files";
import Game from "./Game";
import Download from "./Download";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        let pathname = window.location.pathname;

        if (pathname === '/') {
            return (
                <div>
                    <Header/>
                    <Content body={<Main/>}/>
                    <Footer/>
                </div>
            );

        } else if (pathname === '/game/') {
            return (
                <div>
                    <Header/>
                    <Content body={<Game/>}/>
                    <Footer/>
                </div>
            );

        } else if (pathname === '/accounts/login/') {
            return (
                <div>
                    <Header/>
                    <Content body={<Login/>}/>
                    <Footer/>
                </div>
            );

        } else if (pathname === '/accounts/register/') {
            return (
                <div>
                    <Header/>
                    <Content body={<Register/>}/>
                    <Footer/>
                </div>
            );

        } else if (pathname === '/accounts/logout/') {
            return (
                <div>
                    <Header/>
                    <Content body={<Logout/>}/>
                    <Footer/>
                </div>
            );

        } else if (pathname === '/profile/') {
            return (
                <div>
                    <Header/>
                    <Content body={<Profile/>}/>
                    <Footer/>
                </div>
            );

        } else if (pathname === '/updates/') {
            return (
                <div>
                    <Header/>
                    <Content body={<Updates/>}/>
                    <Footer/>
                </div>
            );

        } else if (pathname.match(/^\/updates\/(\d+)/)) {
            return (
                <div>
                    <Header/>
                    <Content body={<Update/>}/>
                    <Footer/>
                </div>
            );

        } else if (pathname === '/news/') {
            return (
                <div>
                    <Header/>
                    <Content body={<News/>}/>
                    <Footer/>
                </div>
            );


        } else if (pathname.match(/^\/news\/(\d+)/)) {
            return (
                <div>
                    <Header/>
                    <Content body={<NewsItem/>}/>
                    <Footer/>
                </div>
            );
        } else if (pathname === '/download/') {
            return (
                <div>
                    <Header/>
                    <Content body={<Download/>}/>
                    <Footer/>
                </div>
            );

        } else if (pathname === '/files/') {
            return (
                <div>
                    <Header/>
                    <Content body={<Files/>}/>
                    <Footer/>
                </div>
            );

        } else {
            return (
                <div>
                    <Header/>
                    <Content body={<Error404/>}/>
                    <Footer/>
                </div>
            );
        }
    }
}

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App/>, wrapper) : null;