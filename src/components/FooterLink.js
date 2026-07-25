import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function FooterLink(props){


    return (
        <a href={props.href} target="_blank" className="footer-link">
            <FontAwesomeIcon icon={props.icon} size="2x" color="#eee"/>
        </a>
    )
}

export default FooterLink