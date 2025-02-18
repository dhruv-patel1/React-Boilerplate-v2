//install -> import -> use
import React from "react";
import ReactDOM from "react-dom";
import { Provider} from "react-redux";
import AppRouter, { history } from "./routers/AppRouter"
import configureStore from "./store/configureStore";
import {login, logout} from "./actions/auth";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import {firebase} from "./firebase/firebase";
import LoadingPage from "./components/LoadingPage";


const store = configureStore();

//add expense -> water bill

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

let hasRendered = false;
const renderApp = () =>{
    if(!hasRendered){
     ReactDOM.render(jsx, document.getElementById('app'));
     hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage/>, document.getElementById('app'));


firebase.auth().onAuthStateChanged((user) =>{
    if(user){
        store.dispatch(login(user.uid));
        renderApp();
        if(history.location.pathname === "/") {
            history.push("/dashboard");
        }    
    }
    else{
        store.dispatch(logout());
        renderApp();
        history.push("/");
    }
})



//Switch goes through the routes to see if a match is found
//If found, it will display
//Else, the pageNotFound Component will be loaded

