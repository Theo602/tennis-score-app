import { useSelector } from "react-redux";
import { selectDisplayGame } from "../utils/selectors";

export function Display() {

    const displayGame = useSelector(selectDisplayGame)

    return (
        <p className="display">{displayGame}</p> 
    )
}