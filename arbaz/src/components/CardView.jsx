import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCards } from "../features/cardSlice";
import { addCard } from "../features/myCardsSlice";
import "./CardView.scss";

const CardList = () => {
  const [addedCards, setAddedCards] = useState([]);

  const dispatch = useDispatch();
  const cardsState = useSelector((state) => state.cardsStore);
  const myCardsState = useSelector((state) => state.myCardsStore.cards);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  useEffect(() => {
    const addedCardsIds = myCardsState.map((item) => item.id);
    setAddedCards(addedCardsIds);
  }, [myCardsState]);

  const handleAddToMyCards = (item) => {
    if (!addedCards.includes(item.id)) {
      dispatch(addCard(item));
      setAddedCards([...addedCards, item.id]);

      alert(`Press Ok to add "${item.title}" to your collection!`);
    } else {
      alert(`"${item.title}" is already in your collection!`);
    }
  };

  return (
    <div className="card-list">
      {cardsState.loading ? <div>Loading...</div> : null}

      {cardsState.error ? <div>Error: {cardsState.error}</div> : null}

      {cardsState.length === 0 ? (
        <p>No data avalaible Avalaible </p>
      ) : (
        cardsState.cards.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.title} />

            <div className="description">
              <h2>{item.title}</h2>
              <p>{item.description}</p>

              <div className="btnss">
                <button onClick={() => handleAddToMyCards(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CardList;
