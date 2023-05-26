import { useSelector } from "react-redux"
import { selectPlayerGame } from "../utils/selectors"

export function PlayerPoint({ playerId, PlayerName }) {
    
    // playerId est soit "player1" soit "player2"
    // on l'utilise dans le selector pour accéder au score du joueur !

    const game = useSelector(selectPlayerGame(playerId));

    return (
        <div className="player-score">
            <p>{PlayerName}</p>
            <p>
                { game === 0 ? 
                  "Aucun jeu gagné"
                  : game === 1 ?
                  `${game} jeu gagné`
                  :
                  `${game} jeux gagnés`
                }
            </p>
        </div>
    )
}