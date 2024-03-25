import{Link} from "react-router-dom";
import './NavBar.css'

function NavBar() {

    //Map button will link you to a 404 page, order flowers will link you to the order flowers page
    //Once Map page is made, we can change the link to the correct path
    return(
        <div className="navbar">
            {/* Navbar content */}
            <img src="src/assets/bwh-logo.svg" className={"bwh-logo"} alt={"logo"}/>
            <div className={"navButtons"}>
                <Link to={"/order-flowers"} className={"button"} id={"order"}>ORDER FLOWERS</Link>
                <Link to={"/map"} className={"button"} id={"map"}>HOSPITAL MAP</Link>
                <img src="src/assets/userIcon.png" className={"userIcon"} alt={"user Icon"}/>
            </div>
        </div>
    )
}

export default NavBar
