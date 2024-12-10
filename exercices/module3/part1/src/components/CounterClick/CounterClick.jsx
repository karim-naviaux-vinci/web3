// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import Statistic from "../Statistic/Statistic";

const CounterClick = () => {
    const [count, setCount] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    });

    const [total, setTotal] = useState(0);

    const handleClickGood = () => {
        const updateGood = count.good + 1;
        setCount({ ...count, good: updateGood });
        setTotal(updateGood + count.neutral + count.bad);

    };

    const handleClickNeutral = () => {
        const updateNeutral = count.neutral + 1;
        setCount({ ...count, neutral: updateNeutral });
        setTotal(count.good + updateNeutral + count.bad);

    };

    const handleClickBad = () => {
        const updateBad = count.bad + 1;
        setCount({ ...count, bad: updateBad });
        setTotal(count.good + count.neutral + updateBad);

    }

    return (
        <>
            <div>
                <h1>Give feedback</h1>
                <button onClick={handleClickGood}>Good</button>
                <button onClick={handleClickNeutral}>Neutral</button>
                <button onClick={handleClickBad}>Bad</button>
            </div>
            {count.good !== 0 || count.neutral !== 0 || count.bad !== 0 ? (
                <div>
                    <Statistic values={[count.good, count.neutral, count.bad, total]} />
                </div>
            ) : (
                <div>
                    <h1>Statistics</h1>
                    <p>No feedback given</p>
                </div>
            )}
        </>
    );
}

export default CounterClick;