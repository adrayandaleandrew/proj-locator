import React from 'react';

const SearchHistory = ({ history, onHistoryClick }) => {
  return (
    <div>
      <h2>Search History</h2>
      <ul>
        {history.map((item) => (
          <li key={item.id} onClick={() => onHistoryClick(item.ip_address)}>
            {item.ip_address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
