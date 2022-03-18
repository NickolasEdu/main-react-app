import styled from 'styled-components'

const Father = styled.div`
    margin: auto;
    width: 65vw;
    height: 80vh;
    background: #FFFFFF;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgb(21, 21, 133);
`

const Banner = styled.img`
    width: 100%;
    height: 80%;
    border-radius: 2%;
`



export default function Profile({ image, title, subtitle }) {
  return(
    <Father>
      <Banner src={image}/>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>

    </Father>
  )
}