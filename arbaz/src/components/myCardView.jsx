import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { removeCard } from "../features/myCardsSlice";

const MyCardView = () => {
  const myCardsState = useSelector((state) => state.myCardsStore.cards);
  const dispatch = useDispatch();

  const handleRemoveFromMyCards = (item) => {
    dispatch(removeCard(item));
    alert(`Press Ok to remove "${item.title}" from your collection!`);
  };

  return (
    <div>
      <h1>My Cards</h1>

      <div className="card-list">
        {myCardsState.length === 0 ? (
          <p>No cards Avalaible </p>
        ) : (
          myCardsState.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.title} />

              <div className="description">
                <h2>{item.title}</h2>
                <p>{item.description}</p>

                <div className="btnss">
                  <button onClick={() => handleRemoveFromMyCards(item)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyCardView;
