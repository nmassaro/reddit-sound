import React from "react";
import { TimeframeContainer, Button } from "./style";

const OPTIONS = ["hour", "day", "week", "month", "year", "all"];

const TimeframeComponent = ({ updateTimeframe }) => {
  return (
    <TimeframeContainer>
      {OPTIONS.map(option => (
        <Button onClick={() => updateTimeframe(option)}>{option}</Button>
      ))}
    </TimeframeContainer>
  );
};

export default TimeframeComponent;
