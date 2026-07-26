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
            strings: ["Automation", "Full-stack", "Web Development"],
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
            <FontAwesomeIcon icon={faLightbulb} size="xl"/>
            <h2>About Me</h2>
          </span>
          <p>
            I'm a junior dev primarily focused in full-stack development, automation, and web development. In 2023, I officially entered the world of software with a QQI Level 5 at Cavan Institute.
          </p>

          <p>I'm now in the final year of a B.Sc. at Dundalk Instiute of Technology, and an AMD intern.</p>
          <p>
            My key competencies are MERN stack development, UiPath automation, Java, Python, and <span style={{ whiteSpace: "nowrap" }}>C++</span>, as well as a wide range of dev tools such as Git and Docker.
          </p>

          <p>
            Professional development is something that's important to me so I always welcome the opportunity to take on new skills and frameworks.
          </p>
        </div>
        <div id="about-photo">
          <img src="/amd_photo_square.jpg" alt="" />
        </div>
      </div>

    </section>


  )
}

export default About