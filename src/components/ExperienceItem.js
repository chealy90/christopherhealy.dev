function ExperienceItem(props) {

  return (
    <div className="experience-item">
      <div className="experience-item-header">
        <img src={props.companyLogo} alt="" className="experience-item-logo"/>
        <div className="experience-item-company">
          <div className="experience-item-company-row1">
            <h3>{props.jobTitle}</h3>
          </div>

          <div className="experience-item-company-row2">
            <p>{props.companyName}</p>
            <p>{props.startDate} - {props.endDate}</p>
          </div>
        </div>
      </div>
      <div className="experience-item-body">
        <div className="experience-main-info">
          <ul>
            {props.keyPoints.forEach(point => <p>{point}</p>)}
          </ul>
        </div>
        <div className="experience-key-skills">
          {props.skills.forEach(skill => (
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