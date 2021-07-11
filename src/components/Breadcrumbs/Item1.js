import React from "react";
import { Link, withRouter } from "react-router-dom";
import Breadcrumbs from '@dpl/react-custom-breadcrumbs'

const Item1 = () => {
  return(
    <div>
        <Breadcrumbs>
            <Breadcrumbs.Item render={() => <Link to="/">Home</Link>} />
            <Breadcrumbs.Item last render={() => "Item 1"} />
        </Breadcrumbs>
        <h1>Item 1</h1>
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

export default Item1;