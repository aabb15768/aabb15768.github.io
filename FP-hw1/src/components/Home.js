import React from 'react'
import logo1 from '../img/1.jpeg'
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

export default () => {
    return (
        <div className="card mb-4">
            <h1 className="my-4">Home<br/>
                <h5>Wellcome to Lee Yen Chun's Resume!</h5>
            </h1>
            <img className="card-img-top" src={logo1} alt="test"/>
            <div className="card-body">
                <h2 className="card-title">Introduction</h2>
                <p>
                    這是陳琨老師所開設的前端程式設計的作業一：個人履歷。
                </p>
                <p>
                    我是地質三李彦均，就讀國立臺灣大學，學號b03204032，圖中照片左邊是我老婆，右邊是我，下面是我可愛的女兒，今年兩歲：）。
                </p>
                <p>
                    <NavLink className="navbar-brand" to="/About#">履歷主頁連結</NavLink>
                </p>
            </div>
            <div className="card-footer text-muted">
                Posted on April, 21, 2019 by Lee Yen Chun
                <br/><a href="#"> Back to Top</a>
            </div>
        </div>    
    );
};