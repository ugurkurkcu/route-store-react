import { Link, NavLink } from "react-router-dom";
import { GiFlatPawPrint } from "react-icons/gi";
import { GiFootprint } from "react-icons/gi";
import api from "../utils/api";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/productContext";
import { BasketContext } from "../context/basketContex";

const Header = () => {
  const { setSelectedCategory } = useContext(ProductContext);
  const { basket } = useContext(BasketContext);
  const totalAmount = basket.reduce((total, i) => total + i.amount, 0);
  console.log(totalAmount);

  const [categories, setCatergories] = useState();
  useEffect(() => {
    api
      .get("/products/categories")
      .then((res) => setCatergories(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <nav className="py-2 navbar navbar-dark bg-black fixed-top navbar-expand-md">
      <div className="container-fluid alig">
        <div className="align-items-center d-flex gap-2">
          <GiFlatPawPrint style={{ color: "orange" }} className="fs-1" />
          <Link className="navbar-brand" to="/">
            ROUTE Store
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <GiFlatPawPrint style={{ color: "orange" }} className="mx-2 fs-1" />
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Route Store
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav align-items-md-center justify-content-end flex-grow-1 pe-1">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Ana Sayfa
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/sepet">
                  Sepet
                  <span className="bg-warning badge ms-1">{totalAmount}</span>
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Kategoriler
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                  {categories?.map((category, i) => (
                    <li key={i}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        style={{ textTransform: "uppercase" }}
                        className="dropdown-item"
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Ara"
              />
              <button
                style={{ backgroundColor: "orange" }}
                className="btn"
                type="submit"
              >
                Ara
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
