import "../Stylesheets/mystyle.css";
function CalculateScore({Name,School,total,goal}){
    const score = ((total/goal).toFixed(2));

    return(
        <div className = "formatstyle">
            <h1> Student Details:</h1>
            <p className = "Name">
                <b>Name:</b>{Name}
            </p>

            <p className = "School">
                <b>School:</b>{School}
            </p>

            <p className = "Total">
                <b>Total:</b>{total} Marks
            </p>

            <p className = "Score">
                <b>Score:</b>{score}%
            </p>
        </div>
    );
}
export default CalculateScore;