// src/components/AnnouncementBanner.jsx
import React, { useState, useEffect } from 'react';
import '../../css/style.css';

export default function AnnouncementBanner({
  message    = '🎉 Check out our new RDesk Pro!',
  link       = '/rdesk-pro',
  versionKey = 'rdeskbanner',
  dismissDuration = 10 * 60 * 1000
}) {
  const [visible, setVisible] = useState(false);
  const storageKey = `rdesk-banner-dismissed::${versionKey}`;

  useEffect(() => {
    const ts = parseInt(localStorage.getItem(storageKey), 10);
    if (!ts || Date.now() - ts > dismissDuration) {
      setVisible(true);
    }
   
  }, [storageKey, dismissDuration]);

  const handleClose = e => {
    e.stopPropagation();
    localStorage.setItem(storageKey, Date.now().toString());
    setVisible(false);
  };

  const handleClick = () => {
    window.location.href = link;
  };

  if (!visible) return null;

  return (
    <div className="announcement-wrapper">
      <div className="announcement-banner" onClick={handleClick}>
        <span className="announcement-message">{message}</span>
        <button
          onClick={handleClose}
          className="announcement-close"
          aria-label="Dismiss for 10 minutes"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
