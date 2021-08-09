import React from "react";
import "./Item.css";

const Item = ({
  text,
  date,
  tag_heading,
  tag_color,
  link_url,
  link_text,
  ...rest  
}) => {
  return(  
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: tag_color }}>
                {tag_heading}
            </span>
            <time>{date}</time>
            <p>{text}</p>
            <a
                href={link_url}
                target="_blank"
                rel="noopener noreferrer"
            >
                {link_text}
            </a>            
            <span className="circle" />
        </div>
    </div>  
  );
};

export default Item;