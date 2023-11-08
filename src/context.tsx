import { createContext, Dispatch, SetStateAction } from 'react';

// export const TimerCtx = createContext(0);

// export const TimerCtx = createContext({
//     timer: 0,
//     setTimer: (timer: number) => { }
// })

type TimerContextType = {
    timer: number;
    setTimer: Dispatch<SetStateAction<number>>;
    timerStarted: boolean;
    setTimerStarted: (_: boolean) => void
};

const defaultTimerValue = {
    timer: 0,
    setTimer: () => { },
    timerStarted: false,
    setTimerStarted: () => { }
}

export const TimerContext = createContext<TimerContextType>(defaultTimerValue);
