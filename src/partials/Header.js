import styled from 'styled-components'

const Navbar = styled.header`
    background-color: rgb(21, 21, 133);
    color: #f5f5f5;
    text-align: center;
    height: 100%;
    width: 100%;
`

export default function Header() {
    return(
        <Navbar>
            <h1>This is the navbar</h1>
        </Navbar>
    )
}