import styled from 'styled-components'

const Navbar = styled.header`
    background-color: rgb(21, 21, 133);
    color: #f5f5f5;
    text-align: center;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
`

export default function Header() {
    return(
        <Navbar>
            <h1>Welcome to my profile</h1>
        </Navbar>
    )
}