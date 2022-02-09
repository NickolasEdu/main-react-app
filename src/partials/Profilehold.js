import '../styles/Profile.css'

const Profilehold = ({ image, name, bio}) => {
    return(
        <div className="Profile">
            <img src={image} />
            <h1>{name}</h1>
            <p>{bio}</p>
        </div>
        
    )
}

export default Profilehold;