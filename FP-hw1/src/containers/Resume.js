import React from 'react';
import Navbar from '../components/Navbar';
import Pagination from '../components/Pagination';
import Project from '../components/Project';
import Contact from '../components/Contact';
import Search from '../components/Search';
import Category from '../components/Category';
import SideWidget from '../components/SideWidget';
import Footer from '../components/Footer';
import Home from '../components/Home';
import About from '../components/About';
import { BrowserRouter } from 'react-router-dom';
import { NavLink, Switch, Route, Redirect } from "react-router-dom";


const initialState = {
    postID: 0,
};

class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    navItems = [
        {
            name: "Home",
            url: "#",
        },
        {
            name: "About",
            url: "#",
        },
        {
            name: "Project",
            url: "#",
        },
        {
            name: "Contact",
            url: "#",
        },
    ];

    setPostNumber = (postNumber) => {
        this.setState({postID: postNumber});
    };

    render() {
        return(
            <BrowserRouter>
                <div>
                    {/* Navigation */}
                    <Navbar navItems={this.navItems}></Navbar>

                    {/* Page Content */}
                    <div className="container">
                        <div className="row">
                            {/* <!-- Blog Entries Column --> */}
                            <div className="col-md-8">
                                <Switch>
                                    {/* <Route exact path="/">
                                        <h1 className="my-4">Posts
                                            <br/><small>wellcome to Lee Zhi Yi's Posts</small>
                                        </h1>
                                        {/* <!-- Blog Post --> */}
                                    {/* </Route> */}

                                    <Route path="/Home">
                                        <Home></Home>
                                    </Route>

                                    <Route path="/About">
                                        <About></About>
                                    </Route>

                                    <Route path="/Project">
                                        <Project></Project>
                                    </Route>

                                    <Route path="/Contact">
                                        <Contact></Contact>
                                    </Route>

                                    <Redirect from="/" to="/home"/>
                                </Switch>

                                {/* <!-- Pagination --> */}
                                <Pagination></Pagination>

                            </div>

                            {/* <!-- Sidebar Widgets Column --> */}
                            <div className="col-md-4">
                                {/* <!-- Search Widget --> */}
                                <Search></Search>
                                {/* <!-- Categories Widget --> */}
                                <Category setNumber={this.setPostNumber}></Category>
                                {/* <!-- Side Widget --> */}
                                <SideWidget></SideWidget>
                            </div>
                        </div>
                        {/* <!-- /.row --> */}
                    </div>     
                    {/* <!-- /.container --> */}

                    {/* <!-- Footer --> */}
                    <Footer></Footer>
                </div>            
            </BrowserRouter>
        );
    }
}

export default Resume;