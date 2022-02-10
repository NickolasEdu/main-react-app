import styled from 'styled-components'

const Main = styled.div`
    margin: 25px auto;
    width: 25%;
    padding: 20px;
    border-radius: 1%;
    box-shadow: 0 0 10px rgb(21, 21, 133);
`

const Photo = styled.img`
    width: 100%;
    height: 80%;
`

const Profilehold = ({ image, name, bio}) => {
    return(
        <Main>
            <Photo src={image} />
            <h1>{name}</h1>
            <p>{bio}</p>
        </Main>
        
    )
}

export default Profilehold;