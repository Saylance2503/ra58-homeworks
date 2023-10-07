import React from 'react';

function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div>
      {filters.map((filter, index) => (
        <button key={index} onClick={() => onSelectFilter(filter)} className={selected === filter ? 'active' : ''}>
          {filter}
        </button>
      ))}
    </div>
  );
}

export default Toolbar;
