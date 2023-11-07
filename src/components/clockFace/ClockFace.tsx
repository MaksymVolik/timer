import styles from './clockFace.module.css';

type Props = {
    time: number
};

const ClockFace = (props: Props) => {

    function getTime(t: number) {
        const hours = Math.floor((t / (60 * 60)) % 24);
        const minutes = Math.floor((t / 60) % 60);
        const seconds = Math.floor(t % 60);

        return {
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    const getZero = (num: number) => num >= 0 && num < 10 ? `0${num}` : num;

    const renderTime = getTime(props.time);

    return (
        <div className={styles.clock}>
            <div className={styles.hours}>{getZero(renderTime.hours)}</div>
            <span>:</span>
            <div className={styles.minutes}>{getZero(renderTime.minutes)}</div>
            <span>:</span>
            <div className={styles.seconds}>{getZero(renderTime.seconds)}</div>
        </div>
    );
};

export default ClockFace;