import styled from 'styled-components'

const Main = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    background-color: #000000;
    padding: 50px;
`

const Profilehold = ({ children }) => {
    return(
        <Main>
            { children }
        </Main>
        
    )
}

export default Profilehold;