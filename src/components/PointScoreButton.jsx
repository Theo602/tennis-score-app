import { useDispatch } from "react-redux";
import { pointScored } from "../store";

export function PointScoreButton({ playerId, player }){
    
    const dispatch = useDispatch();

    return <button className="button" onClick={() => {
        dispatch(pointScored(playerId))
    }}> Point { player } </button>
}