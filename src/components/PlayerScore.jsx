import { useSelector } from "react-redux";
import { selectPlayerHasAdvantage, selectPlayerScore } from "../utils/selectors";


export function PlayerScore({ playerId, PlayerName }) {
    
    // playerId est soit "player1" soit "player2"
    // on l'utilise dans le selector pour accéder au score du joueur !
    const score = useSelector(selectPlayerScore(playerId));
    const hasAdvantage = useSelector(selectPlayerHasAdvantage(playerId))

    return (
        <div className="player-score">
            <p>{PlayerName}</p>
            <p>{(hasAdvantage ? "Advantage - " : "") + score}</p>
        </div>
    )
}