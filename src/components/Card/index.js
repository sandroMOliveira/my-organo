import './Card.css'

const Card = ({ name, role, image, background }) => {
    return(
        <div className='card'>
            <div className='header' style={{ backgroundColor: background }}>
                <img src={image} alt={`Avatar of ${name}`} />
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    )
}

export default Card;