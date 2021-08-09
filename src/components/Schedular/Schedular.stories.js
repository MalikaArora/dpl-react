import React, { useState } from 'react';
import './styles.scss';
import { DragGrid, DragCard, DragCard2 } from './Scheduler';

export default {
  title: 'Scheduler'
}
// const { useState } = React;

const boxes = [
  { id: "box-1", name: "Box 1", type: "box" },
  { id: "box-2", name: "Box 2", type: "box" },
  { id: "box-3", name: "Box 3", type: "box" },
  { id: "box-4", name: "Box 4", type: "box" },
  { id: "box-10", name: "Box 10", type: "box" },
  { id: "box-11", name: "Box 11", type: "box" },
  { id: "box-12", name: "Box 12", type: "box" },
  { id: "box-13", name: "Box 13", type: "box" }
];

const boxes2 = [
  { id: "box-5", name: "Box  5", type: "box", width: "60vw" },
  { id: "box-6", name: "Box 6", type: "box", width: "26vw" },

];

const boxes3 = [
  { id: "box-7", name: "Box 7", type: "box" },
  { id: "box-8", name: "Box 8", type: "box" },
  { id: "box-9", name: "Box 9", type: "box" }

]

const MyWidget = ({ name }) => <div>{name}</div>;

export const Grid = () => {
  const [items, setItems] = useState(boxes);
  const [items2, setItems2] = useState(boxes2);
  const [items3, setItems3] = useState(boxes3);

  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [from2, setFrom2] = useState(null);
  const [to2, setTo2] = useState(null);
  const [from3, setFrom3] = useState(null);
  const [to3, setTo3] = useState(null);
  //   var indexx;
  return (
    <div>
      <DragGrid  boxes={boxes} size={4} >
        <DragCard key={1} heading={"Prospective Risk Score"} score={"0.955"} percent={"0.0% Decrease from Prior"} change={"Neutral Change"} />
        <DragCard key={2} heading={"Retrospective Risk Score"} score={"1.073"} percent={"0.0% Decrease from Prior"} change={"Neutral Change"} />
        <DragCard key={3} heading={"Members"} score={"140,325"} percent={"5.2% Increase from Prior"} change={"Neutral Change"} />
        <DragCard key={4} heading={"Catastrophic Cases"} score={"2,250"} percent={"12.3% Increase from Prior"} change={"Neutral Change"} />
      </DragGrid >

      <DragGrid size={2}>
        <DragCard2 heading={"Population Profile"} subheading={"by Health Continuum"} width={"61.3vw"} >
          <table>
            <tr>
              <th>Row Value</th>
              <th>Well</th>
              <th>At Risk</th>
              <th>Chronic</th>
              <th>No Data</th><th> Complex</th>
            </tr>
            <tr>
              <td>% of Members</td>
              <td>47.8%</td>
              <td>23.8%</td>
              <td>16.5%</td>
              <td>8.2%</td>
              <td>3.7%</td>
            </tr>
            <tr>
              <td>% of Paid</td>
              <td>47.8%</td>
              <td>23.8%</td>
              <td>16.5%</td>
              <td>8.2%</td>
              <td>3.7%</td>
            </tr>
            <tr>
              <td>Retrospective Risk Score</td>
              <td>47.8%</td>
              <td>23.8%</td>
              <td>16.5%</td>
              <td>8.2%</td>
              <td>3.7%</td>
            </tr>
          </table>
        </DragCard2>
        <DragCard2 heading={"Population Profile"} subheading={"by Relationship Group"} width={"31.5vw"}>
          <table>
            <tr>
              <th>Row Value</th>
              <th>Subscriber</th>
              <th>Dependant/Other</th>
              <th>Spouse</th>
            </tr>
            <tr>
              <td>Average Age (Member)</td>
              <td>36.9</td>
              <td>9.9</td>
              <td>4.6</td>

            </tr>
            <tr>
              <td>% of Female Members</td>
              <td>47.8%</td>
              <td>23.8%</td>
              <td>16.5%</td>

            </tr>
            <tr>
              <td>Benefit Utilization</td>
              <td>47.8%</td>
              <td>23.8%</td>
              <td>16.5%</td>

            </tr>
          </table>
        </DragCard2>
      </DragGrid>
      {/* <DragGrid columns={2} boxes={boxes2}>
      </DragGrid > */}

      {/* <DragCard heading={"Prospective Risk Score"} score={"0.955"} percent={"0.0% Decrease from Prior"} change={"Neutral Change"} /> */}

      {/* <div className="grid">
        {items.map((item, i) => {
          console.log(item);
          console.log(i);
          // if(i<3){
          return (<div
            className={`box ${item.type}-${i}${i === to && to !== from ? " too" : ""}`}
            data-index={i}
            key={item.name}
            draggable="true"
            onDragStart={e => setFrom(Number(e.currentTarget.dataset.index))}
            onDragOver={e => {
              e.preventDefault();
              console.log("index " + e.currentTarget.dataset.index);
              setTo(Number(e.currentTarget.dataset.index));
            }}
            onDragLeave={e => {
              setTo(null);
            }}
            onDragEnd={() => {
              items.splice(to, 0, items.splice(from, 1)[0]);
              setItems(items);
              setFrom(null);
              setTo(null);
              setTo2(null);

              setTo3(null);

            }}
          >
            <MyWidget name={item.name} />
          </div>);
        }
        )}
      </div>
      <div className="grid2">
        {items2.map((item, i) => (
          <div
            style={{ width: `${item.width}`, color: `pink` }}
            className={`box ${item.type}-${i}${i === to2 && to2 !== from2 ? " to" : ""}`}
            data-index={i}
            key={item.name}
            draggable="true"
            onDragStart={e => setFrom2(Number(e.currentTarget.dataset.index))}
            onDragOver={e => {
              e.preventDefault();
              setTo2(Number(e.currentTarget.dataset.index));
            }}
            onDragEnd={() => {
              items2.splice(to2, 0, items2.splice(from2, 1)[0]);
              setItems2(items2);
              setFrom(null);
              setTo(null);
              setTo2(null);

              setTo3(null);
            }}
          >
            <MyWidget name={item.name} />
          </div>
        ))}
      </div>
      <div className="grid3">
        {items3.map((item, i) => (
          <div
            style={{ width: `${item.width}` + 'vw' }}
            className={`box ${item.type}-${i}${i === to3 && to3 !== from3 ? " to" : ""}`}
            data-index={i}
            key={item.name}
            draggable="true"
            onDragStart={e => setFrom3(Number(e.currentTarget.dataset.index))}
            onDragOver={e => {
              e.preventDefault();
              setTo3(Number(e.currentTarget.dataset.index));
            }}
            onDragEnd={() => {
              items3.splice(to3, 0, items3.splice(from3, 1)[0]);
              setItems3(items3);
              setFrom(null);
              setTo(null);
              setTo2(null);

              setTo3(null);
            }}
          >
            <MyWidget name={item.name} />
          </div>
        ))}
      </div> */}
    </div>
  );
};

