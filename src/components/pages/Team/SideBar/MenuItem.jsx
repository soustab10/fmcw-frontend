/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react';

function MenuItem({ anchorId, itemName, active }) {
  const [anchorTarget, setAnchorTarget] = useState(null);

  useEffect(() => {
    setAnchorTarget(document.getElementById(anchorId));
  }, [anchorId]);

  function handleClick(e) {
    e.preventDefault();
   
    const yOffset = -90;
    const y = anchorTarget.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  return (
    <li>
      <a
        href={`#${itemName}`}
        onClick={handleClick}
        aria-label={`Scroll to ${itemName}`}
        style={active ? { color: '#fcc907' } : { color: 'white' }}>
        <h1>{itemName}</h1>
      </a>
    </li>
  );
}

export default MenuItem;
