import FooterLink from "./FooterLink"
import {
  faLinkedin,
  faSquareGithub,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "../styles/Footer.css"

function Footer(){


    return (
        <footer>
            <ul className="footer-links-list">
                <FooterLink 
                    href="https://www.linkedin.com/in/christopher-healy-ie"
                    icon={faLinkedin}
                />

                <FooterLink
                    href="https://github.com/chealy90"
                    icon={faSquareGithub}
                />

                <FooterLink 
                    href="https://www.instagram.com/christopher_hly/"
                    icon={faSquareInstagram}
                />
            </ul>

                <p>© Christopher Healy, {new Date().getFullYear()}</p>
                <p>No vibe-coding here :)</p>
        </footer>
    )
}

export default Footer