import { useState } from 'react'
import './TextField.css'

const FieldText = (props) => {

    const inputText = (event)  => {
        props.inputText(event.target.value)
    }

    const placeholder = `${props.placeholder}...`
    return(
        <div className="field-text">
            <label>{props.label}</label>
            <input onChange={inputText} value={props.value} required={props.required} placeholder={placeholder} />
        </div>
    )
}

export default FieldText;