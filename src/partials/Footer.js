import Styled from 'styled-components'

const Main = Styled.footer`
    background: #45A29E;
    width: 100vw;
    margin: 0;
    color: #1A1A1D;
    text-align: center;
`

export default function Footer() {
    return(
        <Main>
            <h1>Developed by: Myself</h1>
        </Main>
    )
}