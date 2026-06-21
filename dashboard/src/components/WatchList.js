import React, { useState, useContext } from "react";
import {watchlist} from "../data/data" ;


const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock , index)=>{
          
          return(
            <WatchListItem stock={stock} key={index}/>
          )
          
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
    >
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>
          {stock.name}
        </p>

        <div className="item-info">
          <span className="percent">{stock.percent}</span>

          {stock.isDown ? (
            <i className="bi bi-caret-down-fill down"></i>
          ) : (
            <i className="bi bi-caret-up-fill up"></i>
          )}

          <span className="price">{stock.price}</span>
        </div>
      </div>

      {showWatchlistActions && (
        <WatchListActions uid={stock.name} />
      )}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  return (
    <div className="actions">
      <span>
        <button className="buy">Buy</button>
      </span>

      <span>
        <button className="sell">Sell</button>
      </span>

      <span>
        <button className="action">
          <i className="bi bi-bar-chart"></i>
        </button>
      </span>

      <span>
        <button className="action">
          <i className="bi bi-three-dots"></i>
        </button>
      </span>
    </div>
  );
};
