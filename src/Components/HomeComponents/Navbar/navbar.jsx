import React,{Fragment} from "react";
import SubNavbar from "./subNavbar";
import MobileNavbar from "./mobileNavbar";

const Navbar = () => {
    return (
        <Fragment>
            <SubNavbar />
            <MobileNavbar />
        </Fragment>
    )
}

export default Navbar ;