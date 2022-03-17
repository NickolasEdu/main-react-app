import Profile from "../partials/Profile"
import Box from "../partials/Box/Box"
import Boxes from "../partials/Box/Boxes"
import Profilehold from "../partials/Profilehold"
import Footer from '../partials/Footer'

import imgCoding from "../img/codinghold.jpg"
import imgDev from "../img/dev.jpg"
import imgFront from "../img/front.jpg"

function Content() {
    return (
        <>

            <Profilehold>
                <Profile />
            </Profilehold>

            <Boxes>
                <Box
                    image={imgCoding}
                    title="Projeto 1"
                    text="aqui vai o projeto 3"
                />

                <Box
                    image={imgDev}
                    title="Projeto 2"
                    text="Aqui vai o projeto 2"
                />

                <Box
                    image={imgFront}
                    title="Projeto 3"
                    text="Aqui vai o projeto 3"
                />
            </Boxes>

            <Footer />
        </>
    )
}

export default Content