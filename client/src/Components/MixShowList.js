import React from "react";
import "./MixShowList.css";

/**
 * A React component that displays a list of mix shows.
 */
const MixShowList = ({ mixes }) => {
    const safeMixes = Array.isArray(mixes)? mixes : [mixes];
  return (
    <div className="mix-show-list">
      {safeMixes.map((mix) => (
        <div key={mix.id} className="mix-show">
          <h3>{mix.title}</h3>
          <p>{mix.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MixShowList;