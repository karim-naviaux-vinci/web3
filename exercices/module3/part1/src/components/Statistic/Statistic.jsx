import React from "react";
import StatisticLine from "./StatisticLine";
import { useState } from "react";

const Statistic = ({ values }) => {
    
    return (
        <div>
            <h1>Statistics</h1>
            <StatisticLine text="Good" value={values[0]} />
            <StatisticLine text="Neutral" value={values[1]} />
            <StatisticLine text="Bad" value={values[2]} />
            <StatisticLine text="Total" value={values[3]} />
        </div>
    );
}

export default Statistic;