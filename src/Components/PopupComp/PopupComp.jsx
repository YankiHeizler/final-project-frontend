import React, { useState } from 'react';
import './PopupComp.css'
function Popup({children, open, closeFn}) {
  
 

  return (
    <div >
    {open && (
      <div className="popup-container" >
          <div className="popup-modal" >
          <button onClick={closeFn}>X</button>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
