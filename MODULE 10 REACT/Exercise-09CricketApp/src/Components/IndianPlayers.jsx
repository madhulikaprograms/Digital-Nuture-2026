export function OddPlayers([first, , third, ,fifth]){
    return (
        <div>
            <p>First : {first}</p>
            <p>third : {third}</p>
            <p>fifth : {fifth}</p>
        </div>
    );
}
export function EvenPlayers([, second, ,fourth, , sixth]){
    return (
        <div>
            <p>second : {second}</p>
            <p>fourth : {fourth}</p>
            <p>Sixth : {sixth}</p>
        </div>
    );
}

const T20Players = [
    "First Player",
    "Second Player",
    "Third Player"
];
const RanjiPlayers = [
    "Fourth Player",
    "Fifth Player",
    "Sixth Player"
];
export const IndianPlayers = [
            ...T20Players,
            ...RanjiPlayers
];