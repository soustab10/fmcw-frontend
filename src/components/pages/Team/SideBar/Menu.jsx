/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import MenuItem from './MenuItem';
const menuItems = {
  sponsor_1: 0,
  sponsor_2: null,
  sponsor_3: null,
  sponsor_4: null,
  sponsor_5: null,
  sponsor_6: null,
  sponsor_7: null,
  sponsor_8: null,
  sponsor_9: null,
  sponsor_10: null,
  sponsor_11: null
};

const menuItemNames = {
  sponsor_1: 'Convenors',
  sponsor_2: 'General Secretary',
  sponsor_3: 'Content Team',
  sponsor_4: 'Design',
  sponsor_5: 'Event',
  sponsor_6: 'Marketing',
  sponsor_7: 'Publicity',
  sponsor_8: 'Public Relations',
  sponsor_9: 'Social Media',
  sponsor_10: 'Tech',
  sponsor_11: 'Secretaries'
};

function Menu() {

  const [activeItem, setActiveItem] = useState('sponsor_1');
  useEffect(() => {
    setTimeout(getAnchorPoints, 1000);
    const observer = new MutationObserver(getAnchorPoints);
    observer.observe(document.getElementById('root'), {
      childList: true,
      subtree: true
    });
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const getAnchorPoints = () => {
    const curScroll = window.scrollY - 80;
    for (const key in menuItems) {
      try {
        menuItems[key] = document.getElementById(key).getBoundingClientRect().top + curScroll;
      } catch (error) {
        console.log(error);
      }
    }
    console.log(menuItems);
    const bottom = document.body.offsetHeight;
    console.log(bottom);
    handleScroll();
  };

  const handleScroll = () => {
    const curPos = window.scrollY;
    for (const section in menuItems) {
      if (menuItems[section] < curPos + 40) {
  
        setActiveItem(section);
        console.log(section);
        console.log(menuItems);
        console.log(curPos);
      } else if (menuItems[section] >= curPos) {
        break;
      }
    }

  };
  const menuList = Object.keys(menuItems).map((e, i) => (
    <MenuItem
      itemName={menuItemNames[e]}
      anchorId={e}
      key={`menuitem_${i}`}
      active={e === activeItem}
      id="menu-item"
      sx={{ background: 'transparent' }}
    />
  ));
  return (
    <section>
      <ul style={{ listStyle: 'none' }} className="menu-list">
        {menuList}
      </ul>
    </section>
  );
}

export default Menu;
