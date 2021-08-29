import React, { useState } from "react";
import "./styles.css";

var booksData = {
  JavaScript: [
    { book: "Eloquent JavaScript", rating: "3/5" },
    { book: "You don't know JS", rating: "4/5" },
    { book: "THE PRINCIPLES OF OBJECT-ORIENTED JAVASCRIPT ", rating: "4/5" }
  ],
  FICTION: [
    { book: "Shiva Trilogy", rating: "4/5" },
    { book: "Harry Potter", rating: "3/5" },
    { book: "To Kill a Mockingbird", rating: "3/5" }
  ],
  BUSINESS: [
    { book: "How To Win Friends And Influence People ", rating: "4/5" },
    { book: "Never Split The Difference", rating: "4/5" },
    { book: "Rich Dad Poor Dad", rating: "3/5" }
  ]
};

var data = Object.keys(booksData);
export default function App() {
  const [meaning, setMeaning] = useState("JavaScript");

  function ClickHandler(index) {
    setMeaning(index);
  }

  return (
    <div className="App">
      <h1 className="bks">BOOKS </h1>
      <h1 className="recom">Recommendation</h1>
      <h2> </h2>
      <ul>
        {data.map(function (index) {
          return (
            <li
              className="clickhandler"
              onClick={() => ClickHandler(index)}
              keys={index}
            >
              <div>{index}</div>
            </li>
          );
        })}
      </ul>
      {booksData[meaning].map(function (index) {
        return (
          <li className="bookk">
            <div className="books">
              Book:<span className="bk">{index.book}</span>
            </div>
            <div classNam="rating">
              Rating: <span className="bk">{index.rating}</span>
            </div>
          </li>
        );
      })}
    </div>
  );
}
