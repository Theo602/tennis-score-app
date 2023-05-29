// Fonction qui récupere le score du joueur
export const selectPlayerScore = (playerId) => {
    return (state) => state[playerId];
}

// Fonction pour savoir quel joueur à l'advantage
export const selectPlayerHasAdvantage = (playerId) => {
    return (state) => state.advantage === playerId;
}

// Fonction qui récupere le nombre de partie gagnée du joueur
export const selectPlayerGame = (playerId) => {
    return (state) => state.gameHistory.filter(joueur => joueur.winner === playerId).length;
}

// Fonction qui calcul le nombre d'échange entre les joueurs
export const selectPlayerExchange = (playerId) => {

    const otherPlayerId = (playerId === "player1") ? "player2" : "player1";

    return (state) => {

        const scorePlayer = state[playerId];
        const scoreOtherPlayer = state[otherPlayerId];

        const pointTo40 =
            scorePlayer === 0
                ? 3
                : scorePlayer === 15
                    ? 2
                    : scorePlayer === 30
                        ? 1
                        : 0

        if (state.winner) {
            return null;
        } else if (state.advantage === playerId) {
            return 1;
        } else if (state.advantage === otherPlayerId) {
            return 3;
        } else if (scoreOtherPlayer === 40) {
            return pointTo40 + 2;
        }
        else {
            return pointTo40 + 1;
        }

    }

}

// Fonction qui permet d'afficher les données du jeu

export const selectDisplayGame = (state) => {
    if (state.winner) {
        if (state.winner === "player1") {
            return "Joueur 1 gagne";
        } else {
            return "Joueur 2 gagne";
        }
    } else if (state.playing === false) {
        return "C'est la pause";
    } else {
        let text = "Le score est: " + state.player1 + " - " + state.player2;
        if (state.advantage) {
            if (state.advantage === "player1") {
                text += " avantage joueur 1";
            } else {
                text += " avantage joueur 2";
            }
        }
        return text;
    }
}

// Fonction qui récupere le status du jours en mode automatique
export const selectGameIsPlaying = (state) => state.playingAuto;