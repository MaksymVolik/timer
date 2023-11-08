import { FC, useContext, useState } from 'react';
import { TimerContext } from '../../context';
import ClockFace from '../clockFace/ClockFace';
import styles from './timer.module.css';

const Timer: FC = () => {
    const { timerStarted, setTimer, setTimerStarted } = useContext(TimerContext);
    const [intervalID, setIntervalID] = useState<NodeJS.Timer | undefined>(undefined);

    console.log('render');

    const updateTimer = () => {
        setTimer(prevTimer => prevTimer + 1);
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

    const title = timerStarted
        ? "Timer is running"
        : 'Timer';

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>{title}</h1>
            <ClockFace />
            <div className={styles.btns}>
                <button className={styles.btn} type='button' onClick={onStart}>Start</button>
                <button className={styles.btn} type='button' onClick={onStop}>Stop</button>
            </div>

        </div>
    );
};

export default Timer;