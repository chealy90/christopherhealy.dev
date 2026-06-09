import Typewriter from "typewriter-effect"
import "../styles/About.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faLightbulb} from "@fortawesome/free-solid-svg-icons"

function About() {


  return (
    <section id="about">
      <div id="typewriter-container">
        <Typewriter
          options={{
            strings: ["Automation", "Full-stack", "Embedded Systems"],
            autoStart: true,
            loop: true,
            delay: 70,
            deleteSpeed: 50,
            pauseFor: 1500
          }}
        />
      </div>

      <div id="about-main-content">
        <div id="about-info">
          <span className="section-header-span">
            <FontAwesomeIcon icon={faLightbulb}/>
            <h2>About Me</h2>
          </span>
          <p>
            I'm a junior dev primarily focused in full-stack development, automation, and embedded systems. In 2023, I officially entered the world of software with a QQI Level 5 at Cavan Institute.
            I'm now most of the way through an B.Sc. at Dundalk Institute of Technology, and seeking a role in the progression of technology.
          </p>
          <p>
            My key competencies are MERN stack development, UiPath automation, Java, Python, and C++, as well as a wide range of dev tools such as Git and Docker.
            Professional development is something that is important to me so I always welcome the opportunity to take on new skills.
          </p>
        </div>
        <div id="about-photo">
          <img src="https://thf.bing.com/th/id/OIP.bJpr9jpclIkXQT-hkkb1KQHaHa?r=0&cb=thfc1falcon2&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
        </div>
      </div>

    </section>


  )
}

export default About