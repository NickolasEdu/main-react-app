import '../styles/Box.css'

const Box = ({ image, title, text}) => {

    return(
        <div className="Box">
            <img src={image} />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Box;