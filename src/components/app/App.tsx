import Timer from '../timer/Timer';
import { useState } from 'react';
import { TimerContext } from '../../context';

const App = () => {
    const [timer, setTimer] = useState(0);
    const [timerStarted, setTimerStarted] = useState(false);

    return (
        <TimerContext.Provider value={{ timer, setTimer, timerStarted, setTimerStarted }}>
            <Timer />
        </TimerContext.Provider>
    );
}

export default App;
