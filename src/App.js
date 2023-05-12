import { Display } from './components/Display';
import { PlayPauseButton } from './components/PlayPauseButton';
import { PointScoreButton } from './components/PointScoreButton';
import { ResetGameButton } from './components/ResetGameButton';

function App() {
  return (

    <>
      <Display />

      <div className="buttons">
        <div className="buttons-row">
          <PointScoreButton playerId="player1" player="player 1" />
          <PointScoreButton playerId="player2" player="player 2" />
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
