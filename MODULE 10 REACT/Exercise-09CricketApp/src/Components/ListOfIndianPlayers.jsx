function ListOfIndianPlayers({ IndianPlayers }){
    return (
        <ul>
            {IndianPlayers.map((player,index) => (
                <li key = {index}>
                    Mr. {player}
                </li>
            ))} 
        </ul>
    );
}
export default ListOfIndianPlayers;