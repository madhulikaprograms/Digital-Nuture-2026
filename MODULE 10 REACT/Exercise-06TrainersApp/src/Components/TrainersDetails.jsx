import { Link } from "react-router-dom";
import trainerMock from "../TrainersMock";
function TrainerDetails(){
    const { id } = useParams();
    const trainer = trainersMock.find((t) => t.trainerId === id);

    if(!trainer){
        return <h2>Trainer Not Found</h2>;
    }
    return(
        <div>
            <h2>Trainer Details</h2>
            <h3>{trainer.name}</h3>
            <p>{trainer.email}</p>
            <p>{trainer.phone}</p>
            <h4>Skills</h4>
            <ul>
                {trainer.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}
export default TrainerDetails;