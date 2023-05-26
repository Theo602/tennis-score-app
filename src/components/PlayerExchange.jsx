import { useSelector } from "react-redux";
import { selectPlayerExchange } from "../utils/selectors";
 


export function PlayerExchange({ playerId, PlayerName }) {
    
    // playerId est soit "player1" soit "player2"
    // on l'utilise dans le selector pour accéder au échange du joueur !
    const exchange =  useSelector(selectPlayerExchange(playerId));

    return (
        <div className="player-score">
            <p>{PlayerName}</p>
            
            <p>
                {exchange === null ? 
                `0 échange restant`
                :
                exchange > 1 ? 
                `${exchange} échanges restants`
                :
                `${exchange} échange restant`
                }
            </p>
        </div>
    )
}