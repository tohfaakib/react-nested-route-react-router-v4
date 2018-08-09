import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import User from './User';
import Login from './Login';




import registerServiceWorker from './registerServiceWorker';

//module for react router
import {BrowserRouter as Router} from "react-router-dom";
import Route from "react-router-dom/Route";

ReactDOM.render(
    <Router>
        <div>
        <Route exact strict path="/" component={App}/>

        <Route exact strict path="/about" render={
            ()=>{
                return (<h1>Welcome to about</h1>);
            }
        } />

        <Route path="/user" component={User} />
        <Route path="/user/:id" component={Login} />

        </div>

    </Router>,

    document.getElementById('root')
);




registerServiceWorker();
