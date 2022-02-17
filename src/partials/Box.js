import styled from 'styled-components'

const Father = styled.div`
    margin: auto;
    width: 25%;
    background-color: rgb(236, 232, 232);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgb(21, 21, 133);
`

const Banner = styled.img`
    width: 100%;
    height: 80%;
`

const Box = ({ image, title, text}) => {

    return(
        <Father>
            <Banner src={image} />
            <h3>{title}</h3>
            <p>{text}</p>
        </Father>
    )
}

export default Box;