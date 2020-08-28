import React from 'react'

 function ValidationComponent(props) {
    if(props.length>5){
        return (
            <p>
                Text long enough
            </p>
        )
    }

    return (
        <div>
            <p>Text Too Short</p>
        </div>
    )
}
export default ValidationComponent;