import styled from 'styled-components'

const Banner = styled.img`
    width: 100vw;
    height: 100vh;
`

const Box = ({ image }) => {

    return(
        <>
            <Banner src={image} />
        </>
    )
}

export default Box;