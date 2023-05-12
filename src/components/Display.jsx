import { useSelector } from "react-redux";

export function Display() {

    const gameIsPlaying = useSelector((state) => state.playing);
    const gameAdvantage = useSelector((state) => state.advantage);
    const gameWinner = useSelector((state) => state.winner);
    const pointScorePlayer1 = useSelector((state) => state.player1);
    const pointScorePlayer2 = useSelector((state) => state.player2);
    
    return (
        <>
            {   gameWinner ?
                
                <p className="display" >{gameWinner === "player1" ? "Joueur 1 gagne" : "Joueur 2 gagne"}</p>
                :
                <>
                    {   gameIsPlaying === false ?

                        <p className="display" >C'est la pause</p>
                        :
                        <>
                            {
                                gameAdvantage ?
                                <p className="display" >{gameAdvantage === "player1" ? "avantage joueur 1" : "avantage joueur 2"}</p> 
                                :
                                <p className="display" >Le score est: {pointScorePlayer1} - {pointScorePlayer2}</p> 
                            }
                        </>
                    }
                
                </>
            }              
        </>
        
    )
    
    
    
}