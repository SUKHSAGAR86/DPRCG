



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HiMenuItem from './HiMenuItem';
import './HiMenuItem.css';

const HiGetMenu = () => {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('');

  const fetchMenu = async (param = '') => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.get(
        "http://localhost:3081/api/procedure/get-higetmenu", 
        { params: { paramName: param || undefined } }
      );
      
      const records = response.data?.recordset || response.data?.data || response.data;
      setMenuData(Array.isArray(records) ? records : []);
      
    } catch (err) {
      console.error("Error fetching menu data:", err);
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    fetchMenu(filter);
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>Menu Items</h2>
        
        <form onSubmit={handleFilterSubmit} className="filter-form">
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filter items..."
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Filtering...' : 'Filter'}
          </button>
        </form>
      </div>

      {loading ? (
        <div className="loading-indicator">Loading menu data...</div>
      ) : error ? (
        <div className="error-message">
          Error: {typeof error === 'object' ? JSON.stringify(error) : error}
        </div>
      ) : menuData.length > 0 ? (
        <div className="horizontal-menu">
          {menuData.map((item, index) => (
            <HiMenuItem
              key={`${index}-${item.id || item.name || index}`}
              {...item}
            />
          ))}
        </div>
      ) : (
        <div className="no-data">No menu items available.</div>
      )}
    </div>
  );
};

export default HiGetMenu;