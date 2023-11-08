import { useState } from 'react';
import { TimerContext } from '../../context';
import Timer from '../timer/Timer';

const App = () => {
    const [timer, setTimer] = useState<number>(0);
    const [timerStarted, setTimerStarted] = useState<boolean>(false);

    return (
        <TimerContext.Provider value={{ timer, setTimer, timerStarted, setTimerStarted }}>
            <Timer />
        </TimerContext.Provider>
    );
}

export default App;
