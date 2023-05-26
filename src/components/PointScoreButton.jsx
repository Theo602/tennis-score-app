import { useDispatch } from "react-redux";
import { pointScored } from "../store";

export function PointScoreButton({ playerId, PlayerName }){
    
    const dispatch = useDispatch();

    return <button className="button" onClick={() => {
        dispatch(pointScored(playerId))
    }}> Point { PlayerName } </button>
}