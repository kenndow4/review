import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { DataCon } from "../data/data";
import "../css/menu.css"

const Menu = () => {

   const {revision}=useContext(DataCon);

    return ( 
        <nav>
            <NavLink to="/">List Songs</NavLink>
            <NavLink to="/review">Liked ({revision.length})</NavLink>
        </nav>
     );
}
 
export default Menu;