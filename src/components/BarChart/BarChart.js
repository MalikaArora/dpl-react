import React from "react";
  
const Bar = ({ fill = '#000', x, y, height, width }) => (
  <rect fill={fill} x={x} y={y} height={height} width={width} />
)

const greatestValue = values =>
  values.reduce((acc, cur) => (cur > acc ? cur : acc), -Infinity)


const BarChart = ({
  barWidth,
  barMargin,
  data,
  horizontalGuides: numberOfHorizontalGuides,
  verticalGuides: numberOfVerticalGuides,
  precision,
  

}) => {  
    
  const FONT_SIZE = barWidth * 0.2;
  const maximumYFromData = Math.max(...data.map(e => e.y));

  const digits =
    parseFloat(maximumYFromData.toString()).toFixed(precision).length + 1;

  const padding = (FONT_SIZE + digits) * 3;
  const chartWidth = (data.length * (barWidth + barMargin));
  const chartHeight = greatestValue(data.map(datum => datum.y));
  const width = chartWidth + padding * 2;
  const height = greatestValue(data.map(datum => datum.y)) + padding * 2;

  const Axis = ({ points }) => (
    <polyline fill="none" stroke="#ccc" strokeWidth=".5" points={points} />
  );

  const XAxis = () => (
    <Axis
      points={`${padding},${height - padding} ${width - padding},${height -
        padding}`}
    />
  );

  const YAxis = () => (
    <Axis points={`${padding},${padding} ${padding},${height - padding}`} />
  );

  const VerticalGuides = () => {
    const guideCount = numberOfVerticalGuides || data.length - 1;

    const startY = padding;
    const endY = height - padding;

    return new Array(guideCount).fill(0).map((_, index) => {
      const ratio = (index + 1) / guideCount;

      const xCoordinate = padding + ratio * (width - padding * 2);

      return (
        <React.Fragment key={index}>
          <polyline
            fill="none"
            stroke="#ccc"
            strokeWidth=".5"
            points={`${xCoordinate},${startY} ${xCoordinate},${endY}`}
          />
        </React.Fragment>
      );
    });
  };

  const HorizontalGuides = () => {
    const startX = padding;
    const endX = width - padding;

    return new Array(numberOfHorizontalGuides).fill(0).map((_, index) => {
      const ratio = (index + 1) / numberOfHorizontalGuides;

      const yCoordinate = chartHeight - chartHeight * ratio + padding;

      return (
        <React.Fragment key={index}>
          <polyline
            fill="none"
            stroke={"#ccc"}
            strokeWidth=".5"
            points={`${startX},${yCoordinate} ${endX},${yCoordinate}`}
          />
        </React.Fragment>
      );
    });
  };

  const LabelsXAxis = () => {
    const y = height - padding + FONT_SIZE * 2;

    return data.map((element, index) => {
      const x =
        ((barWidth + barMargin) / width) * chartWidth + padding - FONT_SIZE / 2;
      return (
        <text
          key={index}
          x={index * (barWidth + barMargin) + padding}
          y={y}
          style={{
            fill: "#808080",
            fontSize: FONT_SIZE,
            fontFamily: "Helvetica"
          }}
        >
          {element.label}
        </text>
      );
    });
  };

  const LabelsYAxis = () => {
    const PARTS = numberOfHorizontalGuides;
    return new Array(PARTS + 1).fill(0).map((_, index) => {
      const x = FONT_SIZE;
      const ratio = index / numberOfHorizontalGuides;

      const yCoordinate =
        chartHeight - chartHeight * ratio + padding + FONT_SIZE / 2;
      return (
        <text
          key={index}
          x={x}
          y={yCoordinate}
          style={{
            fill: "#808080",
            fontSize: FONT_SIZE,
            fontFamily: "Helvetica"
          }}
        >
          {parseFloat(maximumYFromData * (index / PARTS)).toFixed(precision)}
        </text>
      );
    });
  };

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
    >      
        <XAxis />
        <LabelsXAxis />
        <YAxis />
        <LabelsYAxis />
        {numberOfVerticalGuides && <VerticalGuides />}
        <HorizontalGuides />

        {data.map((datum, index) => (
            <Bar
                key={datum.label}
                fill="orange"
                x={index * (barWidth + barMargin) + padding}
                y={height - datum.y - padding}
                width={barWidth}
                height={datum.y}
            />
            
        ))}      
      </svg>    
  );
};

export default BarChart;