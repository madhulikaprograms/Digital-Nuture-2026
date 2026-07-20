function ScoreBelow70({ players }){
    const playersBelow70 = players.filter(
        (item) => item.score < 70
    );

    return (
        <ul>
            {playersBelow70.map((item,index) => (
                <li key={index}>
                    Mr. {item.name}{item.score}
                </li>
            ))}

        </ul>
    );
}
export default ScoreBelow70;