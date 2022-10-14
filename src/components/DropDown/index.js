import './DropDown.css'

const DropDown = (props) => {
    return(
        <div className="drop-down">
        <label>{props.label}</label>
        <select onChange={event => props.inputText(event.target.value)} required={props.required} type='Select...' value={props.value}>
            <option value=""/>
            {props.items.map(item => {
                return <option key={item}>{item}</option>
            })}
        </select>
    </div>
    )
}

export default DropDown;