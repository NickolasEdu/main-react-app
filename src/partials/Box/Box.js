import styled from 'styled-components'

const Banner = styled.img`
    width: 100%;
    height: 50vh;
`

const Box = ({ image }) => {

    return(
        <>
            <Banner src={image} />
        </>
    )
}

export default Box;