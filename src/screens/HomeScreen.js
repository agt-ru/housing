import React, { useState, useEffect } from "react";
import axios from "axios";

import Filter from "../components/Filter";
import Card from "../components/Card";
import useDebounce from '../hooks/useDebounce';
import chevron from "../images/chevron.svg";

const HomeScreen = () => {
  const [cards, setCards] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);
  const debouncedKeyword = useDebounce(keyword, 500);

  useEffect(() => {
    const filterCards = (cards) => {
      return cards.filter((card) =>
        card.title.toLowerCase().includes(debouncedKeyword.toLowerCase())
      );
    };
    async function fetchData() {
      const { data } = await axios.get(
        `https://603e38c548171b0017b2ecf7.mockapi.io/homes`
      );
      const filteredCards = filterCards(data);
      const pages = Math.ceil(filteredCards.length / 6);

      setCards(filteredCards);
      setPages(pages);
    }
    fetchData();
  }, [debouncedKeyword, page]);

  const handleFilter = (keyword) => {
    setPage(0);
    setKeyword(keyword);
  };

  return (
    <div className="mx-2">
      <div className="container">
        <h1>Our Latest Developments</h1>
        <Filter handleFilter={handleFilter} />
        <div className="cards">
          {cards.slice(page * 6, (page + 1) * 6).map((card) => {
            const { id, title, address, type, price } = card;
            return (
              <Card
                id={id}
                key={id}
                title={title}
                address={address}
                type={type}
                price={price}
              />
            );
          })}
        </div>
        <button className="button-see-more" onClick={() => setPage(page + 1 < pages ? page + 1 : 0)}>
          See more
          <img
            src={chevron}
            alt="right chevron"
            className="button-see-more__icon"
          ></img>
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
