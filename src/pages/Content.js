import Profile from "../partials/profile/Profile"
import Resume from "../partials/resume/Resume"
import Box from "../partials/Box/Box"
import Boxes from "../partials/Box/Boxes"
import Profilehold from "../partials/profile/Profilehold"
import Footer from '../partials/Footer'


import imgMain from "../img/imgMain.jpg"
import wProgress from "../img/workprogress.jpg"

function Content() {
    return (
        <>

            <Profilehold>
                <Profile
                    image={imgMain}
                    title="Nickolas Eduardo"
                    subtitle="Web Developer | Frontend"
                />
            </Profilehold>

            <Resume />

            <Boxes>
                <Box
                    image={wProgress}
                />
            </Boxes>

            <Footer />
        </>
    )
}

export default Content