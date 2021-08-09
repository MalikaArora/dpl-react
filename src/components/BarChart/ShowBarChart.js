import React from "react";

import BarChart from "./BarChart";
import Label from "./AxisLabel";
import ChartTitle from "./ChartTitle";

const data = [
  {
    label: 'Horten',
    y: 59,
  },
  {
    label: 'Milena',
    y: 42,
  },
  {
    label: 'Kirsten',
    y: 111,
  },
  {
    label: 'Eziechiele',
    y: 21,
  },
  {
    label: 'Marlo',
    y: 107,
  },
  {
    label: 'Mallory',
    y: 49,
  },
  {
    label: 'Elsi',
    y: 54,
  },
  {
    label: 'Sonia',
    y: 53,
  },
  {
    label: 'Cristian',
    y: 113,
  },
  {
    label: 'Hugues',
    y: 150,
  },
];


const styles = {
  chartComponentsContainer: {
    display: 'grid', gridTemplateColumns: 'max-content 700px', alignItems: 'center'
  },
  chartWrapper: { maxWidth: 700, alignSelf: 'flex-start' }
}

function ShowBarChart() {
  return (
    <div style={styles.chartComponentsContainer}>
    
      <div/>
      <ChartTitle text="Marks scored by each student"/>
      <Label text="Marks" rotate/>
      <div style={styles.chartWrapper}>
      
        <BarChart
          barWidth={30}      
          barMargin={5}  
          data={data}
          horizontalGuides={5}
          precision={2}
          verticalGuides={1}
        />
      </div>
      <div/>
      <Label text="Student Names"/>
    </div>
  );
}

export default ShowBarChart;