// actions creators

export const setPlaying = (playingAuto) => ({
    type: 'setPlaying',
    payload: playingAuto,
});

export const playPause = () => ({ type: 'playPause' });

export const resetScore = () => ({ type: 'resetScore' });

export const pointScored = (player) => ({
    type: "pointScored",
    payload: { player: player },
});

export const autoplay = (store) => {

    const isWin = store.getState().winner;
    const isPlaying = store.getState().playingAuto;

    if (isPlaying || isWin) {
        // Déjà entrain de jouer, on ne fait rien
        return;
    }
    // on indique que la partie est en cours
    store.dispatch(setPlaying(true));

    let game = setInterval(autoGame, 2000);

    function autoGame() {

        if (store.getState().winner) {
            clearInterval(game);
            // on remet le jeu en pause
            store.dispatch(setPlaying(false));
        } else {

            // le jeu est-il toujours en cours ?
            if (store.getState().playingAuto === false) {
                // Si non, on ne fait rien
                return;
            }

            // si oui on marque un point aléatoire
            const pointWinner = Math.random() > 0.5 ? "player1" : "player2";
            store.dispatch(pointScored(pointWinner));
        }
    }

}