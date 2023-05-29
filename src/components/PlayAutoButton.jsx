import { useSelector, useStore } from "react-redux"
import { selectGameIsPlaying } from "../utils/selectors";
import { autoplay } from "../utils/actions";



export function PlayAutoButton(){
    
    const store = useStore();
    const playing = useSelector(selectGameIsPlaying);

    return (
            <button className="button button-full" onClick={() => 
                { autoplay(store); }}> 
            {playing ? "Point en cours..." : "Jouer"}
            </button>
    )
    
    
    

}