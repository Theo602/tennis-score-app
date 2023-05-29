import { useDispatch } from "react-redux";
import { resetScore } from "../utils/actions";

 

export function ResetGameButton(){
    
    const dispatch = useDispatch();

    return <button className="button" onClick={() => {
        dispatch(resetScore())
    }}> Remettre à zéro </button>
}