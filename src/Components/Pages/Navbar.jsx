import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "./Spinner";

export default function Navbar() {
  const { user, isAuthenticated, isLoading, logout, loginWithRedirect } =
    useAuth0();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h2 className="m-0 text-primary-light">Rising-Up</h2>
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ✅ Search Bar */}
        <form className="d-flex mx-5" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search courses..."
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>



        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <NavLink exact to="/" className="nav-item nav-link" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-item nav-link" activeClassName="active">
              About
            </NavLink>
            <NavLink to="/courses" className="nav-item nav-link" activeClassName="active">
              Courses
            </NavLink>
            <div className="nav-item dropdown">
              <NavLink to="/pages" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Pages
              </NavLink>
              <div className="dropdown-menu fade-down m-0">
                <NavLink to="/team" className="dropdown-item" activeClassName="active">
                  Our Team
                </NavLink>
                <NavLink to="/testimonial" className="dropdown-item" activeClassName="active">
                  Testimonial
                </NavLink>
                <NavLink to="/feedback" className="dropdown-item" activeClassName="active">
                  Feedback
                </NavLink>
              </div>
            </div>
            <NavLink to="/contact" className="nav-item nav-link" activeClassName="active">
              Contact
            </NavLink>
          </div>

          {/* ✅ Search Bar
          <form className="d-flex mx-3" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search courses..."
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form> */}

          {/* Auth section */}
          {isLoading && <Spinner />}

          {isAuthenticated && (
            <NavLink to="/profile" className="nav-item nav-link" activeClassName="active">
              {user.name}
            </NavLink>
          )}

          {isAuthenticated ? (
            <button
              className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            >
              Log out
            </button>
          ) : (
            <button
              className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
              onClick={() => loginWithRedirect()}
            >
              Join Now<i className="fa fa-arrow-right ms-3"></i>
            </button>
          )}
        </div>
      </nav>
    </>
  );
}
