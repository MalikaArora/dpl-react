import React from "react";
import { Link, withRouter } from "react-router-dom";

const Home = () => {
  return(
    <div>
        <h1>Home</h1>
        <h3>Breadcrumb Demo Links</h3>
        <ul>
            <li>
                <Link to="/">Home</Link>    
            </li>
            <li>
                <Link to="/Item1">Item 1</Link>    
            </li>
            <li>
                <Link to="/Item1/Item2">Item 2</Link>    
            </li>
            <li>
                <Link to="/Item1/Item2/Item3">Item 3</Link>    
            </li>
        </ul>
    </div> 
  );
};

export default Home;
