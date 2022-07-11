import React from 'react';

function MenuItem(props) {
  return (
    <div>
      <div className="flex justify-start pl-3">
        <h2 className="icon-text text-shade-four">{props.title}</h2>
      </div>
    </div>
  );
}

export default MenuItem;
