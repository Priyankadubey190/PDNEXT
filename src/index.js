<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


=======
import React from "react";
import Moon from "react-dom";
import "./index.css";
const Person = ({img,name,job,children}) =>{
    const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
    return (
        <article className="person">
            <img 
             src={url} 
             alt="person image"/>
             <h4>{name}</h4>
             <h4>{job}</h4>
             {children}
        </article>
    )
}
const PersonList = () =>{
    return (
        <section className="Person-list">
            
            <Person img="34" name="john" job="developer"/>
            <Person img="22" name="bob" job="developer">
                <p>
                    Loren ipsum dolor sit amet consectetur,adipisicing alit 
                </p>
            </Person>
            <Person img="56" name="david" job="developer"/>
       
        </section>
    )
}
Moon.render(<PersonList/>,
document.getElementById('root'))
>>>>>>> 97eadd357783f919b1c7b8fa46cde1ef1d263b3c
