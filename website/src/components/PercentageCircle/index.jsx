import React from "react";
import "../../App.css";

const DEFAULT_VALUE = 0;
const DEFAULT_CDAI = "#5540BF";
const DEFAULT_MINVOL = "#F14A5C";
const DEFAULT_SMA20 = "#11112F";
const DEFAULT_MAX_VALUE = 100;

export default props => {
  const cDAI = props.cDAI || DEFAULT_VALUE;
  const minvol = props.minvol || DEFAULT_VALUE;
  const sma20 = props.sma20 || DEFAULT_VALUE;
  const maxValue = props.maxValue || DEFAULT_MAX_VALUE;

  const radius = 90;
  const dashArray = radius * Math.PI * 2;
  const dashOffsetCDAI = dashArray - dashArray * (cDAI / maxValue);
  const dashOffsetMINVOL =
    dashArray - dashArray * (minvol / maxValue) - dashArray * (cDAI / maxValue);
  const dashOffsetSMA20 =
    dashArray -
    dashArray * (minvol / maxValue) -
    dashArray * (cDAI / maxValue) -
    dashArray * (sma20 / maxValue);
  return (
    <div>
      <svg viewBox="0 0 200 200">
        <circle
          className="circleBackground"
          cx="100"
          cy="100"
          r={radius}
          strokeWidth="10px"
        />
        <circle
          className="circleProgress"
          cx="100"
          cy="100"
          r={radius}
          strokeWidth="15px"
          transform="rotate(-90 100 100)"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffsetSMA20,
            stroke: DEFAULT_SMA20
          }}
        />
        <circle
          className="circleProgress"
          cx="100"
          cy="100"
          r={radius}
          strokeWidth="15px"
          transform="rotate(-90 100 100)"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffsetMINVOL,
            stroke: DEFAULT_MINVOL
          }}
        />
        <circle
          className="circleProgress"
          cx="100"
          cy="100"
          r={radius}
          strokeWidth="15px"
          transform="rotate(-90 100 100)"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffsetCDAI,
            stroke: DEFAULT_CDAI
          }}
        />

        {/*<text
          className="circleText"
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle"
        >
          {props.children}
        </text>*/}

        {props.children}
      </svg>
    </div>
  );
};
