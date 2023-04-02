
import './styles.scss';
import CartWidget from '../CartWidget/CartWidget.js';

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-bar">
      <div className="left">
        <div className="logo">
          
          <img src={require('./mountain-logo-.png')} alt="Site logo" height="100px" width="100px" />
          
        </div>

        <ul className="menu">


          <li><Link to ={`/itemlist`}>Catalogo</Link></li>
          
          
        </ul>
      </div>

      <div className="right">
        <CartWidget/>
      </div>
    </div>  )
}

export default Navbar;