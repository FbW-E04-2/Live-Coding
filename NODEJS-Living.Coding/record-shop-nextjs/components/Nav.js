import Link from "next/link"

export default function nav() {
    return (
      <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo"/>
          </a>
          <span class="navbar-burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <Link href="/" class="navbar-item is-active">
              Home
            </Link>
            <Link  href="/orders" class="navbar-item">
              Orders
            </Link>
            <Link href="/records" class="navbar-item">
              Records
            </Link>
      
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
    )
}
