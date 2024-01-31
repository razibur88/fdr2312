import "./header.css"
import { FaLocationArrow,FaLongArrowAltRight } from "react-icons/fa";


const Header = () => {
  return (
    <header>
        <div className="container">
           <div className="header_main">
            <div className="header_left">
                Lorem ipsum dolor sit amet.
                <FaLocationArrow className="one"/>
                <FaLocationArrow className="one"/>
                <FaLocationArrow className="one"/>
                <FaLongArrowAltRight/>
            </div>
            <div className="header_right">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, distinctio.</p>
            </div>
           </div>
        </div>
    </header>
  )
}

export default Header