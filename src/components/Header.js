import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCode} from "@fortawesome/free-solid-svg-icons"
import "../styles/Header.css"


function Header() {


  return (
    <header>
      <div className="header-title">
        <h1>Christopher Healy</h1>
        <FontAwesomeIcon className="code-icon" icon={faCode}/>
      </div>

      <nav>
        <ul>
          <li className="nav-link"><a href="#about">About</a></li>
          <li className="nav-link"><a href="#experience">Experience</a></li>
          <li className="nav-link"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header