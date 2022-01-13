import Link from "next/link";

export default function nav() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <span className="navbar-item hero is-warning is-centered" href="/">
          R-Shop
        </span>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link href="/">
            <a className="navbar-item">Home</a>
          </Link>

          <Link href="/records" >
            <a className="navbar-item">Records</a>
          </Link>
          <Link href="/orders">
            <a className="navbar-item">Orders</a>
          </Link>
          <Link href="/orders">
            <a className="navbar-item">Users</a>
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link href="/signup">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
              </Link>
              <Link href="/login">
                <a className="button is-light">Log in</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    /*   <nav>
        <ul>
          <li><Link href="/">Home</Link>  </li>
          <li><Link href="/orders">Orders</Link> </li>
          <li><Link href="/records">Records</Link> </li>
          <li><Link href="/cart">Cart</Link> </li>
        </ul>
      </nav> */
  );
}
