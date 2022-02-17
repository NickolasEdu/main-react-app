import styled from 'styled-components'

const Father = styled.div`
    display: flex;
    margin: auto;
`

export default function Boxes({ children }) {
    return(
        <Father>
            { children }
        </Father>
    )
}