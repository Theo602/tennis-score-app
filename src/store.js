import { createStore } from 'redux';
import { produce } from 'immer';
// state

const initialState = {
    player1: 0,
    player2: 0,
    advantage: null,
    winner: null,
    playing: true,
    gameHistory: []
}

// actions creators

export const playPause = () => ({ type: 'playPause' });

export const resetScore = () => ({ type: 'resetScore' });

export const pointScored = (player) => ({
    type: "pointScored",
    payload: { player: player }
});

// le reducer est une fonction

function reducer(state, action) {

    // on fait un reset des valeurs du jeux
    if (action.type === "resetScore") {
        return produce(state, (draft) => {
            draft.player1 = 0;
            draft.player2 = 0;
            draft.advantage = null;
            draft.winner = null;
            draft.playing = true;
        });
    }

    // si l'action est de type playPause... 
    if (action.type === "playPause") {
        if (state.winner) {
            // le jeu est fini, on ne peut pas marquer
            return state;
        } else {
            // il faut inverser la propriété playing du state
            return produce(state, (draft) => {
                draft.playing = !draft.playing;
            });
        }
    }

    if (action.type === "pointScored") {

        const player = action.payload.player;
        const otherPlayer = (player === "player1") ? "player2" : "player1";

        if (state.winner) {
            // le jeu est fini, on ne peut pas marquer
            return state;
        } else if (state.playing === false) {
            // le jeu est en pause, on ne peut pas marquer
            return state;
        } else {
            return produce(state, (draft) => {

                const currentPlayerScore = draft[player];
                const otherPlayerScore = draft[otherPlayer];

                // On met à jour le score des joueurs.
                // si le joueur n'a pas 40
                if (currentPlayerScore !== 40) {
                    // le joueur est entre 0 et 30 => on ajoute 15
                    // le joueur est à 30 => on ajoute 10
                    draft[player] = (currentPlayerScore >= 30) ? currentPlayerScore + 10 : currentPlayerScore + 15;
                } else if (otherPlayerScore === 40) {
                    // si l'autre joueur est à 40
                    if (state.advantage === player) {
                        // si le joueur  à l'advantage, il gagne
                        draft.winner = player;
                        draft.gameHistory.push({ player1: draft.player1, player2: draft.player2, winner: player });
                    } else if (state.advantage === otherPlayer) {
                        // si l'autre joueur reprend l'advantage, le joueur le perd
                        draft.advantage = null;
                    } else {
                        // si l'autre joueur n'a pas l'advantage, le joueur le gagne
                        draft.advantage = player;

                    }
                } else {
                    // si le joueur est à 40, il gagne
                    draft.winner = player;
                    draft.gameHistory.push({ player1: draft.player1, player2: draft.player2, winner: player });

                }
            });
        }

    }

    // sinon on retourne le state sans le changer
    return state;
}

// on crée le store avec le state et le reducer
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const store = createStore(reducer, initialState, reduxDevtools);

store.subscribe(() => {
    console.log("Nouveau state:");
    console.log(store.getState());

});