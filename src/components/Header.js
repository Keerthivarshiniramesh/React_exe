import bg_image from "../images/bg.jpg"
import { Link } from "react-router-dom"

function Header() {
    return (
        <header>
            <img src={bg_image} alt="hello"></img>
            <div className="intro">
                <h1 style={{ display: "inline-block" }}>KEERTHIVARSHINI</h1><br></br>
                <h3 style={{ display: "inline-block" }}>PHOTOGRAPHER</h3>
            </div>
            <nav>
                <ul>
                    <li><a href="/" className="">Home</a></li>
                    <li><a href="/portofolio">Portofolio</a></li>
                    <li><a href="/about">Contact Us</a></li>
                    {/* <Link to='/'>Home</Link>
                    <Link to='/portofolio'>Portofolio</Link>
                    <Link to='/about'>Contact</Link> */}

                </ul>
            </nav>
        </header>
    )
}
export default Header
