import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { DataCon } from "../data/data";
import "../css/menu.css"

const Menu = () => {

   const {revision}=useContext(DataCon);

    return ( 
        <nav>
            <NavLink to="/">List Home</NavLink>
            <NavLink to="/review">Review ({revision.length})</NavLink>
        </nav>
     );
}
 
export default Menu;