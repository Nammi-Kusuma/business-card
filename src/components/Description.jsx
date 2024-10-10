import '../css/Description.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Description() {
    return (
        <div className="description-container">
            <div className="title">
                <h2>Laura Smith</h2>
                <p>Frontend developer</p>
            </div>
            <div className="buttons">
                <button><FontAwesomeIcon className="icon" icon={faEnvelope} />Email</button>
                <button className="linkedin"><FontAwesomeIcon className="icon" icon={faLinkedin} style={{color: "#fcfcfc",}} />Linkedin</button>
            </div>

            <div className="bio">
                <div className="sub-bio">
                    <h4 className="bio-title">About</h4>
                    <p className="text">I’m a frontend developer specializing in React, with a strong background in HTML, CSS, and JavaScript. I enjoy creating intuitive user interfaces and continuously learning new technologies.</p>
                </div>

                <div className="sub-bio">
                    <h4 className="bio-title">Interests</h4>
                    <p className="text">I enjoy hiking and exploring nature trails. I also love reading mystery novels and trying out new recipes in the kitchen. Additionally, I have a passion for photography and capturing beautiful moments.</p>
                </div>
            </div>
        </div>
    )
}

export default Description