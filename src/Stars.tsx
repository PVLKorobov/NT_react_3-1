import './Stars.css'
import Star from "./Star";


interface StarsProps {
    starCount: number
}


function Stars({starCount}:StarsProps) {
    let stars = [];
    for (let i = 0; i < starCount; i++) {
        stars.push(<li><Star /></li>)
    }
    
    
    return (
        <ul className="stars">
            {stars}
        </ul>
    )
}


export default Stars