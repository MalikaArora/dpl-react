import React, { useState } from 'react';
import './styles.scss';
var count = 0;

const DragCard = (props) => {
  console.log("heading "+props.heading);
  return (
    <div class="DragCard">
      <div className="DragRow1">
        {props.heading}
      </div>
      <div className="DragRow2">
        <div className="DragColumn1">
          {props.score}
        </div>
        <div className="DragColumn2">
          <div className="DragRow3">
            {props.percent}
          </div>
          <div className="DragRow4">
            {props.change}
          </div>
        </div>
      </div>
    </div>
  );
}

const DragCard2 = (props) => {
  return (
    <div className="DragCard2" style={{width:`${props.width}`}}>
      <div className="Drag2Row1">{props.heading}</div>
      <div className="Drag2Row2">{props.subheading}</div>
      <div className="Drag2Row3">{props.children}</div>
    </div>
  );
}

const DragGrid = ( props) => {
  console.log("size " + props.size);


  const [items, setItems] = useState(React.Children.toArray(props.children));

  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);


  const MyWidget = ({ name }) => <div>{name}</div>;

  count++;
  console.log("count " + count);
  console.log(items);


  return (
    // style={{width: `${item.width}`, color: `pink`}}

    // <div className="grid" style={{gridTemplateColumns: `repeat(${props.columns})`}}>
    // <div className="grid" style={{ gridTemplateColumns: `repeat(${props.columns}, auto)`, backgroundColor: `yellow` }}>
    <div className="grid" style={{gridTemplateColumns: `repeat(${props.size},auto)`}}>  


      {items.map((item, i) => {
        console.log(item);
        console.log(i);
        // if(i<3){
        return (<div
          // className={`box ${item.type}-${i}${i === to && to !== from ? " to" : ""}`}
          data-index={i}
          key={item.name}
          draggable="true"
          onDragStart={e => setFrom(Number(e.currentTarget.dataset.index))}
          onDragOver={e => {
            e.preventDefault();
            console.log("index " + e.currentTarget.dataset.index);
            setTo(Number(e.currentTarget.dataset.index));
          }}
          onDragEnd={() => {
            items.splice(to, 0, items.splice(from, 1)[0]);
            setItems(items);
            setFrom(null);
            setTo(null);


          }}
        >
          {item}
          {/* <MyWidget name={item.name} /> */}
        </div>);
      }
      )}
    </div>
  );
}

export { DragGrid, DragCard, DragCard2 };