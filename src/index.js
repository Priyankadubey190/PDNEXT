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