import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram, faSquareTwitter, faSquareFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import '../css/Footer.css'

function Footer() {
    return (
        <footer>
            <FontAwesomeIcon className="icon-f" icon={faSquareTwitter} />
            <FontAwesomeIcon className="icon-f" icon={faSquareFacebook} />
            <FontAwesomeIcon className="icon-f" icon={faSquareInstagram} /> 
            <FontAwesomeIcon className="icon-f" icon={faGithub} />       
        </footer>
    )
}

export default Footer