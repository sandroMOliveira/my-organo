import { useState } from 'react'
import Button from '../Button'
import Dropdown from '../DropDown'
import TextField from '../TextField'
import './Form.css'

const Form = (props) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const saveCard = (event) => {
        event.preventDefault();
        props.cadasterCollaborator({ name, role, image, team })
        setName('')
        setRole('')
        setImage('')
        setTeam('')
    }

    return (
        <section className="form-input">
            <form onSubmit={saveCard}>
                <h2>Preencha ps dados para criar o card do colaborador</h2>
                <TextField required={true}
                    label="Name" placeholder="Type your name" value={name} inputText={value => setName(value)} />
                <TextField
                    required={true} label="Role" placeholder="Type your role" value={role} inputText={value => setRole(value)} />
                <TextField
                    label="Image" placeholder="Input your image" value={image} inputText={value => setImage(value)} />
                <Dropdown
                    required={true} label="Team" items={props.teams} value={team} inputText={value => setTeam(value)} />
                <Button> <img src="/images/pen.png" width="25" height="25" alt="Pen icon" /> Create Card</Button>
            </form>
        </section>
    )
}

export default Form;