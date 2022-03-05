import React from "react";

const BirthdayEntry = (props) => {
    return(
        <div className="entry">
            
                <img src={props.photo} alt="" />
            
            <div className="profileInfo">
                <h3 className="name">{props.name}</h3>
                <p>{props.age} years old</p>    
            </div>
        </div>    
    );
}

export default BirthdayEntry;