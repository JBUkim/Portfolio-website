import Link from "next/link";
import { withRouter } from "next/router";

function Navbar({ router }) {
  const navs = [
    { text: "Home", href: "/" },
    { text: "Skills", href: "/skills" },
    { text: "Project", href: "/project" },
    { text: "Contact", href: "/contact" },
    { text: "GitHub", href: "https://github.com/JBUkim" },
    // { text: '', href: '' },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="logo">
          Portfolio.
        </Link>

        <ul className="nav-links">
          {/* {navs.map((nav) => (
            // eslint-disable-next-line react/jsx-key
            <li>
              <a
                href={nav.href}
                className={`nav-item ${
                  router.pathname == nav.href ? "active" : ""
                }`}
              >
                {nav.text}
              </a>
            </li>
          ))} */}

          <li className="relative inline-block mx-5 active:font-bold hover:font-bold">
            <a href="/" className="">
              Home
            </a>
          </li>
          <li className="relative inline-block mx-5 active:font-bold hover:font-bold">
            <a href="/">Skills</a>
          </li>
          <li className="relative inline-block mx-5 active:font-bold hover:font-bold">
            <a href="/">Project</a>
          </li>
          <li className="relative inline-block mx-5 active:font-bold hover:font-bold">
            <a href="/">Contact</a>
          </li>
          <li className="relative inline-block mx-5 active:font-bold hover:font-bold">
            <a href="https://github.com/JBUkim">GitHub</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);
