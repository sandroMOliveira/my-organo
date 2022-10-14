import Card from '../Card';
import './Teams.css'

const Teams = (props) => {
    return(
        (props.collaborators.length > 0 ?
        <section className="team" style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.teamName}</h3>
            <div className='collaborators'>
                {props.collaborators.map(collaborator => <Card key={collaborator.name} name={collaborator.name} role={collaborator.role} 
                image={collaborator.image} background={props.primaryColor} />)}
            </div>
        </section> : ''))
}

export default Teams;
