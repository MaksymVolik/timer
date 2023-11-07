import { useState } from 'react';
import ClockFace from '../clockFace/ClockFace';
import styles from './timer.module.css';

const Timer = () => {
    const [timer, setTimer] = useState<number>(0);
    const [timerStarted, setTimerStarted] = useState<boolean>(false);
    const [intervalID, setIntervalID] = useState<NodeJS.Timer>();

    console.log('render');

    const updateTimer = () => {
        setTimer(oldTimer => oldTimer + 1);
    }

    const onStart = () => {
        if (!timerStarted) {
            setTimer(0);
            setTimerStarted(true)
            setIntervalID(setInterval(updateTimer, 1000));
        }
    }

    const onStop = () => {
        clearInterval(intervalID);
        // setIntervalID(undefined);
        setTimerStarted(false);
    }

    const message = timerStarted
        ? <p className={styles.message}>Timer started</p>
        : null;

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Timer</h1>
            <ClockFace time={timer} />
            {message}
            <div className={styles.btns}>
                <button className={styles.btn} type='button' onClick={onStart}>Start</button>
                <button className={styles.btn} type='button' onClick={() => onStop()}>Stop</button>
            </div>

        </div>
    );
};

export default Timer;