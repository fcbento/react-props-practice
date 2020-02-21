import React, { Component } from 'react'

export default props => {
    
    return (
        
        <div className={`input-group input-group-${props.size}`}>
            <span className="input-group-addon" id="sizing-addon3">{props.labelName}</span>
           
            <input 
                type="text" 
                className="form-control" 
                placeholder={props.placeholder} 
                value={props.inputValue} 
                onChange={props.change} 
                name={props.name}/>
        </div>
    )

}
