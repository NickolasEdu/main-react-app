import styled from 'styled-components'

const Main = styled.div`
    display: flex;
    justify-content: center;
    margin: 0;
    width: 100vw;
    height: 95vh;
    background: rgba(31, 40, 51, 1);  
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10.9px);
    -webkit-backdrop-filter: blur(10.9px);
    border: 1px solid rgba(95, 87, 87, 0.45);
`

const Profilehold = ({ children }) => {
    return(
        <Main>
            { children }
        </Main>
        
    )
}

export default Profilehold;