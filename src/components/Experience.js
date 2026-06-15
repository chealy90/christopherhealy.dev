import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"
import jobData from "../jobData.json"
import "../styles/Experience.css"

import ExperienceItem from "./ExperienceItem"

function Experience() {


  return (
    <section id="experience">
      <div className="experience-main-content">
        <span className="section-header-span">
          <FontAwesomeIcon icon={faBriefcase} />
          <h2>Experience</h2>
        </span>

        <div id="experience-main-content">
          <div className="experience-item">
            {
              jobData.map(job => <ExperienceItem job={job} />)
            }
          </div>
        </div>
      </div>


    </section>
  )

}


export default Experience