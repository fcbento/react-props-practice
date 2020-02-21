import React from 'react'

export default (props) => {
    return (
        <div>
            <button 
                type="button" 
                className={`btn btn-${props.btnType}`} 
                onClick={props.btnAction}>
                    {props.btnName}
            </button>
        </div>
    )
}
