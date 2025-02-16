import React, { useState, useRef, useEffect } from 'react';
import './styles.css'; // Make sure this path is correct

const CursorButton = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMenuPosition({ top: rect.top, left: rect.right + 10 });
    }
    setMenuVisible(!menuVisible);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button ref={buttonRef} className="cursor-btn" onClick={toggleMenu}>✨</button>
      {menuVisible && (
        <div ref={menuRef} className="menu" style={{ top: `${menuPosition.top}px`, left: `${menuPosition.left}px` }}>
          <div className="menu-item">1</div>
          <div className="menu-item">2</div>
          <div className="menu-item">3</div>
          <div className="menu-item">4</div>
          <div className="menu-item">5</div>
          <div className="menu-item">6</div>
          <div className="menu-item">7</div>
          <div className="menu-item">8</div>
          <div className="menu-item">9</div>
        </div>
      )}
    </div>
  );
};

export default CursorButton;