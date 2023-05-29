import { useDispatch } from "react-redux";
import { pointScored } from "../utils/actions";

export function PointScoreButton({ playerId, PlayerName }){
    
    const dispatch = useDispatch();

    return <button className="button" onClick={() => {
        dispatch(pointScored(playerId))
    }}> Point { PlayerName } </button>
}