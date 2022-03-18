import styled from 'styled-components'

const Main = styled.div`
    width: 80vw;
    margin: 0.5em auto;
    font-size: 2em;
`

export default function Resumestyle({ children }) {
    return(
        <Main>
            { children }
        </Main>
    )
}