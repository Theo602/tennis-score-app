import { Display } from './components/Display';
import { PlayPauseButton } from './components/PlayPauseButton';
import { PlayerExchange } from './components/PlayerExchange';
import { PlayerPoint } from './components/PlayerPoints';
import { PlayerScore } from './components/PlayerScore';
import { PointScoreButton } from './components/PointScoreButton';
import { ResetGameButton } from './components/ResetGameButton';

function App() {
  return (

    <>
      <PlayerPoint playerId="player1" PlayerName="player 1" />
      <PlayerPoint playerId="player2" PlayerName="player 2" />
      <Display />
      <PlayerScore playerId="player1" PlayerName="player 1" />
      <PlayerScore playerId="player2" PlayerName="player 2" />

      <PlayerExchange playerId="player1" PlayerName="player 1" />
      <PlayerExchange playerId="player2" PlayerName="player 2" />

      <div className="buttons">
        <div className="buttons-row">
          <PointScoreButton playerId="player1" PlayerName="player 1" />
          <PointScoreButton playerId="player2" PlayerName="player 2" />
        </div>
        <div className="buttons-row">
          <ResetGameButton />
          <PlayPauseButton />
        </div>
      </div>

    </>
  );
}

export default App;
