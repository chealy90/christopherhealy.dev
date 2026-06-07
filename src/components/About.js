import Typewriter from "typewriter-effect"
import "../styles/About.css"

function About() {


  return (
    <section id="about">
      <div id="typewriter-container">
        <Typewriter
          options={{
            strings: ["Automation", "Full-stack", "IoT"],
            autoStart: true,
            loop: true
          }}
        />
      </div>

    </section>
  )
}

export default About