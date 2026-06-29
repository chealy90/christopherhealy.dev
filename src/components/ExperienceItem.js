import "../styles/ExperienceItem.css"

function ExperienceItem(props) {

  return (
    <div className="experience-item fade-up">
      <div className="experience-item-header">
        <img src={props.job.companyLogo
          
        } alt="" className="experience-item-logo"/>
        <div className="experience-item-company">
          <div className="experience-item-company-row1">
            <h3>{props.job.jobTitle}</h3>
          </div>

          <div className="experience-item-company-row2">
            <p>{props.job.companyName}</p>
            <p>{props.job.startDate} - {props.job.endDate}</p>
          </div>
        </div>
      </div>
      <div className="experience-item-body">
        <div className="experience-main-info">
          <ul>
            {props.job.keyPoints.map(point => <li>{point}</li>)}
          </ul>
        </div>
        <div className="experience-key-skills">
          {props.job.skills.map(skill => (
            <div className="experience-skill-bubble">
              {skill}
            </div>
          ))}
        </div>


      </div>
    </div>
  )

}

export default ExperienceItem