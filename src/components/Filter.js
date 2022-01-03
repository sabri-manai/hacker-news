import React from "react";
import { StoriesContainercopy } from '../containers/StoriesContainercopy';

const Filter = (props) => {
  return (
  <div className="header">
   <div className="sub-header">
   <div className="searchMovie">
          <input
            onChange={props.handleSearch}
            type="text"
            placeholder="search author ..."
          />
       </div>

     </div>
    </div>
  );
};

export default Filter;
