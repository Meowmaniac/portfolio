import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top">
        <div class="container">
          <a class="navbar-brand" href="/" title="Homepage">
            <img
              src="images/logo.png"
              alt="Katrin's logo"
              class="logo img-fluid"
            />
            Katrin Pavlova
          </a>
          <Link>Katrin Pavlova</Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/work">
                  Work
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
