import { createStore } from 'redux';

// state

const initialState = {
    player1: 0,
    player2: 0,
    advantage: null,
    winner: null,
    playing: true
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
        return initialState;
    }

    // si l'action est de type playPause... 
    if (action.type === "playPause") {
        // il faut inverser la propriété playing du state
        return {
            ...state,
            playing: !state.playing
        };
    }

    if (action.type === "pointScored") {

        const player = action.payload.player;
        const otherPlayer = (player === "player1") ? "player2" : "player1";
        const currentPlayerScore = state[player];
        const otherPlayerScore = state[otherPlayer];

        if (state.winner) {
            // le jeu est fini, on ne peut pas marquer
            return state;
        } else if (state.playing === false) {
            // le jeu est en pause, on ne peut pas marquer
            return state;
        } else {
            // On met à jour le score des joueurs.
            // si le joueur n'a pas 40
            if (currentPlayerScore !== 40) {
                // le joueur est entre 0 et 30 => on ajoute 15
                // le joueur est à 30 => on ajoute 10
                return {
                    ...state,
                    [player]: (currentPlayerScore >= 30) ? currentPlayerScore + 10 : currentPlayerScore + 15
                };
            } else if (otherPlayerScore === 40) {
                // si l'autre joueur est à 40
                if (state.advantage === player) {
                    // si le joueur  à l'advantage, il gagne
                    return { ...state, winner: player };
                } else if (state.advantage === otherPlayer) {
                    // si l'autre joueur reprend l'advantage, le joueur le perd
                    return { ...state, advantage: null };
                } else {
                    // si l'autre joueur n'a pas l'advantage, le joueur le gagne
                    return { ...state, advantage: player };
                }
            } else {
                // si le joueur est à 40, il gagne
                return { ...state, winner: player };
            }

        }

    }

    // sinon on retourne le state sans le changer
    return state;
}

// on crée le store avec le state et le reducer

export const store = createStore(reducer, initialState);
