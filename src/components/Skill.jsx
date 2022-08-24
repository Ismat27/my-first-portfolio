import '../styles/Skill.css'
const Skill = ({item, percent}) => {
    const style = {
        width: `${percent}%`
    }
    return (
        <div className="skill">
            <p className="skill-item">
                <span>{item}</span>
                <span>{percent}%</span>
            </p>
            <div className="skill-indicator">
                <div style={style} className="percent-indicator"></div>
            </div>
        </div>
    )
}

export default Skill 
