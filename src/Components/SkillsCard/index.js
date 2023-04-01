import './index.css'

const SkillsCard = props => {
  const {skillDetails} = props
  const {imageUrl, name, id} = skillDetails
  // console.log(imageUrl)
  return (
    <li key={id} className="skills-item-container">
      <div className="skills-container">
        <img src={imageUrl} alt={name} className="skill-image" />
        <p className="skill-name">{name}</p>
      </div>
    </li>
  )
}
export default SkillsCard
