import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="container">
        <NavLink className="btn btn-outline-primary" to="/"> Inicio </NavLink>
        <NavLink className="btn btn-outline-primary" to="/contacto">Contacto</NavLink>
        <NavLink className="btn btn-outline-primary" to="/blog">Blog</NavLink>
      </div>
    </div>

    /* diferencia entre Link y NavLink
    Link: para navegar entre pestañas
    NavLink: el mismo uso pero con la clase active que permite mostrar la pestaña activa */
  );
};

export default Navbar;
