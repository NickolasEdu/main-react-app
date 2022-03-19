import Styled from 'styled-components'

const Main = Styled.footer`
    background: #45A29E;
    width: 100%;
    margin: 0;
    color: #FFFFFF;
    text-align: center;
`

export default function Footer() {
    return(
        <Main>
            <h1>Developed by: Myself</h1>
        </Main>
    )
}