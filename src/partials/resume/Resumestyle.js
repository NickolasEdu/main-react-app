import styled from 'styled-components'

const Main = styled.div`
    width: 85vw;
    height: 105vh;
    margin: 0 auto;
    font-size: 1.8em;
    box-sizing: border-box;
`

export default function Resumestyle({ children }) {
    return(
        <Main>
            { children }
        </Main>
    )
}