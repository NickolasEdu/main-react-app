import styled from 'styled-components'

const Main = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
`

const Profilehold = ({ children }) => {
    return(
        <Main>
            { children }
        </Main>
        
    )
}

export default Profilehold;