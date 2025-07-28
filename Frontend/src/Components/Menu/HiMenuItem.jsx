// import React from 'react';
// import './HiMenuItem.css'; // Optional CSS

// const HiMenuItem = ({ menu_id, menu_name, description }) => {
//   return (
//     <div className="menu-card">
//       <h5 className="text-primary">{menu_name}</h5>
//       <p>ID: {menu_id}</p>
//       {description && <p>{description}</p>}
//       <hr />
//     </div>
//   );
// };

// export default HiMenuItem;

import React from 'react';
import './HiMenuItem.css';

const HiMenuItem = (props) => {
  return (
    <div className="menu-item">
      {Object.entries(props).map(([key, value]) => (
        <div key={key} className="menu-item-field">
          <span className="field-label">{key}:</span>
          <span className="field-value">
            {typeof value === 'object' ? JSON.stringify(value) : String(value)}
          </span>
        </div>
      ))}
    </div>
  );
};

export default HiMenuItem;