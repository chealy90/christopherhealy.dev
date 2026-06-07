import Typewriter from "typewriter-effect"
import "../styles/About.css"

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

    </section>
  )
}

export default About