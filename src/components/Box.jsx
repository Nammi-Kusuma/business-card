import '../css/Box.css'
import Description from './Description'
import Footer from './Footer'
import GirlImg from '../assets/girl.jpg'

function Box() {
    return (
        <div className="box-container">
            <img src={GirlImg} className="G-Img" alt="" />
            <Description />
            <Footer />
        </div>
    )
}

export default Box